import React from 'react'
import {
    Box,
    Typography,
    Button,
    TextField,
    InputAdornment,
    Checkbox,
    Link,
    styled,
} from '@mui/material'
import backgroundImage from 'Images/heroSen.jpg'
import PersonIcon from '@mui/icons-material/Person'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const InputText = styled(TextField)(() => ({
    outline: '0.1rem solid #69AD28',
    borderRadius: '0.5rem',
}))

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SigninForm() {
    const inputItems = [
        { icon: <PersonIcon sx={iconStyle} />, text: 'Email' },
        { icon: <LockRoundedIcon sx={iconStyle} />, text: 'Mật khẩu' },
    ]
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    filter: `blur(5px)`,
                    zIndex: -1,
                }}
            ></Box>
            <Typography
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: '10rem',
                    left: '53rem',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#FFF',
                }}
            >
                CHÀO MỪNG <br />
                TRỞ LẠI VỚI PLANTMED
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: '16rem',
                    left: '51rem',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '200',
                    fontStyle: 'italic',
                    color: '#FFF',
                }}
            >
                Đây là trang đăng nhập dành cho cá nhân
                <br />
                đã có tài khoản tại PLANTMED
            </Typography>
            <Box
                sx={{
                    position: 'absolute',
                    top: '5rem',
                    left: '10rem',
                    backgroundColor: '#fff',
                    width: '25rem',
                    height: '36rem',
                    borderRadius: '1rem',
                }}
            >
                <Typography
                    align="center"
                    variant="h5"
                    sx={{
                        marginTop: '5rem',
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: '#69AD28',
                    }}
                >
                    Đăng nhập
                </Typography>
                <Box sx={{ marginLeft: '4rem', marginTop: '2rem' }}>
                    {inputItems.map((item, index) => (
                        <InputText
                            id="margin-dense"
                            placeholder={item.text}
                            size="small"
                            fullWidth
                            style={{ width: 280 }}
                            margin="dense"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {item.icon}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        marginLeft: '3.5rem',
                        marginTop: '1rem',
                        display: 'flex',
                        flexWrap: 'nowrap',
                    }}
                >
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={
                            <CheckCircleOutlineIcon sx={{ color: '#69AD28' }} />
                        }
                    />
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{
                            marginTop: '0.8rem',
                            marginLeft: '-0.2rem',
                            textAlign: 'left',
                            width: '7rem',
                            fontSize: '0.8rem',
                            fontStyle: 'italic',
                            fontWeight: '200',
                            color: '#214400',
                        }}
                    >
                        Ghi nhớ đăng nhập
                    </Typography>
                    <Link
                        href="/signup"
                        underline="hover"
                        sx={{
                            marginTop: '0.8rem',
                            marginLeft: '2.8rem',
                            fontSize: '0.8rem',
                            fontStyle: 'italic',
                            fontWeight: '400',
                            color: '#214400',
                        }}
                    >
                        Quên mật khẩu?
                    </Link>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '3rem',
                        marginLeft: '8rem',
                        backgroundColor: '#69AD28',
                        borderRadius: '0.6rem',
                        width: '8rem',
                    }}
                >
                    Đăng nhập
                </Button>
                <Link
                    href="/signup"
                    underline="hover"
                    sx={{
                        position: 'relative',
                        top: '4.5rem',
                        left: '-7.5rem',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        fontWeight: '400',
                        color: '#214400',
                    }}
                >
                    Tạo tài khoản mới
                </Link>
            </Box>
        </Box>
    )
}
