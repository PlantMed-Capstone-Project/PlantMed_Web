import { Box, Button, Input, Typography, styled } from '@mui/material'

export const VisuallyHiddenInput = styled(Input)({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

export const Wrapper = styled(Box)({
    width: '90rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F4FFEB',
})

export const Container = styled(Box)({
    padding: '3.125rem 8.62rem',
    position: 'relative',
})

export const Submit = styled(Button)({
    backgroundColor: '#69AD28',
    padding: '0.375rem 1.875rem !important',
    fontSize: '1rem',
    ':hover': { bgcolor: 'success.main' },
    textTransform: 'none',
})

export const TypoHeader = styled(Typography)({
    color: '#214400',
    fontSize: '2.188rem',
    fontWeight: 500,
    marginBottom: '3.125rem',
})

export const FormWrapper = styled(Box)({
    backgroundColor: '#fff',
    padding: '3.125rem',
    boxShadow: 3,
    borderRadius: 2,
})
