import SignupForm from 'components/SignupForm/SignupForm'
import { Box, Typography } from '@mui/material'
import backgroundImage from 'Images/cannabis.png'

function SignupPage() {
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
                BẠN ĐẾN VỚI PLANTMED
            </Typography>            
            <SignupForm></SignupForm>
        </Box>
    )
}

export default SignupPage
