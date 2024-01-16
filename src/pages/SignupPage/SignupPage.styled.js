import { Box, Typography, styled } from '@mui/material'
import backgroundImage from 'Images/cannabis.png'

export const Background = styled(Box)(() => ({
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    filter: `blur(5px)`,
    zIndex: -1,
}))

export const Title = styled(Typography)(() => ({
    position: 'absolute',
    top: '10rem',
    left: '53rem',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '900',
    color: '#FFF',
}))