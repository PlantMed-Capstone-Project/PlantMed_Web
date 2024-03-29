import { Box, Button, Stack, Typography, styled } from '@mui/material'

export const text = styled(Typography)({
    color: '#214400',
    fontSize: '2.1875rem',
    fontWeight: '500',
})

export const container = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '6.81rem',
    gap: '2.38rem',
})

export const mapContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
})

export const viewLocation = styled(Button)({
    backgroundColor: '#69AD28',
    color: '#FFF',
    zIndex: '1000',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
    },
})

export const closeMapBtn = styled(Button)(({ isopen }) => ({
    position: 'absolute',
    backgroundColor: isopen ? '#eb0014' : '#69AD28',
    color: '#FFF',
    zIndex: '1500',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
    },
    top: '1.5rem',
    right: '1.5rem',
}))

export const stackButton = styled(Stack)({
    position: 'absolute',
    top: '1.5rem',
    left: '1.5rem',
})

export const boxTime = styled(Box)({
    backgroundColor: '#69AD28',
    color: '#FFF',
    minHeight: '2.5rem',
    minWidth: '7rem',
    borderRadius: '0.625rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '0.4rem',
    alignItems: 'center',
    padding: '0.2rem 0.8rem 0.2rem 1rem',
})

export const boxDistance = styled(Box)({
    backgroundColor: '#69AD28',
    color: '#FFF',
    minHeight: '2.5rem',
    minWidth: '10rem',
    borderRadius: '0.625rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.3rem',
})

export const textTime = styled(Typography)({
    fontSize: '0.9rem',
    fontWeight: '500',
})

export const containerTimeTogo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '1.5rem',
    position: 'absolute ',
    right: '1.5rem',
    top: '1.5rem',
    zIndex: '1000',
})
