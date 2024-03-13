import { Box, styled } from '@mui/material'
import backgroundImage from 'Images/cannabis.png'

export const Background = styled(Box)(() => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
}))

export const container = styled(Box)(() => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const formContainer = styled(Box)(() => ({
    paddingLeft: '10rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
