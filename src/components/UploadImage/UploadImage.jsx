import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SendIcon from '@mui/icons-material/Send'
import {
    Box,
    CardMedia,
    CircularProgress,
    IconButton,
    Stack,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { predict } from 'rest/api/predict'
import * as styleMui from './UploadImage.styled'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'

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

function UploadImage({ setDataPredic, setPercenPredict }) {
    const [imageLoaded, setImageLoaded] = useState()
    const [imgFile, setImgFile] = useState()
    const [loading, setLoading] = useState(false)
    const { show } = useActions(snackbarAction)
    // const [slide, setSlide] = useState(false)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

    const handleFileChange = (event) => {
        if (
            event.target.files.length > 0 &&
            allowedTypes.includes(event.target.files[0].type)
        ) {
            setImageLoaded(URL.createObjectURL(event.target.files[0]))
            // đổi thành base64 string rồi quăng lại cho server
            setImgFile(event.target.files[0])
        }
    }

    const uploadFile = async () => {
        setLoading(true)
        try {
            const res = await predict({ file: imgFile })
            setDataPredic(res.data.plant.id.toLowerCase())
            setPercenPredict(res.data.accuracy)
        } catch (error) {
            console.log(error)
            show({
                message: 'có vấn đề khi phân tích ảnh xin thử lại !',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        } finally {
            setLoading(false)
        }
    }

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
                    <styleMui.btnSend variant="contained" onClick={uploadFile}>
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
                            <styleMui.textBtn>Gửi ảnh đi</styleMui.textBtn>
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
                    </styleMui.btnSend>
                )}
            </styleMui.container>
        </styleMui.background>
    )
}

export default UploadImage
