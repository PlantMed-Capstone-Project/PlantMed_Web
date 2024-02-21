import {
    Box,
    Typography,
    IconButton,
    styled,
    TextField,
    Button,
} from '@mui/material'

export const Input = styled(TextField)(() => ({
    borderRadius: '0.625rem', // Bo tròn viền
    backgroundColor: '#FFF',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '0.625rem',
            borderWidth: '2px',
            borderColor: '#69AD28', // Màu viền
        },
        '&:hover fieldset': {
            borderColor: '#69AD28', // Màu viền khi hover
        },
        '&.Mui-focused fieldset': {
            borderColor: '#69AD28',
        },
    },
}))

export const avatarPlace = styled(Box)(() => ({
    width: '20%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
}))

export const profilePlace = styled(Box)(() => ({
    width: '50%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
}))

export const sidebarPlace = styled(Box)(() => ({
    width: '20%',
    height: '30rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4ffeb',
    borderRadius: '0.825rem',
    border: 'solid 0.1rem #dff0e9',
}))

export const Avatar = styled(Box)(() => ({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    marginTop: '5rem',
}))

export const Camera = styled(IconButton)(() => ({
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    color: '#214400',
    backgroundColor: '#fff',
    width: '2.2rem',
    height: '2.2rem',
    marginTop: '5rem',
    marginLeft: '3.5rem',
    alignItems: 'center',
    '&:hover, &.Mui-focusVisible': { backgroundColor: '#f2f7f4' },
}))

export const Username = styled(Typography)(() => ({
    textAlign: 'justify',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#214400',
    marginTop: '1rem',
}))

export const personalEmail = styled(Typography)(() => ({
    textAlign: 'justify',
    fontStyle: 'italic',
    fontSize: '0.8rem',
    fontWeight: '300',
    color: '#214400',
}))

export const Title = styled(Typography)(() => ({
    textAlign: 'justify',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: '500',
    color: '#69AD28',
    marginTop: '1rem',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '25.875rem',
    gap: '2rem',
    marginTop: '3rem',
}))

export const inputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
}))

export const inputHeader = styled(Typography)(() => ({
    textAlign: 'left',
    fontSize: '0.8rem',
    fontWeight: '300',
    color: '#214400',
}))

export const button = styled(Button)(() => ({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    width: '9rem',
    marginTop: '1.5rem',
}))

export const sidebarButton = styled(Button)(({ isSelected }) => ({
    backgroundColor: isSelected ? '#69AD28' : '#fff',
    color: isSelected ? '#fff' : '#214400',
    fontWeight: '600',
    borderRadius: '0.6rem',
    width: '15rem',
    height: '3rem',
    marginTop: '1.5rem',
    '&:hover': {
        backgroundColor: '#69AD28',
        color: '#fff',
    },
}))
