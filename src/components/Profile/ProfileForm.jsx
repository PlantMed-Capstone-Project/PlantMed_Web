import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './Profile.styled'

const ProfileForm = ({
    username,
    email,
    phone,
    isDisabled,
    onSubmitButtonClick,
    resetSidebarSelection,
}) => {
    const navigate = useNavigate()

    const editFields = [
        {
            id: 1,
            type: 'text',
            header: 'Tên hiển thị',
            key: 'username',
        },
        {
            id: 2,
            type: 'email',
            header: 'Email',
            key: 'email',
        },
        {
            id: 3,
            type: 'text',
            header: 'Số điện thoại',
            key: 'phone',
        },
    ]

    const [inputs, setInputs] = useState({
        username: username || '',
        email: email || '',
        phone: phone || '',
    })

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const renderInputs = ({ id, type, header, key }) => {
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
                />
            </styleMui.inputContainer>
        )
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
                onClick={handleOnSubmit}
            >
                Lưu thông tin
            </styleMui.button>
        </styleMui.profilePlace>
    )
}

export default ProfileForm
