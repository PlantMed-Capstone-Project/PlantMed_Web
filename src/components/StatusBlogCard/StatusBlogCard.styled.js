import { Box, Card, CardContent, Typography, styled } from '@mui/material'

export const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export const blogCard = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '62rem',
    height: '13.875rem',
    gap: '3rem',
    '&:hover': {
        '& > *:nth-child(1) > *:nth-child(1)': {
            transform: 'translate(-2rem, -2rem)',
            opacity: 1,
        },
    },
}))

export const blogCardBox = styled(Card)(() => ({
    display: 'flex',
    height: '100%',
    width: '41.063rem',
    background: '##F4FFEB',
    boxShadow: '0px 4px 4px 0px #00000040',
}))

export const blogCardContent = styled(CardContent)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    textAlign: 'justify',
    padding: '1.5rem 1rem',
    gap: '0.2rem',
}))

export const blogCardHeader = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
}))

export const iconHeader = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '2.5rem',
    width: '25%',
}))

export const thumbnailContainer = styled(Box)(() => ({
    display: 'flex',
    width: '18.5rem',
    height: '100%',
}))

export const Thumbnail1 = styled(Box)(({ thumbnail }) => ({
    flex: 1,
    width: '100%',
    translate: '2rem 2rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${thumbnail}')`,
    borderRadius: '0.625rem',
    boxShadow: '0px 4px 5px 2px #21440080',
    transition: 'all 0.3s ease',
    opacity: 0,
    zIndex: 1,
}))

export const Thumbnail2 = styled(Box)(({ thumbnail }) => ({
    flex: 1,
    width: '100%',
    marginLeft: '-14.3rem',
    translate: '0rem 2rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${thumbnail}')`,
    boxShadow: '0px 4px 5px 2px #21440080',
    borderRadius: '0.625rem',
    opacity: 0.8,
    zIndex: 0,
}))

export const Title = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    width: '75%',
}))

export const Author = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '1.125rem',
}))

export const DescriptionHeader = styled(Typography)(() => ({
    fontWeight: '700',
    fontSize: '0.875rem',
}))

export const Description = styled(Typography)(() => ({
    fontWeight: '500',
    fontSize: '0.875rem',
    textAlign: 'justify',
}))
