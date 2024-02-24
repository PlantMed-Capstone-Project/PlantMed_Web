import CallIcon from '@mui/icons-material/Call'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Stack, Typography } from '@mui/material'
import * as styleMui from './Footer.styled'

export default function Footer({ topspacing }) {
    const socialData = [
        { id: 1, icon: <FacebookOutlinedIcon /> },
        { id: 2, icon: <InstagramIcon /> },
        { id: 3, icon: <TelegramIcon /> },
        { id: 4, icon: <CallIcon /> },
    ]

    return (
        <styleMui.ContainerAll
            direction="column"
            spacing="1.12rem"
            alignItems="center"
            topspacing={topspacing}
        >
            <Stack
                direction="row"
                spacing="1.44rem"
                justifyContent="center"
                width="100%"
            >
                {socialData.map((item) => (
                    <styleMui.ContainerIcon key={item.id}>
                        {item.icon}
                    </styleMui.ContainerIcon>
                ))}
            </Stack>
            <Typography
                sx={{
                    color: '#FFF',
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    lineHeight: 'normal',
                }}
            >
                LIÊN HỆ CHÚNG TÔI
            </Typography>
            <styleMui.Text>0292 7773 636</styleMui.Text>
            <styleMui.Text>fptu.cantho@fpt.edu.vn</styleMui.Text>
            <styleMui.Text>
                Khu vực 6, Phường An Bình, Quận Ninh Kiều, Tp Cần Thơ
            </styleMui.Text>
        </styleMui.ContainerAll>
    )
}
