import { Box, Typography, styled, TextField, Button } from '@mui/material'

export const Input = styled(TextField)(() => ({
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

export const passwordPlace = styled(Box)(() => ({
    width: '50%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
}))

export const inputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}))

export const inputHeader = styled(Typography)(() => ({
    textAlign: 'left',
    fontSize: '0.8rem',
    fontWeight: '300',
    color: '#214400',
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'justify',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: '500',
    color: '#69AD28',
    marginTop: '1rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '25.875rem',
    gap: '1rem',
    marginTop: '2rem',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '9rem',
    marginTop: '1.5rem',
}))
