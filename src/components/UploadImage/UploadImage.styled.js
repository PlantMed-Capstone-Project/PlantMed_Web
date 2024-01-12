import { Box, Stack, styled } from '@mui/material'

export const background = styled(Stack)({
    width: '100%',
    height: '50rem',
    backgroundColor: '#F4FFEB',
})

export const container = styled(Stack)({
    width: '60.75rem',
    height: '40.5rem',
    borderRadius: '0.625rem',
    backgroundColor: '#FFF',
    boxShadow: '0px 4px 5px 0px rgba(31, 23, 12, 0.50)',
})

export const uploadPlace = styled(Box)({
    width: '50rem',
    height: '35rem',
    borderRadius: '0.625rem',
    border: '2px dashed #69AD28',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
