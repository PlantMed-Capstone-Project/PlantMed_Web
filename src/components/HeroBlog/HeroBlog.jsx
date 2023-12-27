import React from 'react'
import girlComputer from "../../Images/girl-computer.png"
import { Box, Stack, Typography, Button } from '@mui/material'

function HeroBlog() {
    return (
        <Box sx={{
            backgroundColor: "#F4FFEB",
            width: "100%",
            marginTop: "15px",
            position: "relative",
            height: "450px"
        }}>
            <Box sx={{ margin: "60px 0px 0px 140px" }}>
                <Typography variant='h3' sx={{
                    fontSize: "50px",
                    fontWeight: "500",
                    color: "#69AD28",
                    fontFamily: "Roboto Serif"
                }}>
                    TẠO BÀI VIẾT CỦA BẠN
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    width: "574px",
                    fontWeight: "700",
                    color: "#214400",
                    marginTop: "20px"
                }}>
                    Với sự hiểu biết của bạn về các loại thực vật, hãy chia sẻ những kiến thức đó với mọi người thông qua bài viết của riêng mình.
                </Typography>
                <Button variant='contained' sx={{
                    backgroundColor: "#69AD28",
                    marginTop: "100px",
                    padding: "6px 30px !important",
                    fontSize: "16px",
                    ":hover": { bgcolor: "success.main" }
                }}>
                    Viết bài
                </Button>
            </Box>
            <Box component="img" alt='girl-computer' src={girlComputer} sx={{
                height: 450,
                width: 690,
                position: "absolute",
                right: 0,
                bottom: "-50px"
            }}>
            </Box>
        </Box>
    )
}

export default HeroBlog