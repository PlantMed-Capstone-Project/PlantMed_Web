import React from 'react'
import {
    InputAdornment,
    Checkbox,
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material'
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
        <styleMui.container>
            <styleMui.Form>
                <styleMui.signinTitle variant="h5" align="center">
                    Đăng nhập
                </styleMui.signinTitle>

                <styleMui.containerInput>
                    {/* Start input place */}
                    <styleMui.inputPlace>
                        {inputItems.map((item, index) => (
                            <styleMui.Input
                                placeholder={item.text}
                                InputProps={{
                                    startAdornment: item.icon,
                                }}
                            />
                        ))}
                    </styleMui.inputPlace>
                    {/* End input place */}

                    <styleMui.passSection>
                        <styleMui.forgetPass href="/" underline="hover">
                            Quên mật khẩu?
                        </styleMui.forgetPass>
                    </styleMui.passSection>
                </styleMui.containerInput>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.69rem',
                    }}
                >
                    <styleMui.button variant="contained">
                        Đăng nhập
                    </styleMui.button>
                    <styleMui.link href="/signup" underline="hover">
                        Tạo tài khoản mới
                    </styleMui.link>
                </Box>
            </styleMui.Form>
        </styleMui.container>
    )
}
