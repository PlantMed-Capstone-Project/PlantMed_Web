import { Box, Link, Pagination, Stack, Typography, styled } from '@mui/material'

export const container = styled(Stack)(() => ({
    marginTop: '3.56rem',
    rowGap: '4.31rem',
    marginBottom: '4.13rem',
    flexWrap: 'wrap',
    width: '72.685rem',
    height: '40.31rem',
}))

export const card = styled(Box)(() => ({
    width: '23.1875rem  ',
    height: '14.875rem',
    backgroundColor: '#F4FFEB',
    borderRadius: '0.625rem',
    textAlign: 'center',
    position: 'relative',
    padding: '0 0.87rem',
}))

export const boxImage = styled(Box)(() => ({
    position: 'absolute',
    bottom: '-1.12rem',
    width: '21.43rem',
    height: '12.9375rem',
    borderRadius: '0.625rem',
    boxShadow:
        '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
    cursor: 'pointer',
}))

export const title = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '1.25rem',
    fontWeight: '500',
    marginTop: '0.75rem',
}))

export const subTitle = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '1.25rem',
    fontWeight: '500',
}))

export const subDes = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '0.7rem',
    fontWeight: '300',
    textAlign: 'center',
}))

export const btnMore = styled(Link)(() => ({
    color: '#FFF',
    fontSize: '1.25rem',
    fontWeight: '300',
    textAlign: 'center',
    cursor: 'pointer',
}))

export const BoxBlackHover = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '1.94rem',
}))

export const pagination = styled(Pagination)({
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
})
