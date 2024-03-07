import {
    Box,
    Typography,
    IconButton,
    styled,
    Button,
    Input,
    Avatar,
} from '@mui/material'

export const avatarPlace = styled(Box)(() => ({
    width: '15%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
    marginTop: '1rem',
    padding: '1rem',
}))

export const profilePlace = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
    padding: '1.5rem 0',
}))

export const sidebarPlace = styled(Box)(() => ({
    width: '6%',
    height: 'calc(100vh + 1rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderLeft: '0.313rem solid #69AD28',
    padding: '1rem 0 0 0',
}))

export const infoPlace = styled(Box)(() => ({
    width: '90%',
    height: '55%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottom: '0.188rem solid #214400',
    paddingBottom: '2rem',
}))

export const accountPlace = styled(Box)(() => ({
    width: '90%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
}))

export const profileContainer = styled(Box)(() => ({
    marginTop: '1rem',
    overflowY: 'auto',
    height: '100%',
    '&::-webkit-scrollbar': {
        width: '0',
    },
    scrollbarWidth: 'none',
}))

export const profileFormContainer = styled(Box)(() => ({
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
}))

export const avatarContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem 0 0 2.5rem',
}))

export const avatar = styled(Avatar)(() => ({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '7rem',
    height: '7rem',
    display: 'flex',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
}))

export const Camera = styled(IconButton)(() => ({
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    color: '#214400',
    backgroundColor: '#fff',
    width: '2.2rem',
    height: '2.2rem',
    display: 'flex',
    alignItems: 'center',
    transform: 'translate(-2.5rem, 5rem)',
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#f2f7f4' },
}))

export const Username = styled(Typography)(() => ({
    textAlign: 'justify',
    fontSize: '1.875rem',
    fontWeight: '500',
    color: '#214400',
    paddingTop: '1rem',
}))

export const personalEmail = styled(Typography)(() => ({
    textAlign: 'justify',
    fontStyle: 'italic',
    fontSize: '1rem',
    fontWeight: '300',
    color: '#214400',
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'justify',
    textTransform: 'capitalize',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#214400',
    paddingTop: '3.375rem',
    marginLeft: '3.25rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    width: '40.875rem',
    marginTop: '2rem',
    marginLeft: '3.25rem',
    gap: '2rem',
}))

export const hearderContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.7rem',
    paddingTop: '0.7rem',
    width: '30%',
}))

export const inputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
}))

export const inputHeader = styled(Typography)(() => ({
    fontSize: '1.25rem',
    fontWeight: '300',
    color: '#214400',
}))

export const buttonInfoContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    paddingTop: '25rem',
    width: '30%',
}))

export const buttonAccountContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    padding: '15rem 0 0 9rem',
    width: '30%',
}))

export const button = styled(Button)(({ width }) => ({
    backgroundColor: '#69AD28',
    color: '#FFF',
    width: width,
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#004225',
        color: '#fff',
    },
}))

export const sidebarContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    paddingTop: '25rem',
    width: '30%',
}))

export const sidebarButton = styled(IconButton)(({ isSelected }) => ({
    display: 'flex',
    flexDirection: 'column',
    background: isSelected
        ? 'linear-gradient(90deg, rgba(219,241,201,1) 50%, rgba(255,255,255,1) 80.39%)'
        : '#fff',
    color: isSelected ? '#214400' : '#000',
    borderRadius: 0,
    width: '9.375rem',
    height: '6rem',
    marginLeft: '4.1rem',
    '&:hover': {
        background:
            'linear-gradient(90deg, rgba(219,241,201,1) 50%, rgba(255,255,255,1) 80.39%)',
        color: '#69AD28',
    },
}))

export const uploadImage = styled(Input)(() => ({
    display: 'none',
}))

export const buttonName = styled(Typography)(() => ({
    paddingRight: '2rem',
}))

export const iconStyle = {
    color: '#69AD28',
    fontSize: 50,
    marginRight: '2rem',
}

export const editIconStyle = {
    color: '#69AD28',
}

export const helperTextStyle = styled(Typography)(() => ({
    fontSize: '0.8rem',
    marginTop: '-4.5rem',
}))
