import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import React from 'react'

export const CardThreeD = React.memo(function CardThreeD(props) {
    const { data, opacity, scale } = props
    return (
        <Card
            sx={{                
                width: '20.875rem',
                height: '17.5rem',
                borderRadius: '0.625rem',
                boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
                transition: 'all 0.2s ease',
                margin: '2rem 1rem',
                opacity: opacity,
                scale: scale,
            }}
        >
            <Box sx={{ height: '10.5rem', width: '100%' }}>
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
                    variant="h6"
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
        </Card>
    )
})

export default CardThreeD
