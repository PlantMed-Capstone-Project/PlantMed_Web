import SigninForm from 'components/SigninForm/SigninForm'
import { Box, Typography } from '@mui/material'
import backgroundImage from 'Images/heroSen.jpg'

function SigninPage() {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    filter: `blur(5px)`,
                    zIndex: -1,
                }}
            ></Box>
            <Typography
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: '10rem',
                    left: '53rem',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#FFF',
                }}
            >
                CHÀO MỪNG <br />
                TRỞ LẠI VỚI PLANTMED
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: '16rem',
                    left: '51rem',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '200',
                    fontStyle: 'italic',
                    color: '#FFF',
                }}
            >
                Đây là trang đăng nhập dành cho cá nhân
                <br />
                đã có tài khoản tại PLANTMED
            </Typography>
            <SigninForm></SigninForm>
        </Box>
    )
}

export default SigninPage
