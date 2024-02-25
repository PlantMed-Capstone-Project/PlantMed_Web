import { Box, Typography, styled } from '@mui/material'

export const BoxImg = styled(Box)(() => ({
    borderRadius: '0.625rem',
    position: 'relative',
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
