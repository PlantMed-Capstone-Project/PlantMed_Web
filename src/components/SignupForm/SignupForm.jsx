import React, { useState } from 'react'
import { Box, Link, InputAdornment, Checkbox, Tabs, Tab } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import BadgeIcon from '@mui/icons-material/Badge'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import * as styleMui from './SignupForm.styled'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SignupForm() {
    const [value, setValue] = React.useState('người dùng')

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
            <styleMui.Note variant="h5">
                Đây là trang đăng ký dành cho {action}
            </styleMui.Note>
            <styleMui.Form>
                <styleMui.signupTitle variant="h5" align="center">
                    Đăng ký
                </styleMui.signupTitle>
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
                {inputItems.map((item, indx) => (
                    <styleMui.Input
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
                <styleMui.policySection>
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={
                            <CheckCircleOutlineIcon sx={{ color: '#69AD28' }} />
                        }
                    />
                    <styleMui.policy variant="h5">
                        Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính
                        sách quyền riêng tư của chúng tôi.
                    </styleMui.policy>
                </styleMui.policySection>
                <styleMui.button variant="contained">Đăng ký</styleMui.button>
                <styleMui.link href="/signin" underline="hover">
                    Đăng nhập
                </styleMui.link>
            </styleMui.Form>
        </Box>
    )
}
