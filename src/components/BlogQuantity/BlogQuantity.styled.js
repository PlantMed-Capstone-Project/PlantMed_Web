import { Box, Stack, Typography, Button, styled } from '@mui/material'
import study from 'Images/study.png'
import ipad from 'Images/ipad.png'

export const container = styled(Stack)(() => ({
    height: '56rem',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4FFEB',
}))

export const blogQuantityContainer = styled(Box)(() => ({
    display: 'flex',
    height: '100%',
    width: '100rem',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const imagePlace = styled(Stack)(() => ({
    width: '50%',
    height: '100%',
    position: 'relative',
    padding: '8rem 0 0 4rem',
}))

export const infoPlace = styled(Stack)(() => ({
    width: '50%',
    height: '100%',
    position: 'relative',
    padding: '4rem 4rem 0 0',
    alignItems: 'flex-end',
}))

export const studyImage = styled(Box)(() => ({
    backgroundImage: `url(${study})`,
    backgroundRepeat: 'no-repeat',
    height: '52%',
    width: '100%',
    objectFit: 'cover',
}))

export const boxContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    height: '48%',
    gap: '14.5rem',
    marginTop: '-6rem',
}))

export const staticContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    gap: '4rem',
    paddingRight: '2rem',
}))

export const quantityBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingTop: '2rem',
}))

export const ipadImage = styled(Box)(() => ({
    backgroundImage: `url(${ipad})`,
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '50%',
    objectFit: 'cover',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    color: '#FFF',
    borderRadius: '0.313rem',
    width: '11rem',
    height: '2.75rem',
    fontSize: '1.25rem',
    textTransform: 'initial',
    marginTop: '19.5rem',
    '&:hover': {
        backgroundColor: '#004225',
        color: '#fff',
    },
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'right',
    fontFamily: 'Roboto Serif',
    lineHeight: '6rem',
    textTransform: 'capitalize',
    fontSize: '5.5rem',
    fontWeight: '500',
    color: '#69AD28',
}))

export const Info = styled(Typography)(() => ({
    textAlign: 'right',
    textTransform: 'inherit',
    fontSize: '1.85rem',
    fontWeight: '300',
    color: '#214400',
    width: '35rem',
    padding: '3rem 3rem 0 0',
}))

export const quantityTitle = styled(Typography)(() => ({
    textAlign: 'right',
    textTransform: 'capitalize',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#69AD28',
}))

export const quantityNumber = styled(Typography)(() => ({
    textAlign: 'left',
    fontSize: '3.125rem',
    fontWeight: '700',
    color: '#D25D22',
}))
