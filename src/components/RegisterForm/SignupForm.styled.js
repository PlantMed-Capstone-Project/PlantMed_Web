import {
    styled,
    Box,
    Typography,
    Button,
    FormControlLabel,
    Tab,
    Checkbox,
} from '@mui/material'
import { Link } from 'react-router-dom'

export const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export const typeUserTab = styled(Tab)(() => ({
    color: '#214400',
    fontWeight: '700',
    width: '8.5rem',
}))

export const Check = styled(Checkbox)(() => ({
    color: '#69AD28',
    '&.Mui-checked': {
        color: '#69AD28',
    },
}))

export const Form = styled(Box)(() => ({
    backgroundColor: '#F4FFEB',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    width: '25rem',
    height: '40.5rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
}))

export const policySection = styled(Box)(() => ({
    marginLeft: '3.5rem',
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'nowrap',
}))

export const signupTitle = styled(Typography)(() => ({
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#69AD28',
}))

export const policyPlace = styled(FormControlLabel)(() => ({
    marginLeft: '0.9rem',
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
    textAlign: 'center',
    marginTop: '-0.5rem',
    fontSize: '0.8rem',
    fontWeight: '200',
    color: '#D32F2F',
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

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '17.875rem',
    gap: '0.3rem',
}))
