import {
    Box,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { convertString, parseImg } from 'utils'
import * as styleMui from './CardThreeDList.styled'

export const CardThreeD = React.memo(function CardThreeD(props) {
    const { data, idx } = props
    const [hover, setHover] = useState(false)

    const navigate = useNavigate()

    const goDetail = (id) => {
        if (id) {
            navigate(`/plants/${id}`)
        } else return
    }
    return (
        <styleMui.CustomBoxPopup
            hover={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => goDetail(data.id)}
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
                    {data ? convertString(data.usage, 100) : <Skeleton />}
                </Typography>
            </CardContent>
        </styleMui.CustomBoxPopup>
    )
})

export default CardThreeD
