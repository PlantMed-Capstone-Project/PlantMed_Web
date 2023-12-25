import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import Slider from "react-slick";
import imgDemo from '../../Images/heroSi.jpg'
import './DiversityPlant.css'

export default function DiversityPlant() {

    // do cần custom lại thư viện nên cần sử dụng css

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0",
    };


    return (
        <Stack
            direction="column"
            alignItems="center"
            width="100%"
            mt="6.19rem"
        >
            <Typography sx={{ color: "#214400", fontSize: "2.1875rem", fontWeight: "500" }}>ĐA DẠNG CÁC LOẠI THỰC VẬT</Typography>
            <Box
                sx={{
                    height: "500px",
                    width: "100%",
                }}
            >
                <Slider {...settings}>
                    {
                        [...Array(10)].map((vl, idx) => (
                            <Card
                                className='card_feature'
                                key={idx}
                                sx={
                                    {
                                        height: "18.48163rem",
                                        width: "18.98344rem",
                                        boxShadow: "3",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                    }
                                }
                            >
                                <CardMedia
                                    sx={{ height: 160}}
                                    image={imgDemo}
                                    title="green iguana"
                               

                                />
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ fontSize: "1.1rem", fontWeight: "600" }}>
                                        Cầu Kỳ Tử
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Slider>
            </Box>
        </Stack>

    )

}
