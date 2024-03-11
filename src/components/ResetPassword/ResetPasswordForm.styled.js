import { Box, Typography, styled, Button } from '@mui/material'

export const passwordPlace = styled(Box)(() => ({
    width: '66%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
    marginTop: '1rem',
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
    textTransform: 'capitalize',
    fontSize: '2rem',
    fontWeight: '500',
    color: '#214400',
    marginTop: '1rem',
}))

export const Note = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: '300',
    color: '#214400',
    marginTop: '1rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '25.875rem',
    marginTop: '1rem',
    gap: '0.5rem',
}))

export const buttonPasswordContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    paddingTop: '3rem',
    paddingLeft: '42rem',
}))

export const button = styled(Button)(({ width }) => ({
    backgroundColor: '#69AD28',
    color: '#FFF',
    borderRadius: '0.313rem',
    width: width,
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#004225',
        color: '#fff',
    },
}))
