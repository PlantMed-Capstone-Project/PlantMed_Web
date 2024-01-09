const { styled, TextField, Typography } = require('@mui/material')

export const searchBar = styled(TextField)(() => ({
    width: '43.25rem', // Độ rộng thanh tìm kiếm
    borderRadius: '0.625rem', // Bo tròn viền
    height: '3.625rem',
    backgroundColor: '#F4FFEB',
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

export const Text = styled(Typography)(() => ({
    color: '#214400',
    fontWeight: '500',
    fontSize: '2.2rem',
}))
