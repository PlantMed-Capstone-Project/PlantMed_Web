import React from 'react'
import { InputAdornment, Checkbox } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import * as styleMui from './SigninForm.styled'

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
        <styleMui.Form>
            <styleMui.signinTitle variant="h5" align="center">
                Đăng nhập
            </styleMui.signinTitle>
            {inputItems.map((item, index) => (
                <styleMui.Input
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
            <styleMui.passSection>
                <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={
                        <CheckCircleOutlineIcon sx={{ color: '#69AD28' }} />
                    }
                />
                <styleMui.remerberPass>Ghi nhớ đăng nhập</styleMui.remerberPass>
                <styleMui.forgetPass href="/" underline="hover">
                    Quên mật khẩu?
                </styleMui.forgetPass>
            </styleMui.passSection>
            <styleMui.button variant="contained">Đăng nhập</styleMui.button>
            <styleMui.link href="/signup" underline="hover">
                Tạo tài khoản mới
            </styleMui.link>
        </styleMui.Form>
    )
}
