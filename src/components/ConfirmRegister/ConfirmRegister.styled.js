import { styled, Box, Typography, Button } from '@mui/material'

export const verifyContainer = styled(Box)(() => ({
    width: '38rem',
    height: '35rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    gap: '2rem',
}))

export const verifyImageBg = styled(Box)(({ verifyImage }) => ({
    backgroundImage: `url(${verifyImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
}))

export const Title = styled(Typography)(({ color }) => ({
    textAlign: 'justify',
    textTransform: 'capitalize',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: { color },
    paddingTop: '2rem',
}))

export const btn = styled(Button)({
    backgroundColor: '#616403',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    top: '90%',
    '&:hover': {
        backgroundColor: '#69AD28',
        color: '#fff',
    },
})
