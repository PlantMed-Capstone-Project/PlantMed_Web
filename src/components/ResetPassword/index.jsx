import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './ResetPasswordForm.styled'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'

const ResetPasswordForm = ({ password }) => {
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
            placeholder: 'Mật khẩu mới',
        },
        {
            id: 3,
            type: eye ? 'text' : 'password',
            header: 'Nhập lại mật khẩu mới',
            key: 'confirmPassword',
            placeholder: 'Mật khẩu xác thực',
        },
    ]

    const [inputs, setInputs] = useState({
        oldPassword: password,
        newPassword: '',
        confirmPassword: '',
    })

    //Check validation
    const onValidate = () => {
        const inputErrors = validateInputs(inputs)

        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors)
        } else {
            setErrors({})
            handleOnSubmit()
        }
    }

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const renderInputs = ({ id, type, header, key, eyeIcon, placeholder }) => {
        return (
            <styleMui.inputContainer key={id}>
                <styleMui.inputHeader>{header}</styleMui.inputHeader>
                <InputField
                    key={id}
                    type={type}
                    eyeIcon={eyeIcon}
                    handleEye={handleEye}
                    placeholder={placeholder}
                    value={inputs[key]}
                    error={errors[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    helperText={errors[key]}
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
