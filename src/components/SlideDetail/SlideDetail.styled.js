import { Box, Stack, Typography, styled } from '@mui/material'

export const BoxStackTop = styled(Box)(() => ({
    borderRadius: '0.625rem',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.30)',
    height: '36.375rem',
    width: '40rem !important',
}))

export const BoxStackBot = styled(Stack)(() => ({
    height: '10.25rem',
    width: '40rem !important',
    display: 'flex',
    justifyContent: 'flex-start',
}))

export const TextHero = styled(Typography)(() => ({
    fontSize: '3.125rem',
    textShadow: '0px 4px 5px #214400',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 'normal',
    position: 'absolute',
    top: ' 50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '40.75rem',
}))
