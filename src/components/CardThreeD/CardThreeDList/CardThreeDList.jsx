import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

export const CardThreeD = React.memo(function CardThreeD(props) {
    const [hoverImg, setHoverImg] = useState(false)

    const { data } = props
    return (
        <Card
            onMouseOver={() => setHoverImg(true)}
            onMouseOut={() => setHoverImg(false)}
            sx={{
                width: '20rem',
                height: '22.5rem',
                borderRadius: '0.625rem',
                boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
                scale: hoverImg && '1.1',
                transition: 'all 0.2s ease',
                marginTop: '1rem',
            }}
        >
            <Box sx={{ height: '12.5rem', width: '100%' }}>
                <CardMedia
                    sx={{
                        height: '100%',
                        with: '100%',
                    }}
                    image={data.image}
                    title="green iguana"
                />
            </Box>
            <CardContent sx={{ padding: '0.5rem 1rem 0 1rem' }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: '600' }}
                >
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description.length > 100
                        ? data.description.slice(0, 99) + '...'
                        : data.description}
                </Typography>
            </CardContent>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button sx={{ color: '#69AD28' }}>Xem thêm</Button>
            </Box>
        </Card>
    )
})

export default CardThreeD
