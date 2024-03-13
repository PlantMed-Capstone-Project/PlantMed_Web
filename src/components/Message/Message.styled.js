import { Box, Typography, styled } from '@mui/material'

export const messageRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.625rem',
})

export const messageRowRight = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '0.625rem',
})

export const messageBlue = styled(Box)({
    color: 'white',
    position: 'relative',
    marginLeft: '0.625rem',
    padding: '0.625rem',
    backgroundColor: '#747474',
    textAlign: 'left',
    font: "400 .9em 'Open Sans', sans-serif",
    border: '0.063rem solid #747474',
    borderRadius: '0.625rem 0.625rem 0.625rem 0',
})

export const messageOrange = styled(Box)({
    color: 'white',
    position: 'relative',
    marginRight: '1.25rem',
    padding: '0.625rem',
    backgroundColor: '#69AD28',
    maxWidth: '60%',
    textAlign: 'left',
    font: "400 .9em 'Open Sans', sans-serif",
    border: '0.063rem solid #69AD28',
    borderRadius: '0.625rem 0.625rem 0 0.625rem',
})

export const messageContent = styled(Typography)({
    padding: 0,
    margin: 0,
    wordWrap: 'break-word',
})
