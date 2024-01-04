import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import demoImage from 'Images/herogreen.jpg'
import * as muiStyle from './MoreBlog.styled'

export default function MoreBlog() {

    const [visible, setVisible] = useState(4)

    const inCrease = () => {
        setVisible((prevVisible) => prevVisible + 4)
    }

    return (
        <Stack direction="column" alignItems="center" pt="2.94rem" width="90rem" spacing="2.38rem">
            <muiStyle.text>
                XEM THÊM CÁC BÀI VIẾT TƯƠNG TỰ
            </muiStyle.text>
            <Stack direction="row" width="73rem" flexWrap="wrap" sx={{ columnGap: "0.6rem", rowGap: "1rem" }}>
                {/* Sử dụng phương thức ...Array để tạo 1 mãng có 10 phần tử */}
                {
                    [...Array(10)].slice(0, visible).map(() => (
                        <muiStyle.cardBox>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="134"
                                image={demoImage}
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ fontSize: "1.1rem" }}>
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.6rem" }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </muiStyle.cardBox>
                    ))
                }
                {/* End card */}
            </Stack>
            {
                visible < 10 && 
                <muiStyle.Button onClick={() => inCrease()}>Xem thêm</muiStyle.Button>
            }
        </Stack>
    )
}
