import { Box, Button, CardMedia, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import * as styleMui from './UploadImage.styled'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
    const [fileUpload, setFileUpload] = useState(null)
    const [imageLoaded, setImageLoaded] = useState()

    const handleFileChange = (event) => {
        setFileUpload(event.target?.files[0])
        setImageLoaded(URL.createObjectURL(event.target?.files[0]))
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
                justifyContent="center"
            >
                {imageLoaded ? (
                    <Box
                        component="label"
                        sx={{
                            width: '60rem',
                            height: '25rem',
                            borderRadius: '0.625rem',
                            overflow: 'hidden',
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ height: '25rem', objectFit: 'contain' }}
                            image={imageLoaded}
                            title="green iguana"
                        />
                        <VisuallyHiddenInput type="file" />
                    </Box>
                ) : (
                    <styleMui.uploadPlace>
                        <Box
                            component="label"
                            sx={{
                                width: '17rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.2rem',
                            }}
                        >
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
                                            width: '5.625rem',
                                            height: '5.625rem',
                                            color: '#69AD28',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <VisuallyHiddenInput type="file" />
                                </IconButton>
                            </Box>
                            <Typography
                                sx={{
                                    color: '#69AD28',
                                    fontSize: '1.56rem',
                                    fontWeight: '400',
                                }}
                            >
                                Kéo thả hoặc tải ảnh lên
                            </Typography>
                        </Box>
                    </styleMui.uploadPlace>
                )}
            </styleMui.container>
        </styleMui.background>
    )
}

export default UploadImage
