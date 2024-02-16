import { Box, Pagination, Typography, styled } from '@mui/material'

export const container = styled(Box)(() => ({
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '25rem',
}))

export const mainTitle = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '0.5rem',
    justifyContent: 'flex-start',
}))

export const title = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '2.5rem',
    fontWeight: '500',
}))

export const subTitle = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '1rem',
}))

export const listBlog = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'flex-start',
}))

export const pagination = styled(Pagination)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& .MuiPaginationItem-page': {
        color: 'black', // Màu chữ của từng trang
    },
    '& .MuiPaginationItem-page.Mui-selected': {
        color: '#69AD28',
        backgroundColor: '#F4FFEB',
        borderColor: '#69AD28',
    },
}))
