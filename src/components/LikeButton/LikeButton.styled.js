import { Box, IconButton, Typography, keyframes, styled } from '@mui/material'

const likePopUp = keyframes`to {
    background-position: right;
}`

export const likeContainer = styled(Box)(() => ({
    display: 'flex',
    height: ' 21px',
    alignItems: 'center',
    gap: '0.8rem',
}))

export const likeButton = styled(IconButton)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

export const likeIcon = styled(Box)(({ image, liked }) => ({
    height: '60px',
    width: '100px',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'left',
    position: 'absolute',
    animation: liked ? `${likePopUp} 0.7s steps(28) forwards` : 'none',
}))

export const likeQuantity = styled(Typography)(() => ({
    fontSize: '1.25rem',
}))
