import { Box, CardMedia, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: '9rem',
    height: 'auto',
}))

export const BoxTagSearch = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.5rem',
    width: '100%',
    paddingLeft: '0.5rem',
}))

export const tagSearch = styled(Box)(({ text, ishover, prvtext }) => ({
    backgroundColor: prvtext === text ? '#214400' : '#69AD28',
    minHeight: '2.3rem',
    minWidth: '5rem',
    borderRadius: '1.5rem',
    cursor: 'pointer',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    scale: ishover === text && '1.05',
}))

export const ctnTagTitle = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    width: '100%',
    minHeight: '9rem',
    padding: '1rem 0',
}))

export const text = styled(Typography)(() => ({
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: '500',
    lineHeight: 'normal',
    transition: 'all 0.2s',
}))

export const title = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: 'normal',
}))

export const imagePresent = styled(Box)(() => ({
    width: '100%',
    height: '15rem',
    borderRadius: '0.6rem',
}))

export const cotainerFixed = styled(Box)(({ isfixed, isabs }) => ({
    position:
        isfixed && !isabs ? 'fixed' : !isfixed && isabs ? 'absolute' : 'none',
    top: isfixed && !isabs ? '8rem' : 'none',
    bottom: !isfixed && isabs ? '3.4rem' : 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '22rem',
}))

export const imgTitle = styled(CardMedia)(() => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '3rem 0 0 1rem',
    cursor: 'pointer',
}))

export const presenTitle = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '1.5625rem',
    fontWeight: '600',
    lineHeight: 'normal',
}))

export const presenSuntitle = styled(Typography)(() => ({
    color: '#FFF',
    width: '90%',
    textAlign: 'justify',
    lineHeight: '1.2',
    fontSize: '0.9rem',
}))
