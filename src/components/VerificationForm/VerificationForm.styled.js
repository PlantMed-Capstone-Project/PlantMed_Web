import { styled, Box, Typography, Button, Link } from '@mui/material'
import OtpInput from 'otp-input-react'

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
    gap: '1.8rem',
}))

export const container = styled(Box)(() => ({
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const textContainer = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
}))

export const verificationTitle = styled(Typography)(() => ({
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const questionText = styled(Typography)(() => ({
    fontSize: '0.9rem',
    fontWeight: '200',
    color: '#214400',
}))

export const Note = styled(Typography)(() => ({
    width: '20rem',
    fontSize: '0.9rem',
    fontWeight: '200',
    textAlign: 'center',
    color: '#214400',
}))

export const otpCheck = styled(Typography)(() => ({
    textAlign: 'center',
    marginTop: '-1rem',
    fontSize: '0.8rem',
    fontWeight: '200',
    color: '#D32F2F',
}))

export const otpField = styled(OtpInput)(() => ({
    borderRadius: '0.625rem',
    backgroundColor: '#FFF',
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
