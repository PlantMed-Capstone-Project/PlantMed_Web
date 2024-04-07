import { styled, TextField } from '@mui/material'

export const Input = styled(TextField)(() => ({
    backgroundColor: '#FFF',
    position: 'relative',
    marginTop: '0',
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
        '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: '#000',
        },
    },
}))
