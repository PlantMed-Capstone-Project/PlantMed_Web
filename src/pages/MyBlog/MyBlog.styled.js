import { Box, Stack, Tab, Tabs, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
    height: '100%',
}))

export const blogContainer = styled(Box)(() => ({
    width: '82%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
        fontSize: '1.1rem',
    },
}))

export const statusTab = styled(Tab)(() => ({
    color: '#214400',
    fontWeight: '700',
    fontSize: '1rem',
    width: '12.5rem',
    height: '2rem',
    textTransform: 'capitalize',
}))
