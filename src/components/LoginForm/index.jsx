import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
import { authAction } from 'app/reducers/auth'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from 'rest/api/auth'
import * as styleMui from './SigninForm.styled'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function LoginForm() {
    const { login, loginFailure } = useActions(authAction)
    const { show } = useActions(snackbarAction)

    const navigate = useNavigate()
    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye((prevState) => !prevState)
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
            type: 'email',
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

    const onSubmit = async () => {
        try {
            const response = await authLogin(inputs)
            login(response.data)
            show({
                message: 'Đăng nhập thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            clearInput()
            return navigate('/')
        } catch (error) {
            loginFailure(error.response.data.message)
            show({
                message: error.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
        }
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
                <styleMui.link to="/register" underline="hover">
                    Tạo tài khoản mới
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
