import { Box, Typography, styled } from '@mui/material'
import presentImage from 'Images/groupImage.png'

export const arrangeContainer = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
})

export const contentPlace = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '8.25rem',
    paddingTop: '6rem',
    width: '38%',
})

export const memberPlace = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '4.5rem',
    justifyContent: 'center',
    alignItems: 'center',
})

export const avatarPlace1 = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1.2rem',
    alignContent: 'center',
    paddingTop: '5rem',
})

export const avatarPlace2 = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1.2rem',
    alignContent: 'center',
    paddingTop: '5rem',
})

export const infoPlace = styled(Box)({
    width: '20.563rem',
    height: '7rem',
    borderRadius: '0.625rem',
    backgroundColor: '#FFF',
    marginTop: '15rem',
    boxShadow: '0px 0px 5px 0px rgba(33, 68, 0, 0.30)',
    justifyContent: 'center',
})

export const Image = styled(Box)({
    backgroundImage: `url(${presentImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '37.938rem',
    height: '30.688rem',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '9.5rem',
})

export const Avatar = styled(Box)({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '23.5rem',
    height: '17.063rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '1.625rem',
    justifyContent: 'center',
})

export const Title = styled(Typography)({
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
    fontWeight: '500',
    color: '#69AD28',
    lineHeight: 'normal',
    width: '100%',
})

export const Note = styled(Typography)({
    textAlign: 'justify',
    fontSize: '1.5rem',
    fontWeight: '300',
    color: '#214400',
    paddingTop: '1.813rem',
    lineHeight: 'normal',
})

export const memberTitle = styled(Typography)({
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#69AD28',
    lineHeight: 'normal',
    display: 'flex',
})

export const Info = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '300',
    color: '#214400',
    lineHeight: 'normal',
    width: '100%',
    paddingTop: '2rem',
})
