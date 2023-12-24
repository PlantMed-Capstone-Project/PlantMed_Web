import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';


export default function Footer({valueTop}) {

    const socialData = [<FacebookOutlinedIcon />, <InstagramIcon />, <TelegramIcon />, <CallIcon />]

    return (
        <Stack
            direction="column"
            spacing="1.12rem"
            alignItems="center"
            sx={
                {
                    pt: "3rem",
                    backgroundColor: "#214400",
                    height: "18.75rem",
                    width: "100%",
                    marginTop:`${valueTop}rem`
                }
            }
        >
            <Stack
                direction="row"
                spacing="1.44rem"
                justifyContent="center"
                width="100%"
            >
                {
                    socialData.map((vl, idx) => (
                        <Box
                            key={idx}
                            sx={
                                {
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "50%",
                                    backgroundColor: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#214400"
                                }
                            }
                        >
                            {vl}
                        </Box>
                    ))
                }
            </Stack>
            <Typography sx={{ color: "#FFF", fontSize: "1.25rem", fontWeight: "500", lineHeight:"normal" }}>LIÊN HỆ CHÚNG TÔI</Typography>
            <Typography sx={{fontFamily:"Roboto Serif", fontSize:"0.9375rem", fontWeight:"400", color:"white"}}>0292 7773 636</Typography>
            <Typography sx={{fontFamily:"Roboto Serif", fontSize:"0.9375rem", fontWeight:"400", color:"white"}}>fptu.cantho@fpt.edu.vn</Typography>
            <Typography sx={{fontFamily:"Roboto Serif", fontSize:"0.9375rem", fontWeight:"400", color:"white"}}>Khu vực 6, Phường An Bình, Quận Ninh Kiều, Tp Cần Thơ</Typography>

        </Stack>
    )
}
