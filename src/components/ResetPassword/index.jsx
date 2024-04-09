import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { resetPassword } from 'rest/api/auth'
import * as styleMui from './ResetPasswordForm.styled'
import { changePassAction } from 'app/reducers/changePass.js'

const ResetPasswordForm = () => {
    const { setChange } = useActions(changePassAction)
    const navigate = useNavigate()
    const { show } = useActions(snackbarAction)
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
            key: 'newPassword',
            eyeIcon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
            placeholder: 'Nhập mật khẩu mới...',
        },
        {
            id: 2,
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

    const clearInput = () => {
        setInputs({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        })
    }

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

    const renderInputs = ({ id, type, key, eyeIcon, placeholder }) => {
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
                height={'3rem'}
                fontSize={'1.25rem'}
            />
        )
    }

    const handleOnSubmit = async () => {
        try {
            show({
                message: 'Vui lòng chờ trong giây lát',
                autoHideDuration: 2000,
            })
            await resetPassword({ newPassword: inputs.newPassword })
            show({
                message: 'Cập nhật mật khẩu thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            clearInput()
            navigate('/profile')
        } catch (error) {
            show({
                message:
                    error.response.data.message ??
                    'Lỗi hệ thống! Vui lòng thử lại sau!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    const prvProfile = () => {
        setChange(false)
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
            onClick: prvProfile,
        },
    ]

    const renderButtons = ({ id, value, onClick, width }) => {
        return (
            <styleMui.button key={id} onClick={onClick} width={width}>
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
