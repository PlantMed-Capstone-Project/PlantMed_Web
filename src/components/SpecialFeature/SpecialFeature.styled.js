import { Box, Button, Stack, Typography, styled } from '@mui/material'

export const BoxContainer = styled(Stack)(() => ({
    position: 'relative',
    width: '72.75rem',
    height: '50rem',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
    marginTop: '3.38rem',
}))

export const Boxtitle = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '2.1875rem',
    fontWeight: '500',
}))

export const BoxDes = styled(Typography)(() => ({
    width: '39.45rem',
    color: '#69AD28',
    fontSize: '3.4375rem',
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'right',
    marginTop: '3rem',
}))

export const ButtonCustom = styled(Button)(() => ({
    color: 'white',
    backgroundColor: '#69AD28',
    width: '13.6875rem',
    height: '3.375rem',
    borderRadius: '0.3125rem',
    marginTop: '9rem',
    '&:hover': {
        backgroundColor: '#5e8c22', // Màu sắc hover khác
    },
}))

export const BoxImage = styled(Box)(() => ({
    position: 'absolute',
    top: '3rem',
    left: '5rem',
    height: '46rem',
    width: '42rem',
}))
