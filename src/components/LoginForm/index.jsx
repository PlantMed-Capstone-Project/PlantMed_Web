import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import { authAction } from 'app/reducers/auth'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import { db } from 'firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from 'rest/api/auth'
import { parseJwt } from 'utils'
import * as styleMui from './SigninForm.styled'

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
            icon: <PersonIcon sx={styleMui.iconStyle} />,
        },
        {
            key: 'password',
            placeholder: 'Mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={styleMui.iconStyle} />,
            eyeIcon: (
                <IconButton onClick={handleEye} tabIndex={-1}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
    ]

    const expertRef = collection(db, 'expertOnline')
    const handleOnline = async (data) => {
        if (data.Role === 'expert') {
            await addDoc(expertRef, {
                expert: data,
                status: 'isOnline',
            })
        }
    }

    //Khai báo input
    const renderInputs = () => {
        return inputFields.map((item) => (
            <InputField
                key={item.id}
                type={item.type}
                icon={item.icon}
                eyeIcon={item.eyeIcon}
                handleEye={handleEye}
                placeholder={item.placeholder}
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                onKeyDown={handleKeyDown}
                helperText={errors[item.key]}
            />
        ))
    }

    //Check validation
    const onValidate = () => {
        const inputErrors = validateInputs(inputs)

        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors)
        } else {
            setErrors({})
            onSubmit()
        }
    }

    //Nhấn Enter để validate
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onValidate()
        }
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
            show({
                message: 'Vui lòng đợi giấy lát!',
                autoHideDuration: 500,
            })
            const response = await authLogin(inputs)
            login(response.data)
            handleOnline(parseJwt(response.data.accessToken))
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
                    <styleMui.forgetPass
                        to="/forgot-password"
                        underline="hover"
                    >
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
