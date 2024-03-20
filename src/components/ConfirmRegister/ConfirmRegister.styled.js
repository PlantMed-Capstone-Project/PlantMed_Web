import { styled, Box, Typography, Button } from '@mui/material'

export const verifyContainer = styled(Box)({
    width: '46rem',
    height: '43rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10rem',
})

export const verifyImageBg = styled(Box)(({ verifyImage }) => ({
    backgroundImage: `url(${verifyImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '90%',
    height: '80%',
}))

export const Title = styled(Typography)((props) => ({
    textTransform: 'capitalize',
    fontSize: '2rem',
    fontWeight: '700',
    paddingTop: '2rem',
    ...props,
}))

export const btn = styled(Button)(({ isSuccess = false }) => ({
    backgroundColor: isSuccess ? '#3498db' : '#e74c3c',
    color: '#FFF',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '90%',
    '&:hover': {
        backgroundColor: isSuccess ? '#2980b9' : '#c0392b',
        color: '#fff',
    },
}))
