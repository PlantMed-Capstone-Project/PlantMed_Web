import { ButtonBase, Card, Typography, styled } from '@mui/material'

export const Button = styled(ButtonBase)(() => ({
    width: '7.25rem',
    height: '2.1875rem',
    fontSize: '1rem',
    color: '#FFF',
    fontWeight: '700',
    backgroundColor: '#69AD28',
    borderRadius: '0.1875rem',
}))

export const text = styled(Typography)(() => ({
    color: '#214400',
    fontSize: '2.1875rem',
    fontWeight: '500',
}))

export const cardBox = styled(Card)(() => ({
    width: '17.75rem',
    height: '14.3125rem',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
    cursor: 'pointer',
}))
