import { Box, styled } from '@mui/material'

export const CustomBoxPopup = styled(Box)(({ theme }) => ({
  width: '12.6875rem',
  height: '13.125rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
  borderRadius: '0.625rem',
  position: 'absolute',
  top: '5.31rem',
  right: '8.62rem',
  paddingTop: '1.25rem',
  zIndex: '10',
  // additional styles can be added here
}))

export const BoxContainAvt = styled(Box)(({ theme }) => ({
  width: '8.125rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: 'solid #69AD28 2px',
  pb: '0.63rem',
}))
