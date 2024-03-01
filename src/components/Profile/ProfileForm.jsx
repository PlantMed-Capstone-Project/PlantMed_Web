import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './Profile.styled'

export const ProfileForm = ({
    username,
    email,
    createdDate,
    isDisabled,
    onSubmitButtonClick,
    resetSidebarSelection,
}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    // Calculate the total number of days since the created date
    const today = new Date()
    const diffTime = Math.abs(today - new Date(createdDate))
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    const editFields = [
        {
            id: 1,
            type: 'text',
            header: 'Tên hiển thị',
            key: 'username',
        },
        {
            id: 2,
            header: `Email: ${email}`,
            key: 'email',
        },
        {
            id: 3,
            header: `Bạn đã tạo tài khoản vào: ${diffDays} ngày trước`,
            key: 'createdDate',
        },
    ]

    const validationRules = [
        {
            field: 'username',
            message:
                'Tên hiển thị không được để trống. Vui lòng nhập tên hiển thị',
        },
        {
            field: 'username',
            message: 'Tên hiển thị không hợp lệ. Vui lòng nhập tên hiển thị',
            regex: /^(?=.*[a-zA-Z_À-ỹ])[a-zA-Z_À-ỹ\s\d]+$/,
        },
    ]

    const [inputs, setInputs] = useState({
        username: username || '',
        email: email || '',
    })

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
            handleOnSubmit()
        }
    }

    const handleError = (errorMess, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMess }))
    }

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const renderInputs = ({ id, type, header, key }) => {
        if (key === 'username') {
            return (
                <styleMui.inputContainer key={id}>
                    <styleMui.inputHeader>{header}</styleMui.inputHeader>
                    <styleMui.Input
                        size="small"
                        value={inputs[key]}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        margin="dense"
                        type={type}
                        disabled={isDisabled}
                        error={errors[key]}
                        helperText={errors[key]}
                    />
                </styleMui.inputContainer>
            )
        } else if (key === 'createdDate' || key === 'email') {
            return (
                <styleMui.inputContainer key={id}>
                    <styleMui.inputHeader>{header}</styleMui.inputHeader>
                </styleMui.inputContainer>
            )
        } else {
            return null
        }
    }

    const handleOnSubmit = () => {
        onSubmitButtonClick()
        resetSidebarSelection()
        return navigate('/profile')
    }

    return (
        <styleMui.profilePlace>
            <styleMui.Title>Thông tin người dùng</styleMui.Title>
            <styleMui.inputPlace>
                {editFields.map((obj) => renderInputs({ ...obj }))}
            </styleMui.inputPlace>
            <styleMui.button
                variant="contained"
                disabled={isDisabled}
                onClick={onValidate}
            >
                Lưu thông tin
            </styleMui.button>
        </styleMui.profilePlace>
    )
}
