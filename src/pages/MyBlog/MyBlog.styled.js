import { Box, Tab, Tabs, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    width: '100%',
    height: 'calc(100vh - 5.94rem)',
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
    paddingTop: '3rem',
    gap: '4rem',
}))

export const tabContainer = styled(Tabs)(() => ({
    '& .MuiTabs-indicator': {
        backgroundColor: '#214400',
        height: '0.2rem',
    },
    '& .Mui-selected': {
        color: '#214400 !important',
        fontSize: '2rem',
    },
}))

export const statusTab = styled(Tab)(() => ({
    color: '#214400',
    fontWeight: '700',
    fontSize: '1.75rem',
    width: '16.5rem',
    height: '1rem',
    textTransform: 'capitalize',
}))

export const blogCardList = styled(Box)(() => ({
    width: '100%',
    height: 'calc(100vh - 5.94rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '4rem',
    gap: '6rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '0',
    },
    scrollbarWidth: 'none',
}))
