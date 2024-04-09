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
    marginTop: '1rem',
    padding: '1rem',
}))

export const profilePlace = styled(Box)(() => ({
    width: '65.9%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
    marginTop: '1rem',
}))

export const sidebarPlace = styled(Box)(() => ({
    width: '6%',
    height: 'calc(100vh - 8rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderLeft: '0.313rem solid #69AD28',
    padding: '1rem 0 0 0',
}))

export const profileContainer = styled(Box)(() => ({
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
    display: 'flex',
    textAlign: 'center',
    fontSize: '1.875rem',
    fontWeight: '500',
    color: '#214400',
    paddingTop: '1rem',
    overflowWrap: 'anywhere',
}))

export const personalEmail = styled(Typography)(() => ({
    display: 'flex',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1rem',
    fontWeight: '300',
    color: '#214400',
    overflowWrap: 'anywhere',
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#214400',
    paddingTop: '3.375rem',
    marginLeft: '3.25rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '39.875rem',
    marginTop: '2rem',
    marginLeft: '3.25rem',
    gap: '2rem',
}))

export const hearderContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '3.3rem',
    paddingTop: '0.7rem',
    width: '30%',
}))

export const inputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    gap: '1rem',
}))

export const inputHeader = styled(Typography)(() => ({
    fontSize: '1.25rem',
    fontWeight: '300',
    color: '#214400',
}))

export const buttonContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    padding: '3rem 0 0 28rem',
}))

export const button = styled(Button)(({ width }) => ({
    backgroundColor: '#69AD28',
    fontSize: '1rem',
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

export const boxLoading = styled(Box)({
    width: '7rem',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
