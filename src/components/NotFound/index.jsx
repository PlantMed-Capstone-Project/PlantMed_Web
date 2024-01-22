import { Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react'
import notfoundImage from 'Images/notfound.png'
import * as styleMui from './NotFound.styled'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    const gotoHomePage = () => {
        navigate({
            pathname: '/',
        })
    }

    return (
        <styleMui.container>
            <styleMui.containerImg>
                <CardMedia
                    component="img"
                    image={notfoundImage}
                    alt="Khong tim thay"
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
            </styleMui.containerImg>
            <styleMui.text>KHÔNG TÌM THẤY TRANG</styleMui.text>
            <styleMui.btn
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => gotoHomePage()}
            >
                Quay về trang chủ
            </styleMui.btn>
        </styleMui.container>
    )
}

export default NotFound
