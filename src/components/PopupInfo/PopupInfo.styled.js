import { Box, CardMedia, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '3',
    top: '50%',
    left: '50%',
    width: '34.75rem',
    height: '41.75rem',
    borderRadius: '0.625rem',
    backgroundColor: '#214400',
    padding: '2.31rem 3.25rem 0 3.25rem',
})

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
