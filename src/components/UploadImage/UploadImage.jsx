import { Box, Button, CardMedia, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import * as styleMui from './UploadImage.styled'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { motion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'
import axios from 'axios'

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

function UploadImage() {
    const [imageLoaded, setImageLoaded] = useState()
    const [imaePush, setImagePush] = useState()
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

    const handleFileChange = (event) => {
        if (
            event.target.files.length > 0 &&
            allowedTypes.includes(event.target.files[0].type)
        ) {
            setImageLoaded(URL.createObjectURL(event.target.files[0]))
            setImagePush(event.target.files[0])
        }
    }

    const fileUpload = () => {
        const fd = new FormData()
        fd.append('file', imaePush)
        axios
            .post('https://predict-qj5v.onrender.com/upload', fd, {
                headers: { 'Content-type': 'multipart/form-data' },
            })
            .then((res) => {
                console.log(`Success` + res.data)
            })
            .catch((err) => {
                console.log(err)
            })
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
                    <styleMui.btnSend
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={fileUpload}
                    >
                        Gửi ảnh đi
                    </styleMui.btnSend>
                )}
            </styleMui.container>
        </styleMui.background>
    )
}

export default UploadImage
