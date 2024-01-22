import { Box, Stack, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '90rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const subContainer = styled(Stack)(() => ({
    backgroundColor: '#F4FFEB',
    marginTop: '6.38rem',
    width: '100%',
    height: '106.94rem',
}))

export const alotComponent = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    gap: '2.5rem',
    marginTop: '6rem',
}))

export const slideShowTitle = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '2.1875rem',
    fontWeight: '500',
    fontStyle: 'normal',
}))
