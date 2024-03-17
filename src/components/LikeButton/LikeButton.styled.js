import { Box, IconButton, Typography, keyframes, styled } from '@mui/material'

const likePopUp = keyframes`to {
    background-position: right;
}`

export const likeContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem 0rem',
}))

export const likeButton = styled(IconButton)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

export const likeBg = styled(Box)(() => ({
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 100ms ease',
}))

export const likeIcon = styled(Box)(({ image, liked }) => ({
    height: '100px',
    width: '100px',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'left',
    position: 'absolute',
    animation: liked ? `${likePopUp} 0.7s steps(28) forwards` : 'none',
}))

export const likeQuantity = styled(Typography)(() => ({
    fontSize: '1.25rem',
    margin: '2rem -0.5rem',
}))
