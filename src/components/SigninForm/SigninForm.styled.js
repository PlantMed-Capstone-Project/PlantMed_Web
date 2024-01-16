const {
    styled,
    TextField,
    Box,
    Typography,
    Button,
    Link,
} = require('@mui/material')

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
    position: 'absolute',
    top: '5rem',
    left: '10rem',
    backgroundColor: '#fff',
    width: '25rem',
    height: '37rem',
    borderRadius: '1rem',
}))

export const signinTitle = styled(Typography)(() => ({
    marginTop: '2rem',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const remerberPass = styled(Typography)(() => ({
    position: 'absolute',
    top: '14.5rem',
    left: '6rem',
    fontSize: '0.9rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#214400',
}))

export const button = styled(Button)(() => ({
    marginTop: '0.5rem',
    marginLeft: '8rem',
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '8rem',
}))

export const forgetPass = styled(Link)(() => ({
    position: 'relative',
    top: '0.6rem',
    left: '9rem',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#214400',
}))

export const link = styled(Link)(() => ({
    position: 'absolute',
    marginTop: '4rem',
    marginLeft: '-7.5rem',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#214400',
}))
