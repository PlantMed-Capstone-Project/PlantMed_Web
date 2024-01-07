import { Stack, Typography, styled } from '@mui/material'

export const Dot = styled(Typography)(() => ({
    marginRight: 8,
    display: 'flex',
    fontSize: '1.2em',
    color: '#214400',
    fontWeight: '300',
}))

export const TextList = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '1.3rem',
    fontWeight: '300',
    wordWrap: 'break-word',
}))

export const TxtListHead = styled(Typography)(() => ({
    color: '#69AD28',
    fontSize: '1.875rem',
    fontWeight: '600',
    width: '22.3rem',
    textAlign: 'center',
}))

export const container = styled(Stack)(({ screen }) => ({
    backgroundColor: screen ? 'none' : '#FFF',
    padding: screen ? '0' : '3.94rem 8.5rem 0 8.5rem',
    width: screen ? '50%' : '90rem',
    height: screen ? '100%' : '54rem',
}))
