import { Box, styled } from '@mui/material'

export const popupContainer = styled(Box)(({ isopen }) => ({
    position: 'fixed',
    zIndex: isopen ? '2' : '0',
    height: '100vh',
    width: '100%',
    backgroundColor: isopen ? 'rgba(0, 0, 0, 0.46)' : 'none',
    top: '0',
    left: '0',
    display: isopen ? 'block' : 'none',
}))

export const container = styled(Box)(() => ({
    width: '90rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: '1',
}))

export const activePopup = styled(Box)(({ isopen }) => ({
    display: isopen ? 'block' : 'none',
    position: 'fixed',
    zIndex: isopen ? '10' : '-1',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '34.75rem',
    height: '41.75rem',
    borderRadius: '0.625rem',
}))
