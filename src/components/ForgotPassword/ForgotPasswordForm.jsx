import PersonIcon from '@mui/icons-material/Person'
import { authAction } from 'app/reducers/auth'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from 'rest/api/auth'
import * as styleMui from './ForgotPasswordForm.styled'
import { InputAdornment } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function ForgotPasswordForm() {
    const { show } = useActions(snackbarAction)
    const sampleEmail = 'Qiqi123@gmail.com'
    const navigate = useNavigate()

    const [showMessage, setShowMessage] = useState(false)

    const [errors, setErrors] = useState({})

    const [inputs, setInputs] = useState({
        email: '',
    })

    const inputFields = [
        {
            key: 'email',
            placeholder: 'Email',
            type: 'email',
            icon: <PersonIcon sx={iconStyle} />,
        },
    ]

    //Khai báo array các validation
    const validationRules = [
        {
            field: 'email',
            message: 'Email không hợp lệ',
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        {
            field: 'email',
            message: 'Vui lòng nhập email',
        },
    ]

    //Check validation
    const onValidate = () => {
        setErrors({})
        let isValid = true

        validationRules.forEach(({ field, message, regex }) => {
            if (!inputs[field] || (regex && !inputs[field].match(regex))) {
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
        })
    }

    const onSubmit = async () => {
        try {
            /*
            show({
                message: 'Vui lòng đợi giấy lát!',
                autoHideDuration: 500,
            })
            const response = await authLogin(inputs)
            login(response.data)
            show({
                message: 'Đăng nhập thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            */
            setShowMessage(true)
            clearInput()
            return navigate('/forgot-password')
        } catch (error) {
            /*
            loginFailure(error.response.data.message)
            show({
                message: error.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
            */
        }
    }

    //Khai báo input
    const renderInputs = (inputFields) => {
        return (
            !showMessage && (
                <styleMui.Input
                    key={inputFields.key}
                    placeholder={inputFields.placeholder}
                    size="small"
                    value={inputs[inputFields.key]}
                    error={errors[inputFields.key]}
                    onChange={(e) =>
                        handleInputChange(inputFields.key, e.target.value)
                    }
                    helperText={errors[inputFields.key]}
                    margin="dense"
                    type={inputFields.type}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {inputFields.icon}
                            </InputAdornment>
                        ),
                    }}
                />
            )
        )
    }

    return (
        <styleMui.Form>
            <styleMui.forgotPassTitle variant="h5" align="center">
                Quên mật khẩu ?
            </styleMui.forgotPassTitle>
            {!showMessage && !showMessage ? (
                <styleMui.containerInput>
                    <styleMui.Note>
                        Nhập email để nhận mật khẩu mới
                    </styleMui.Note>
                    {/* Start input place */}
                    <styleMui.inputPlace>
                        {renderInputs(...inputFields)}
                    </styleMui.inputPlace>
                    {/* End input place */}
                    <styleMui.button
                        variant="contained"
                        onClick={() => onValidate()}
                    >
                        Nhận mã
                    </styleMui.button>
                </styleMui.containerInput>
            ) : (
                <styleMui.notifyPlace>
                    <CheckCircleOutlineIcon
                        sx={{ color: '#69AD28', fontSize: '6rem' }}
                    />
                    <styleMui.Note>
                        Mật khẩu mới đã được gởi qua email. <br />
                        Hãy kiểm tra email và đăng nhập lại với mật khẩu mới
                    </styleMui.Note>
                </styleMui.notifyPlace>
            )}
            <styleMui.navPlace>
                <styleMui.link to="/login" underline="hover">
                    Quay lại đăng nhập
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
