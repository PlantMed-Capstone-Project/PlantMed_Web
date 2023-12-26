import { Box, Typography, styled } from '@mui/material'

export const BoxContainer = styled(Box)(() => ({
  position: 'absolute',
  left: '50%',
  bottom: '3.44rem',
  transform: 'translateX(-50%)',
  zIndex: '1',
  width: '72.6875rem',
  height: '23.8125rem',
  borderRadius: '0.625rem',
  backgroundColor: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.44rem',
  alignItems: 'center',
  padding: '1.75rem 0 2.31rem 0',
}))

export const TitleBox = styled(Typography)(() => ({
  fontStyle: 'italic',
  color: '#69AD28',
  fontWeight: '200',
  fontSize: '1.25rem',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '1px',
    width: '4rem',
    backgroundColor: '#69AD28', // Màu sắc của đường gạch ngang
  },
  '&::before': {
    right: '12.5rem', // Khoảng cách giữa chữ và đường gạch ngang bên trái
  },
  '&::after': {
    left: '12.5rem', // Khoảng cách giữa chữ và đường gạch ngang bên phải
  },
}))

export const BoxDescription = styled(Box)(() => ({
    textAlign: "justify",
    width: "100%",
    fontSize: "1.375rem",
    fontWeight: "300",
    lineHeight: "normal",
    color: "#214400"
  }))
