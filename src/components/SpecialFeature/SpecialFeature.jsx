import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import lapImage from '../../Images/lap.png'

export default function SpecialFeature() {
    return (
        <>
            <Stack
                direction="column"
                alignItems="flex-end"
                sx={{
                    position: "relative",
                    width: "72.75rem",
                    height: "50rem",
                    backgroundColor: "#FFF",
                    boxShadow: "0px 4px 5px 2px rgba(33, 68, 0, 0.30)",
                    marginTop: "6.38rem",
                    p: "5rem 4.81rem 0 0"
                }}
            >
                <Typography sx={{ color: "#214400", fontSize: "2.1875rem", fontWeight: "500" }}>TÍNH NĂNG NỔI BẬT</Typography>
                <Typography variant="body1" component="p" sx={{ width: "39.45rem", color: "#69AD28", fontSize: "3.4375rem", fontWeight: "700", fontStyle: "italic", textAlign: "right", marginTop: "3rem" }}>
                    TÌM KIẾM THÔNG TIN BẰNG HÌNH ẢNH NHANH CHÓNG <br /> HIỆU QUẢ
                </Typography>
                <Button sx={{
                    color: "white", backgroundColor: "#69AD28", width: "13.6875rem", height: "3.375rem", borderRadius: "0.3125rem", marginTop: "9rem",
                    '&:hover': {
                        backgroundColor: '#5e8c22', // Màu sắc hover khác
                    },
                }}>
                    Xem thêm
                </Button>
                <Box
                    sx={
                        {
                            position: "absolute",
                            top: "3rem",
                            left: "5rem",
                            height: "46rem",
                            width: "42rem",
                        }
                    }
                >
                    <img src={lapImage} alt="lap top" style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition:"0 0" }} />
                </Box>
            </Stack>
        </>

    )
}
