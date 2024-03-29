import { Avatar, Box, CardMedia, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    height: '16rem',
    backgroundColor: '#F4FFEB',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    gap: '1rem',
    position: 'relative',
    zIndex: '1',
}))

export const ctnHead = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

export const boxAvatar = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
}))

export const avatarImage = styled(Avatar)(() => ({
    backgroundColor: '#69AD28',
    height: '2rem',
    width: '2rem',
}))

export const nameUser = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '0.7rem',
    lineHeight: 'normal',
    fontWeight: '800',
}))

export const ctnBody = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    height: '8.5rem',
    gap: '1rem',
    '&:hover': { cursor: 'pointer' },
}))

export const containtText = styled(Box)(() => ({
    flex: '2.6',
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',
}))

export const title = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '1.2rem',
    lineHeight: 'normal',
    fontWeight: '800',
}))

export const description = styled(Typography)(() => ({
    width: '100%',
    color: '#505050',
    fontSize: '0.9rem',
    fontWeight: '500',
    lineHeight: '1.6',
    textAlign: 'justify',
}))

export const boxImage = styled(Box)(() => ({
    flex: '1',
    borderRadius: '1rem',
    overflow: 'hidden',
}))

export const mainImage = styled(CardMedia)(({ ishover }) => ({
    height: '100%',
    borderRadius: '1rem',
    scale: ishover && '1.1',
    transition: 'all 0.2s ease-in-out',
}))

export const ctnBottom = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    gap: '2rem',
}))

export const likeContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'flex-start',
}))

export const quantityLike = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '0.8rem',
}))

export const tagContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '0.3rem',
}))

export const tag = styled(Box)(() => ({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    boxShadow: 3,
    height: '1.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    cursor: 'pointer',
}))

export const tagContent = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '0.9rem',
    fontWeight: '300',
    lineHeight: 'normal',
}))

export const ctnATag = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
}))

export const caontainerRp = styled(Box)(() => ({
    position: 'absolute',
    backgroundColor: '#214400',
    minWidth: '10rem',
    borderRadius: '0.6rem',
    top: '2.5rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: '2',
}))

export const report = styled(Box)(({ ishover, idx }) => ({
    display: 'flex',
    gap: '0.3rem',
    alignItems: 'center',
    width: '100%',
    padding: '1rem 1.2rem',
    cursor: 'pointer',
    backgroundColor: ishover === idx && 'rgba(105, 173, 40, 0.3)',
    transition: 'all 0.2s',
    borderTopLeftRadius: idx === 0 && '0.6rem',
    borderTopRightRadius: idx === 0 && '0.6rem',
    borderBottomLeftRadius: idx === 2 && '0.6rem',
    borderBottomRightRadius: idx === 2 && '0.6rem',
}))

export const reportTxt = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '0.9rem',
    fontWeight: '500',
    lineHeight: 'normal',
    userSelect: 'none',
}))

export const txtNotFound = styled(Typography)(() => ({
    color: '#214400',
    fontWeight: '500',
    fontSize: '2.2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const commentBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    height: '21px',
}))
