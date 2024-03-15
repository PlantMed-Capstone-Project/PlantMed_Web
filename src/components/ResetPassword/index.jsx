import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
            key: 'oldPassword',
            eyeIcon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
            placeholder: 'Nhập mật khẩu cũ của bạn...',
        },
        {
            id: 2,
            type: eye ? 'text' : 'password',
            key: 'newPassword',
            placeholder: 'Nhập mật khẩu mới...',
        },
        {
            id: 3,
            type: eye ? 'text' : 'password',
            key: 'confirmPassword',
            placeholder: 'Xác nhận mật khẩu mới...',
        },
    ]

    const [inputs, setInputs] = useState({
        oldPassword: '',
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
        )
    }

    const handleOnSubmit = () => {
        return navigate('/reset-password')
    }

    const buttons = [
        {
            id: 1,
            value: 'Tiếp tục',
            width: '7rem',
            onClick: onValidate,
        },
        {
            id: 2,
            value: 'Quay lại',
            width: '7rem',
            nav: '/profile',
        },
    ]

    const renderButtons = ({ id, value, onClick, width, nav }) => {
        return (
            <styleMui.button
                component={Link}
                key={id}
                onClick={onClick}
                width={width}
                to={nav}
            >
                {value}
            </styleMui.button>
        )
    }

    return (
        <styleMui.passwordPlace>
            <styleMui.Title>Thay đổi mật khẩu</styleMui.Title>
            <styleMui.Note>
                Mật khẩu của bạn đã hết hạn. Hãy nhập mật khẩu mới
            </styleMui.Note>
            <styleMui.inputPlace>
                {editFields.map((obj) => renderInputs({ ...obj }))}
            </styleMui.inputPlace>
            <styleMui.buttonPasswordContainer>
                {buttons.map((obj) => renderButtons({ ...obj }))}
            </styleMui.buttonPasswordContainer>
        </styleMui.passwordPlace>
    )
}

export default ResetPasswordForm
