import { Box } from '@mui/material'
import UploadImage from 'components/UploadImage/UploadImage'
import React from 'react'

export default function DetectionPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90rem',
            }}
        >
            <UploadImage />
        </Box>
    )
}
