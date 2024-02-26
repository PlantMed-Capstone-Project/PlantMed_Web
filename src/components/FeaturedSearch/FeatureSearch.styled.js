import { Box, styled } from '@mui/material'

export const BoxAllGrid = styled(Box)(({ product }) => ({
    position: 'relative',
    height: product <= 2 ? '22.5rem' : '14.875rem',
    backgroundColor: '#F4FFEB',
    borderRadius: '0.625rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const NameOfProduct = styled(Box)(({ product, hoverIndex, idx }) => ({
    color: '#214400',
    fontSize: product <= 2 ? '1.5625rem' : '1.25rem',
    fontWeight: '500',
    fontFamily: ' Roboto Serif',
    transition: 'all 0.1s',
    opacity: hoverIndex === idx ? '0' : '1',
}))

export const BoxImage = styled(Box)(({ product }) => ({
    width: product <= 2 ? '32.875rem' : '21.4375rem',
    height: product <= 2 ? '19.5625rem' : '12.9375rem',
    boxShadow:
        '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    borderRadius: '10px',
    position: 'absolute',
    bottom: product <= 2 ? '-1.38rem' : '-1.12rem',
    overflow: 'hidden',
}))

export const BoxBlackHover = styled(Box)(({ product }) => ({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: product <= 2 ? '3.12rem' : '1.94rem',
}))

export const containerSkeleton = styled(Box)(({ product }) => ({
    height: product <= 2 ? '22.5rem' : '14.875rem',
    borderRadius: '0.625rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
}))

export const nameSkeleton = styled(Box)({
    width: '100%',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
})
