import { Box, Tab, Tabs, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    height: 'calc(100vh - 30rem)',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
}))

export const blogContainer = styled(Box)(() => ({
    width: '82%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: '1rem',
    gap: '2rem',
}))

export const likedBlogContainer = styled(Box)(() => ({
    width: '82%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '4rem',
    marginTop: '4rem',
}))

export const tabContainer = styled(Tabs)(() => ({
    '& .MuiTabs-indicator': {
        backgroundColor: '#214400',
        height: '0.2rem',
    },
    '& .Mui-selected': {
        fontSize: '1.75rem',
    },
}))

export const statusTab = styled(Tab)(() => ({
    color: '#214400',
    fontWeight: '700',
    fontSize: '1.5rem',
    width: '14.5rem',
    height: '2rem',
    textTransform: 'capitalize',
}))

export const blogCardList = styled(Box)(() => ({
    width: '100%',
    height: 'calc(100vh - 12rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 0 2rem 4rem',
    gap: '5rem',
    paddingTop: '1rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '0',
    },
    scrollbarWidth: 'none',
}))

export const loadingText = styled(Typography)(() => ({
    color: '#214400',
    fontWeight: '600',
    fontSize: '1.5rem',
    textTransform: 'inherit',
    textAlign: 'center',
}))
