import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { limitStr, parseImg } from 'utils'

export const CardThreeD = React.memo(function CardThreeD(props) {
    const { data } = props
    const [hover, setHover] = useState(false)
    return (
        <Card
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                width: '24.875rem',
                height: '17.8rem',
                borderRadius: '0.625rem',
                boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
                transition: 'all 0.2s ease',
                margin: '2rem 1rem',
                cursor: 'pointer',
                scale: hover ? '1.05' : '1',
            }}
        >
            <Box sx={{ height: '10.5rem', width: '100%' }}>
                {data ? (
                    <CardMedia
                        sx={{
                            height: '100%',
                            with: '100%',
                        }}
                        image={parseImg(data?.images[0].data)}
                        title="green iguana"
                    />
                ) : (
                    <Skeleton
                        variant="rectangular"
                        sx={{ height: '100%', width: '100%' }}
                    />
                )}
            </Box>
            <CardContent sx={{ padding: '0.5rem 1rem 0 1rem' }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: '600' }}
                >
                    {data ? data.name : <Skeleton />}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data ? limitStr(data.usage, 100) : <Skeleton />}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default CardThreeD
