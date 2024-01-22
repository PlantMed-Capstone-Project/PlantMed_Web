import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

export const CardThreeD = React.memo(function CardThreeD(props) {
    const [hoverImg, setHoverImg] = useState(false)

    const { data } = props
    return (
        <Card
            sx={{
                width: '30rem',
                height: '22.125rem',
                borderRadius: '0.625rem',
                boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
            }}
        >
            <Box sx={{ height: '12.5rem', width: '100%', overflow: 'hidden' }}>
                <CardMedia
                    sx={{
                        height: '100%',
                        with: '100%',
                        scale: hoverImg && '1.2',
                        transition: 'all 0.2s',
                    }}
                    image={data.image}
                    title="green iguana"
                    onMouseEnter={() => setHoverImg(true)}
                    onMouseLeave={() => setHoverImg(false)}
                />
            </Box>
            <CardContent sx={{ padding: '0.4rem 0.4rem 0 0.4rem' }}>
                <Typography gutterBottom variant="h5" component="div">
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
                    padding: '0.4rem',
                }}
            >
                <Button sx={{ color: '#69AD28' }}>Xem thêm</Button>
            </Box>
        </Card>
    )
})

export default CardThreeD
