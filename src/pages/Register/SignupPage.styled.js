import { Box, Typography, styled } from '@mui/material'
import backgroundImage from 'Images/cannabis.png'

export const container = styled(Box)(() => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

export const containerTxt = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '70%',
    alignItems: 'flex-start',
    paddingTop: '7.75rem',
    paddingLeft: '10rem',
}))

export const containsTitle = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    width: '40rem',
}))

export const Background = styled(Box)(() => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
}))

export const formContainer = styled(Box)(() => ({
    paddingLeft: '10rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#FFF',
    lineHeight: 'normal',
    width: '100%',
}))

export const subTitle = styled(Typography)(() => ({
    fontSize: '2rem',
    color: '#FFF',
    fontWeight: '400',
    fontStyle: 'italic',
    width: '100%',
}))
