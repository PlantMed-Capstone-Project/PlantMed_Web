import { Box, Button, TextField, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const Input = styled(TextField)(() => ({
    width: '280', // Độ rộng thanh tìm kiếm
    borderRadius: '0.625rem', // Bo tròn viền
    backgroundColor: '#FFF',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '0.625rem',
            borderWidth: '2px',
            borderColor: '#69AD28', // Màu viền
        },
        '&:hover fieldset': {
            borderColor: '#69AD28', // Màu viền khi hover
        },
        '&.Mui-focused fieldset': {
            borderColor: '#69AD28',
        },
    },
}))

export const Form = styled(Box)(() => ({
    backgroundColor: '#F4FFEB',
    width: '25.125rem',
    height: '23rem',
    borderRadius: '0.625rem',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.63rem',
}))

export const forgotPassTitle = styled(Typography)(() => ({
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const Note = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: '200',
    color: '#69AD28',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '8rem',
}))

export const link = styled(Link)(() => ({
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#214400',
}))

export const containerInput = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
}))

export const notifyPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    alignItems: 'center',
    gap: '1rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '17.875rem',
}))

export const navPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.69rem',
}))
