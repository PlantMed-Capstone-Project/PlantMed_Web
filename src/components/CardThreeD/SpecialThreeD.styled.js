import { Box, styled } from '@mui/material'

export const ContainerIcon = styled(Box)(({ id, isHover }) => ({
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
    scale: isHover === id ? '1.2' : '1',
}))

export const iconStyle = {
    height: '4rem',
    width: '4rem',
    color: '#69AD28',
}

export const btnNext = styled(Box)(({ id, isHover }) => ({
    backgroundColor: '#e9edd9',
    borderRadius: '50%',
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    right: '8rem    ',
    bottom: '8rem',
    zIndex: '10',
    opacity: '0.8',
    transition: 'all 0.2s',
    '&:hover': {
        opacity: 1,
        scale: '1.2',
    },
}))

export const btnPrv = styled(Box)(({ id, isHover }) => ({
    backgroundColor: '#e9edd9',
    borderRadius: '50%',
    height: '4rem',
    width: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'absolute',
    left: '8rem',
    bottom: '8rem',
    zIndex: '10',
    opacity: '0.8',
    transition: 'all 0.2s',
    '&:hover': {
        opacity: 1,
        scale: '1.2',
    },
}))
