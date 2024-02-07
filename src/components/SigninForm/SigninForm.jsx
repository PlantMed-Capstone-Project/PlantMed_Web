import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import * as styleMui from './SigninForm.styled'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SigninForm() {
    const inputItems = [
        { icon: <PersonIcon sx={iconStyle} />, placeholder: 'Email' },
        { icon: <LockRoundedIcon sx={iconStyle} />, placeholder: 'Mật khẩu' },
    ]

    //Check validation
    const onValidate = () => {
        setErrors({})
        let isValid = true

        validationRules.forEach(({ field, message }) => {
            if (!inputs[field]) {
                isValid = false
                handleError(message, field)
            }
        })

        if (isValid) {
            onSubmit()
        }
    }

    const handleError = (errorMess, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMess }))
    }

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const clearInput = () => {
        setInputs({
            email: '',
            password: '',
        })
    }

    const onSubmit = () => {
        clearInput()
        return navigate('/')
    }

    //Khai báo input
    const renderInputs = () => {
        return inputFields.map((item, indx) => (
            <styleMui.Input
                key={indx}
                placeholder={item.placeholder}
                size="small"
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                helperText={errors[item.key]}
                margin="dense"
                type={item.type}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {item.icon}
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {item.eyeIcon}
                        </InputAdornment>
                    ),
                }}
            />
        ))
    }

    return (
        <styleMui.Form>
            <styleMui.signinTitle variant="h5" align="center">
                Đăng nhập
            </styleMui.signinTitle>

            <styleMui.containerInput>
                {/* Start input place */}
                <styleMui.inputPlace>{renderInputs()}</styleMui.inputPlace>
                {/* End input place */}

                <styleMui.passSection>
                    <styleMui.forgetPass href="/" underline="hover">
                        Quên mật khẩu?
                    </styleMui.forgetPass>
                </styleMui.passSection>
            </styleMui.containerInput>
            <styleMui.navPlace>
                <styleMui.button
                    variant="contained"
                    onClick={() => onValidate()}
                >
                    Đăng nhập
                </styleMui.button>
                <styleMui.link href="/register" underline="hover">
                    Tạo tài khoản mới
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
