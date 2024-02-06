import { Box, Button, Typography, styled } from '@mui/material'

export const container = styled(Box)({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'relative',
    alignItems: 'center',
})

export const containerImg = styled(Box)({
    width: '77.125rem',
    height: '33.5625rem',
    userSelect: 'none',
})

export const text = styled(Typography)({
    fontFamily: '"Protest Riot", sans-serif',
    color: '#214400',
    fontSize: '3.125rem',
    textShadow: '0px 8px 3px rgba(33, 68, 0, 0.30)',
    fontWeight: '400',
    fontStyle: 'normal',
})

export const btn = styled(Button)({
    backgroundColor: '#616403',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    top: '20%',
    '&:hover': {
        backgroundColor: '#69AD28',
        color: '#fff',
    },
})
