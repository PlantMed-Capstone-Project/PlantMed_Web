import React from 'react'
import { Box, Typography, Button } from "@mui/material"
import TextField from '@mui/material/TextField';

function JoinBlog() {
    return (
        <Box sx={{ marginTop: "60px", backgroundColor: "#F4FFEB", width: "90%", display: "flex" }}>
            <Box sx={{ padding: "45px 0px 45px 60px" }}>
                <Typography sx={{ color: "#69AD28", fontSize: "35px", fontWeight: "500", fontFamily: "Roboto serif" }}>Tham gia nhận thông báo</Typography>
                <Typography sx={{ fontWeight: "300", color: "#214400", width: "450px", marginTop: "20px" }}>Để lại địa chỉ mail của bạn để nhận được thông báo sớm nhất về các bài viết nổi bật tại PLANTMED</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", paddingRight: "60px" }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { mr: 2, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email của bạn"
                        multiline
                        maxRows={4}
                        size='small'
                        color='success'
                    />
                </Box>
                <Button variant='contained' sx={{ backgroundColor: "#69AD28", padding: "6px 30px !important", fontSize: "16px", ":hover": { bgcolor: "success.main" } }}>
                    Gửi
                </Button>
            </Box>
        </Box>
    )
}

export default JoinBlog