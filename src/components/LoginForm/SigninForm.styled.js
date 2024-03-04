import { Box, Button, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

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
    backgroundColor: '#F4FFEB',
    width: '25.125rem',
    height: '33rem',
    borderRadius: '0.625rem',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.63rem',
}))

export const passSection = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}))

export const signinTitle = styled(Typography)(() => ({
    marginTop: '2rem',
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const remerberPass = styled(Typography)(() => ({
    fontSize: '0.9rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#214400',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '8rem',
}))

export const forgetPass = styled(Link)(() => ({
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#214400',
    textAlign: 'center',
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
    gap: '1.13rem',
    width: '100%',
    alignItems: 'center',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '17.875rem',
    gap: '1.12rem',
}))

export const navPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.69rem',
}))
