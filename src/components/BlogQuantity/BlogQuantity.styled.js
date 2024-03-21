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

export const boxButton = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '8rem',
    marginTop: '2rem',
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
    display: 'flex',
    flexDirection: 'column',
}))

export const infoPlace = styled(Stack)(() => ({
    width: '50%',
    height: '100%',
    padding: '4rem 4rem 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '1rem',
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
    width: '15rem',
    height: '23rem',
    objectFit: 'cover',
    position: 'absolute',
    top: '26.25rem',
    right: '3.5rem',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    color: '#FFF',
    borderRadius: '0.313rem',
    width: '11rem',
    height: '2.75rem',
    fontSize: '1.25rem',
    textTransform: 'initial',
    '&:hover': {
        backgroundColor: '#004225',
        color: '#fff',
    },
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'right',
    fontSize: '4.375rem',
    fontWeight: '500',
    color: '#69AD28',
    letterSpacing: '0.00938em',
    lineHeight: 'normal',
}))

export const Info = styled(Typography)(() => ({
    textAlign: 'right',
    fontSize: '1.875rem',
    fontWeight: '300',
    color: '#214400',
    width: '40rem',
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
