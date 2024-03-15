import { Box, styled } from '@mui/material'

export const ContainerIcon = styled(Box)(({ id, ishover }) => ({
    position: 'absolute',
    right: id === 1 ? 'none' : '5rem',
    left: id === 2 ? 'none' : '5rem',
    top: '10rem',
    height: '3.5rem',
    width: '3.5rem',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s',
    scale: ishover === id ? '1.2' : '1',
}))