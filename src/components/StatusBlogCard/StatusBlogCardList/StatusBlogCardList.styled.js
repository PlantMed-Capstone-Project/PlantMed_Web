import { Stack, Typography, styled } from '@mui/material'

export const blogCardList = styled(Stack)(() => ({
    width: '100%',
    height: 'calc(100vh - 12rem)',
    justifyContent: 'flex-start',
    padding: '1rem 0 2rem 4rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '0',
    },
    scrollbarWidth: 'none',
}))

export const loadingText = styled(Typography)(() => ({
    color: '#214400',
    fontWeight: '500',
    fontSize: '1.5rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textTransform: 'inherit',
}))
