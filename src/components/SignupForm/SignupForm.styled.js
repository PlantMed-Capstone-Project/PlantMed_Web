import { styled, TextField, Box, Typography, Button, Link } from '@mui/material'

export const Input = styled(TextField)(() => ({
    marginLeft: '4rem',
    marginTop: '1rem',
    outline: '0.1rem solid #69AD28',
    borderRadius: '0.5rem',
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

export const Form = styled(Box)(() => ({
    backgroundColor: '#fff',
    width: '25rem',
    height: '37rem',
    borderRadius: '1rem',
}))

export const policySection = styled(Box)(() => ({
    marginLeft: '3.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'nowrap',
}))

export const signupTitle = styled(Typography)(() => ({
    marginTop: '2rem',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const policy = styled(Typography)(() => ({
    marginTop: '0.4rem',
    lineHeight: '1rem',
    textAlign: 'left',
    width: '16rem',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    fontWeight: '200',
    color: '#214400',
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
