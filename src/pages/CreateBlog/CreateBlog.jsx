import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import Editor from 'components/Editor/Editor'

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

function CreateBlog() {
    return (
        <Box
            component="section"
            sx={{
                width: '90rem',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F4FFEB',
            }}
        >
            <Box
                sx={{
                    padding: '3.125rem 8.62rem',
                    position: 'relative',
                }}
            >
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '2.188rem',
                        fontWeight: 500,
                        marginBottom: '3.125rem',
                    }}
                >
                    BÀI VIẾT CỦA BẠN
                </Typography>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '3.125rem',
                        boxShadow: 3,
                        borderRadius: 2,
                    }}
                >
                    <TextField
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Tiêu đề bài viết"
                        multiline
                        maxRows={4}
                        size="small"
                        color="success"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderStyle: 'dashed',
                                },
                            },
                            marginBottom: '1.25rem',
                        }}
                    />
                    <Button
                        component="label"
                        variant="contained"
                        color="success"
                        endIcon={<CloudUploadIcon />}
                        sx={{
                            marginBottom: '1.25rem',
                        }}
                    >
                        Tải ảnh lên
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <Editor />
                </Box>
                <Box
                    sx={{
                        marginTop: '1.25rem',
                        textAlign: 'end',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#69AD28',
                            padding: '0.375rem 1.875rem !important',
                            fontSize: '1rem',
                            ':hover': { bgcolor: 'success.main' },
                            textTransform: 'none',
                        }}
                    >
                        Đăng bài
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CreateBlog
