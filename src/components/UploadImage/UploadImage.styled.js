import { Box, Button, Stack, Typography, styled } from '@mui/material'

export const background = styled(Stack)({
    width: '100%',
    height: '55rem',
    backgroundColor: '#F4FFEB',
})

export const container = styled(Stack)(({ isloaded }) => ({
    width: '65.75rem',
    height: isloaded ? '45.5rem' : '41.5rem',
    borderRadius: '0.625rem',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 5px 0px rgba(31, 23, 12, 0.50)',
    transition: 'all 0.2s',
    paddingTop: '3rem',
    gap: '2rem',
}))

export const uploadPlace = styled(Box)({
    width: '58rem',
    height: '35rem',
    borderRadius: '0.625rem',
    border: '2px dashed #69AD28',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const imageLoadBox = styled(Box)({
    width: '58rem',
    height: '35rem',
    borderRadius: '0.625rem',
    overflow: 'hidden',
    border: '2px dashed #69AD28',
})

export const containerIcon = styled(Box)({
    width: '17rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
})

export const txtUnderIcon = styled(Typography)({
    color: '#69AD28',
    fontSize: '1.56rem',
    fontWeight: '400',
})

export const btnSend = styled(Button)({
    backgroundColor: '#69AD28',
    '&:hover': { backgroundColor: '#8ad345' },
})