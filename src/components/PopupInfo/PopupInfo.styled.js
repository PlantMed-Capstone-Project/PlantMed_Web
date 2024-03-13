import {
    Box,
    Button,
    CardMedia,
    Divider,
    Typography,
    styled,
} from '@mui/material'
import { Link } from 'react-router-dom'

export const container = styled(Box)(({ approvalpage }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '3',
    top: '50%',
    left: '50%',
    width: approvalpage ? '55rem' : '34.75rem',
    height: approvalpage ? '43.5rem' : '41.75rem',
    borderRadius: '0.625rem',
    backgroundColor: approvalpage ? '#e7ffd4' : '#214400',
    padding: approvalpage ? '1rem 1rem 0 1rem' : '2.31rem 3.25rem 0 3.25rem',
}))

export const boxImage = styled(Box)({
    border: '2px solid #FFF',
    height: '15rem',
    width: '100%',
    borderRadius: '0.625rem',
    overflow: 'hidden',
    marginBottom: '1rem',
})

export const image = styled(CardMedia)(({ ishover }) => ({
    height: '100%',
    borderRadius: '0.625rem',
    scale: ishover ? '1.2' : '1',
    transition: 'all 0.2s ease-out',
}))

export const linkBtn = styled(Link)({
    color: '#FFF',
    fontSize: '1rem',
    fontWeight: '300',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '1.5rem',
    fontStyle: 'italic',
})

export const containerBlog = styled(Box)({
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
})

export const boxTitle = styled(Box)({
    gap: '0.5rem',
    width: '100%',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
})

export const title = styled(Typography)({
    color: '#214400',
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: 'normal',
})

export const diver = styled(Divider)(({ isbottom }) => ({
    width: '70%',
    backgroundColor: '#214400',
    margin: !isbottom ? ' 0.5rem 0' : ' 1rem 0',
}))

export const boxContent = styled(Box)({
    width: '100%',
    height: '90%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
        width: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#69ad28',
        borderRadius: '0.375rem',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#adef6f',
        borderRadius: '0.375rem',
    },
})

export const blogContent = styled(Typography)({
    width: '100%',
    wordBreak: 'break-all',
    padding: '0 0.7rem',
    fontSize: ' 1rem ',
    fontWeight: 'normal',
    color: '#214400',
    textIndent: '1rem',
})

export const boxBtn = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '1rem',
})

export const btn = styled(Button)({
    color: '#FFF',
    backgroundColor: '#69AD28',
    width: '8rem',
    '&:hover': {
        backgroundColor: '#F4FFEB',
        color: '#69AD28',
    },
})
