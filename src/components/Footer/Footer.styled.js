import { Box, Stack, Typography, styled } from '@mui/material'

export const Text = styled(Typography)(() => ({
  fontFamily: 'Roboto Serif',
  fontSize: '0.9375rem',
  fontWeight: '400',
  color: 'white',
}))

export const ContainerIcon = styled(Box)(() => ({
  height: '2rem',
  width: '2rem',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#214400',
}))

export const ContainerAll = styled(Stack)(({ topspacing }) => ({
  paddingTop: '3rem',
  backgroundColor: '#214400',
  height: '18.75rem',
  width: '100%',
  marginTop: `${topspacing}rem`,
}))
