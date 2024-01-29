import { styled, TextField, Box, Typography, Button, Link, FormControlLabel, Tab } from '@mui/material'

export const Input = styled(TextField)(() => ({
    width: '280',
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

export const Note = styled(Typography)(() => ({
    position: 'absolute',
    top: '16rem',
    left: '51rem',
    fontSize: '1.5rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#FFF',
}))

export const typeUserTab = styled(Tab)(() => ({
    color: '#214400',
    fontWeight: '700',
    width: '8.5rem',
}))

export const Form = styled(Box)(() => ({
    backgroundColor: '#F4FFEB',
    width: '25rem',
    height: '42.5rem',
    borderRadius: '1rem',
}))

export const policySection = styled(Box)(() => ({
    marginLeft: '3.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'nowrap',
}))

export const container = styled(Box)(() => ({
    height: '100%',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const signupTitle = styled(Typography)(() => ({
    marginTop: '1.5rem',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const policyPlace = styled(FormControlLabel)(() => ({
    marginTop: '0.4rem',
    marginLeft: '3rem',
    textAlign: 'left',
    width: '19rem',    
}))

export const policy = styled(Typography)(() => ({
    fontSize: '0.8rem',
    fontStyle: 'italic',
    fontWeight: '200',
    color: '#214400',
})) 

export const policyCheck = styled(Typography)(() => ({
    marginLeft: '3.5rem',
    fontSize: '0.8rem',
    fontWeight: '200',
    color: '#D32F2F',
})) 

export const button = styled(Button)(() => ({
    marginTop: '0.5rem',
    marginLeft: '8rem',
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '8rem',
}))

export const link = styled(Link)(() => ({
    position: 'relative',
    top: '3rem',
    left: '-6rem',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#214400',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '17.875rem',
    marginTop: '1rem',
    marginLeft: '3.5rem',
}))
