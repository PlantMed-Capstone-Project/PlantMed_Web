import { Stack, Typography, styled } from '@mui/material'

export const container = styled(Stack)({
    minHeight: '30rem',
    width: '90rem',
    marginTop: '8rem',
    padding: '1rem 8rem',
})

export const text = styled(Typography)({
    color: '#214400',
    fontWeight: '500',
    fontSize: '2.2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
