import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SendIcon from '@mui/icons-material/Send'
import {
    Box,
    Button,
    CardMedia,
    CircularProgress,
    IconButton,
    LinearProgress,
    Stack,
    Typography,
} from '@mui/material'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import { motion } from 'framer-motion'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { predict } from 'rest/api/predict'
import * as styleMui from './UploadImage.styled'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { predictHistory } from 'rest/api/history'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

function UploadImage({ setDataPredic, handle }) {
    const { isLogin } = useShallowEqualSelector((state) => state.auth)
    const { show } = useActions(snackbarAction)

    const [progress, setProgress] = useState(0)
    const [imageLoaded, setImageLoaded] = useState()
    const [imgFile, setImgFile] = useState()
    const [loading, setLoading] = useState(false)
    const [progressStatus, setProgressStatus] = useState(false)
    const [prevResult, setPrevResult] = useState(false)

    // Mình sẽ đến số lượt state tăng lên theo mỗi lần call và nếu state === 3 thì mình stop calling và navigate đến đăng nhập để được gọi thêm
    const [timeCalling, setTimeCalling] = useState(0)

    // Hàm Này xử lý condition về việc có đăng nhập hay chưa để gọi api trong nếu chưa thì state tiếp tục tăng, nếu rồi thì mỗi lần gọi thì nó ko tăng và clear state
    const handleTimeCalling = () => {
        // Kiểm tra nếu chưa đăng nhập và đã đạt đến giới hạn 3 lần gửi POST
        if (!isLogin && timeCalling >= 3) {
            show({
                message:
                    'Vui lòng đăng nhập để được sử dụng thêm tính năng này !',
                severity: SNACKBAR_SEVERITY.WARNING,
            })
            return
        }

        uploadFile()

        // Tăng số lần gửi POST nếu chưa đăng nhập
        if (!isLogin) {
            const updatedCount = timeCalling + 1
            setTimeCalling(updatedCount)
            localStorage.setItem('postCount', updatedCount) // Lưu trạng thái vào localStorage
        }
    }

    // const [slide, setSlide] = useState(false)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

    // Hàm này là để thể hiện các xử lý liên quan đến drag ảnh
    const { getRootProps, getInputProps, open } = useDropzone({
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
        },
        onDrop: (acceptedFiles) => {
            setProgress(0)
            setLoading(false)
            setPrevResult(false)
            setImageLoaded(URL.createObjectURL(acceptedFiles[0]))
            setImgFile(acceptedFiles[0])
            localStorage.setItem(
                'imagePredict',
                URL.createObjectURL(acceptedFiles[0])
            )
        },
        noClick: true,
        noKeyboard: true,
    })

    // Hàm xử lý các vấn đề liên quan đến nhấn chọn ảnh
    const handleFileChange = (event) => {
        setProgress(0)
        setLoading(false)
        setPrevResult(false)

        if (
            event.target.files.length > 0 &&
            allowedTypes.includes(event.target.files[0].type)
        ) {
            setImageLoaded(URL.createObjectURL(event.target.files[0]))
            // đổi thành base64 string rồi quăng lại cho server
            setImgFile(event.target.files[0])
            localStorage.setItem(
                'imagePredict',
                URL.createObjectURL(event.target.files[0])
            )
        }
    }

    const uploadFile = async () => {
        setProgressStatus(true) // Bắt đầu tiến trình
        show({
            message: 'Đang phân tích ảnh vui lòng đợi trong giây lát !',
            severity: SNACKBAR_SEVERITY.SUCCESS,
        })
        try {
            const res = await predict({ file: imgFile })
            setDataPredic(res.data)
            localStorage.setItem('dataPredict', JSON.stringify(res.data))
            setProgress(100)
            setPrevResult(true)
            if (res.status === 200 && isLogin) {
                postHistory(
                    res.data.plant.id,
                    parseFloat(res.data.accuracy.replace('%', ''))
                )
            }
        } catch (error) {
            console.log(error)
            show({
                message: 'Có lỗi phân tích ảnh, vui lòng thử lại !',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
            setPrevResult(false)
        } finally {
            setProgressStatus(false) // Kết thúc tiến trình
        }
    }

    // Đưa thông tin đã được predict vào database
    const postHistory = async (plantId, accuracy) => {
        try {
            await predictHistory({ plantId: plantId, accuracy: accuracy })
            show({
                message: 'Kết quả đã được lưu vào lịch sử!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const openPopup = () => {
        handle(true)
    }

    // hàm chạy thanh progress bar
    useEffect(() => {
        if (progressStatus) {
            setLoading(true)
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const nextProgress = prevProgress + 1
                    if (nextProgress >= 100) {
                        clearInterval(timer)
                        return 100
                    }
                    return nextProgress
                })
            }, 50)
            return () => {
                clearInterval(timer)
            }
        }
    }, [progressStatus])

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                setLoading(false)
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [progress])

    // Hàm này sẽ hỗ trợ chúng ta cho việc gọi storage và thêm vào state
    useEffect(() => {
        // Kiểm tra nếu đã lưu trữ postCount trong localStorage
        const storedPostCount = localStorage.getItem('postCount')
        if (storedPostCount) {
            setTimeCalling(parseInt(storedPostCount))
        }
    }, [])

    return (
        <styleMui.background
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <styleMui.container
                direction="column"
                alignItems="center"
                isloaded={imageLoaded}
                onClick={(e) => e.stopPropagation()}
            >
                {imageLoaded ? (
                    <styleMui.imageLoadBox
                        component="label"
                        onChange={(event) => handleFileChange(event)}
                        onClick={(e) => e.target.value === null}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <CardMedia
                            component="img"
                            sx={{ height: '35rem', objectFit: 'cover' }}
                            image={imageLoaded}
                            title="green iguana"
                        />
                        <VisuallyHiddenInput type="file" onClick={open} />
                    </styleMui.imageLoadBox>
                ) : (
                    <styleMui.uploadPlace {...getRootProps()}>
                        <input {...getInputProps()} />
                        <styleMui.containerIcon component="label">
                            <Box
                                component={motion.div}
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 20 }}
                                onChange={(event) => handleFileChange(event)}
                            >
                                <IconButton
                                    component="label"
                                    variant="contained"
                                    onClick={open}
                                >
                                    <CloudUploadIcon
                                        sx={{
                                            width: '15rem',
                                            height: '15rem',
                                            color: '#69AD28',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </IconButton>
                            </Box>
                            <styleMui.txtUnderIcon>
                                Kéo thả hoặc tải ảnh lên
                            </styleMui.txtUnderIcon>
                        </styleMui.containerIcon>
                    </styleMui.uploadPlace>
                )}

                {imageLoaded && (
                    <>
                        <Box
                            sx={{
                                width: '80%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}
                        >
                            <LinearProgress
                                sx={{
                                    width: '60%',
                                    [`& .${linearProgressClasses.bar}`]: {
                                        borderRadius: 5,
                                        backgroundColor: '#8ad345',
                                    },
                                    [`&.${linearProgressClasses.colorPrimary}`]:
                                        {
                                            backgroundColor: '#F4FFEB',
                                        },
                                }}
                                variant="determinate"
                                value={progress}
                            />
                            <Typography variant="subtitle2">{`${Math.round(
                                progress
                            )}%`}</Typography>
                        </Box>
                        <Stack
                            flexDirection="row"
                            alignItems="center"
                            sx={{ gap: '2rem' }}
                        >
                            <styleMui.btnSend
                                variant="contained"
                                onClick={handleTimeCalling}
                                disabled={loading}
                            >
                                <>
                                    <Stack
                                        direction="row"
                                        spacing="0.5rem"
                                        component={motion.div}
                                        initial={{ opacity: 1, x: 0 }}
                                        animate={{
                                            opacity: loading ? 0 : 1,
                                            x: loading ? 100 : 0,
                                        }}
                                    >
                                        <styleMui.textBtn>
                                            Gửi ảnh đi
                                        </styleMui.textBtn>
                                        <SendIcon sx={{ color: '#FFF' }} />
                                    </Stack>
                                    {loading && (
                                        <styleMui.spinProgress>
                                            <CircularProgress
                                                size={30}
                                                sx={{
                                                    color: '#FFF',
                                                }}
                                            />
                                        </styleMui.spinProgress>
                                    )}
                                </>
                            </styleMui.btnSend>
                            {prevResult && (
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: '2.1875rem',
                                        width: '8.25rem',
                                        backgroundColor: '#69AD28',
                                        '&:hover': {
                                            backgroundColor: '#8ad345',
                                        },
                                        cursor: 'pointer',
                                        borderRadius: '0.1875rem',
                                        padding: '0 0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => openPopup()}
                                    component={motion.button}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                >
                                    Xem kết quả
                                </Button>
                            )}
                        </Stack>
                    </>
                )}
            </styleMui.container>
        </styleMui.background>
    )
}

export default UploadImage
