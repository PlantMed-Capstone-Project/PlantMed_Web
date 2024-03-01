import { Box, Typography, styled } from '@mui/material'
import backgroundImage from 'Images/cannabis.png'

export const Background = styled(Box)({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
})

export const container = styled(Box)({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
})

export const formContainer = styled(Box)({
    paddingLeft: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const contentPlace = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

export const arrangeContainer = styled(Box)({
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: '7.5rem',
    paddingLeft: '10.5rem',
})

export const Title = styled(Typography)({
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 'normal',
    width: '100%',
})

export const Note = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#FFF',
})
