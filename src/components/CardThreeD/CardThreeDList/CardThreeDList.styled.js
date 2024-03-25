import { Card, styled } from '@mui/material'

export const CustomBoxPopup = styled(Card)(({ hover }) => ({
    width: '24.875rem',
    height: '17.8rem',
    borderRadius: '0.625rem',
    boxShadow: '0px 4px 5px 2px rgba(33, 68, 0, 0.30)',
    transition: 'all 0.2s ease',
    margin: '2rem 1rem',
    cursor: 'pointer',
    userSelect: 'none',
    scale: hover ? '1.05' : '1',
    // additional styles can be added here
}))
