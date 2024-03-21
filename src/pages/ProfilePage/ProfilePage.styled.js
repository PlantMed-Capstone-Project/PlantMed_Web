import { Box, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
    height: 'calc(100vh - 8rem)',
}))
