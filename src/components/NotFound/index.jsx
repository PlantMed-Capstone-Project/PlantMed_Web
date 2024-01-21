import { Box, CardMedia } from '@mui/material'
import React from 'react'
import notfoundImage from 'Images/notfound.png'

const NotFound = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ width: '77.125rem', height: '38.5625rem' }}>
                <CardMedia
                    component="img"
                    image={notfoundImage}
                    alt="Khong tim thay"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    )
}

export default NotFound
