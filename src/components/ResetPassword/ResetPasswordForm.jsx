import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './ResetPasswordForm.styled'
import { IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const ResetPasswordForm = ({password}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye((prevState) => !prevState)
    }

    const editFields = [
        {
            id: 1,
            type: eye ? 'text' : 'password',
            header: 'Mật khẩu cũ',
            key: 'oldPassword',
            eyeIcon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
        {
            id: 2,
            type: eye ? 'text' : 'password',
            header: 'Mật khẩu mới',
            key: 'newPassword',
        },
        {
            id: 3,
            type: eye ? 'text' : 'password',
            header: 'Nhập lại mật khẩu mới',
            key: 'confirmPassword',
        },
    ]

    const validationRules = [
        {
            field: 'newPassword',
            message:
                'Mật khẩu mới giống với mật khẩu cũ. Vui lòng nhập mật khẩu mới',
            compareField: 'oldPassword',
        },
        {
            field: 'newPassword',
            message: 'Mật khẩu mới không được dưới 6 ký tự',
            minLength: 6,
        },
        {
            field: 'newPassword',
            message: 'Vui lòng nhập mật khẩu mới',
        },
        {
            field: 'confirmPassword',
            message: 'Mật khẩu xác thực không trùng khớp',
            compareField: 'newPassword',
        },
    ]

    const [inputs, setInputs] = useState({
        oldPassword: password || '',
        newPassword: '',
        confirmPassword: '',
    })

    //Check validation
    const onValidate = () => {
        setErrors({})
        let isValid = true

        validationRules.forEach(
            ({ field, message, regex, compareField, minLength }) => {
                if (
                    !inputs[field] ||
                    (regex && !inputs[field].match(regex)) ||
                    (minLength && inputs[field].length < minLength) ||
                    (compareField &&
                        field === 'newPassword' &&
                        inputs[field] === inputs[compareField]) ||
                    (compareField &&
                        field === 'confirmPassword' &&
                        inputs[field] !== inputs[compareField])
                ) {
                    isValid = false
                    handleError(message, field)
                }
            }
        )

        if (isValid) {
            handleOnSubmit()
        }
    }

    const handleError = (errorMess, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMess }))
    }

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const renderInputs = ({ id, type, header, key, eyeIcon }) => {
        return (
            <styleMui.inputContainer key={id}>
                <styleMui.inputHeader>{header}</styleMui.inputHeader>
                <styleMui.Input
                    size="small"
                    value={inputs[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    margin="dense"
                    type={type}
                    error={errors[key]}
                    helperText={errors[key]}
                    disabled={key && key==='oldPassword'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {eyeIcon}
                            </InputAdornment>
                        ),
                    }}
                />
            </styleMui.inputContainer>
        )
    }

    const handleOnSubmit = () => {
        return navigate('/reset-password')
    }

    return (
        <styleMui.passwordPlace>
            <styleMui.Title>Thay đổi mật khẩu</styleMui.Title>
            <styleMui.inputPlace>
                {editFields.map((obj) => renderInputs({ ...obj }))}
            </styleMui.inputPlace>
            <styleMui.button variant="contained" onClick={onValidate}>
                Lưu thông tin
            </styleMui.button>
        </styleMui.passwordPlace>
    )
}

export default ResetPasswordForm
