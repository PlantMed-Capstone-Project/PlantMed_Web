import React, { useState } from 'react'
import {
    Box,
    Typography,
    Button,
    TextField,
    Link,
    InputAdornment,
    Checkbox,
    Tabs,
    Tab,
    styled,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import BadgeIcon from '@mui/icons-material/Badge'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
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

export default function SignupForm() {
    const [value, setValue] = React.useState("người dùng")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const nabItem = [
        {
            lable: 'người dùng',
            link: '/',
        },
        {
            lable: 'chuyên gia',
            link: '/',
        },
    ]

    const inputItems = [
        { icon: <PersonIcon sx={iconStyle} />, text: 'Email' },
        { icon: <BadgeIcon sx={iconStyle} />, text: 'CCCD' },
        { icon: <PhoneIphoneIcon sx={iconStyle} />, text: 'Số điện thoại' },
        { icon: <LockRoundedIcon sx={iconStyle} />, text: 'Mật khẩu' },
        { icon: <LockRoundedIcon sx={iconStyle} />, text: 'Xác thực mật khẩu' },
    ]

    const [action, setAction] = useState('người dùng')

    return (
        <Box>
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
                Đây là trang đăng ký dành cho {action}
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
                        marginTop: '2rem',
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: '#69AD28',
                    }}
                >
                    Đăng ký
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: { backgroundColor: '#69AD28' },
                    }}
                    sx={{
                        marginLeft: '4rem',
                        '& .Mui-selected': {
                            color: '#69AD28 !important',
                        },
                    }}
                >
                    {nabItem?.map((item, idx) => (
                        <Tab
                            component={Link}
                            to={item.link}
                            key={idx}
                            label={item.lable}
                            value={item.lable}
                            sx={{
                                color: '#214400',
                                fontWeight: '700',
                                width: '8.5rem',
                            }}
                            onClick={() => {
                                setAction(item.lable)
                            }}
                        />
                    ))}
                </Tabs>
                <Box sx={{ marginLeft: '4rem', marginTop: '1rem' }}>
                    {inputItems.map((item, indx) => (
                        <InputText
                            id="margin-dense"
                            placeholder={item.text}
                            key={indx}
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
                            marginTop: '0.4rem',
                            lineHeight: '1rem',
                            textAlign: 'left',
                            width: '16rem',
                            fontSize: '0.8rem',
                            fontStyle: 'italic',
                            fontWeight: '200',
                            color: '#214400',
                        }}
                    >
                        Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính
                        sách quyền riêng tư của chúng tôi.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '0.5rem',
                        marginLeft: '8rem',
                        backgroundColor: '#69AD28',
                        borderRadius: '0.6rem',
                        width: '8rem',
                    }}
                >
                    Đăng ký
                </Button>
                <Link
                    href="/signin"
                    underline="hover"
                    sx={{
                        position: 'relative',
                        top: '3rem',
                        left: '-6rem',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        fontWeight: '400',
                        color: '#214400',
                    }}
                >
                    Đăng nhập
                </Link>
            </Box>
        </Box>
    )
}
