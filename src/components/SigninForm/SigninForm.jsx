import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import * as styleMui from './SigninForm.styled'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SigninForm() {
    const navigate = useNavigate()
    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const [errors, setErrors] = useState({})

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const inputFields = [
        {
            key: 'email',
            placeholder: 'Email',
            type: 'text',
            icon: <PersonIcon sx={iconStyle} />,
        },
        {
            key: 'password',
            placeholder: 'Mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={iconStyle} />,
            eyeIcon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
    ]

    //Khai báo array các validation
    const validationRules = [
        {
            field: 'email',
            message: 'Vui lòng nhập email',
        },
        {
            field: 'password',
            message: 'Vui lòng nhập mật khẩu',
        },
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

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await axios
            .post('https://reqres.in/api/login', {
                email: inputs.email,
                password: inputs.password,
            })
            .then((res) => {
                console.log(res)
                console.log(response.data)
                clearInput()
                navigate('/register')
            })
            .catch((err) => {
                console.log(err)
            })
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
                required
            />
        ))
    }

    return (
        <form method="post" onSubmit={() => onValidate()}>
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
                    <styleMui.button variant="contained">
                        Đăng nhập
                    </styleMui.button>
                    <styleMui.link href="/register" underline="hover">
                        Tạo tài khoản mới
                    </styleMui.link>
                </styleMui.navPlace>
            </styleMui.Form>
        </form>
    )
}
