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
    const [progress, setProgress] = useState(0)
    const [imageLoaded, setImageLoaded] = useState()
    const [imgFile, setImgFile] = useState()
    const [loading, setLoading] = useState(false)
    const [progressStatus, setProgressStatus] = useState(false)
    const [prevResult, setPrevResult] = useState(false)
    const { show } = useActions(snackbarAction)
    // const [slide, setSlide] = useState(false)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

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
        } catch (error) {
            console.log(error)
            show({
                message: 'Có vấn đề khi phân tích ảnh xin thử lại !',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
            setPrevResult(false)
        } finally {
            setProgressStatus(false) // Bắt đầu tiến trình
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
                console.log('chay')
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
            >
                {imageLoaded ? (
                    <styleMui.imageLoadBox
                        component="label"
                        onChange={(event) => handleFileChange(event)}
                        onClick={(event) => {
                            event.target.value = null
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ height: '35rem', objectFit: 'cover' }}
                            image={imageLoaded}
                            title="green iguana"
                        />
                        <VisuallyHiddenInput type="file" />
                    </styleMui.imageLoadBox>
                ) : (
                    <styleMui.uploadPlace>
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
                                >
                                    <CloudUploadIcon
                                        sx={{
                                            width: '15rem',
                                            height: '15rem',
                                            color: '#69AD28',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <VisuallyHiddenInput type="file" />
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
                                onClick={uploadFile}
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
