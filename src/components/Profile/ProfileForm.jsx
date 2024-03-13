import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from 'components/InputField'
import * as styleMui from './Profile.styled'
import { validateInputs } from 'components/InputField/validationRules'

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
            placeholder: 'Tên người dùng',
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

    const [inputs, setInputs] = useState({
        username: username || '',
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

    const renderInputs = ({ id, type, header, key, placeholder }) => {
        if (key === 'username') {
            return (
                <styleMui.inputContainer key={id}>
                    <styleMui.inputHeader>{header}</styleMui.inputHeader>
                    <InputField
                        key={id}
                        type={type}
                        placeholder={placeholder}
                        value={inputs[key]}
                        error={errors[key]}
                        disabled={isDisabled}
                        onChange={(e) => handleInputChange(key, e.target.value)}
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
