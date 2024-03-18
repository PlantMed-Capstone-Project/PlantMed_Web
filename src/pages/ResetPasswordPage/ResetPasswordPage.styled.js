import { Box, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    height: 'calc(100vh - 30rem)',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
}))
