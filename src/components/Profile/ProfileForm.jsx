import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from 'components/InputField'
import * as styleMui from './Profile.styled'
import { validateInputs } from 'components/InputField/validationRules'
import EditIcon from '@mui/icons-material/Edit'

export const ProfileForm = ({
    userInfo,
    onUpdateInfo,
    handleEditButtonClick,
    isDisabled,
}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [inputs, setInputs] = useState({
        fullname: userInfo?.FullName,
        email: userInfo?.Email,
        createdDate: userInfo?.Date,
        role:
            userInfo?.Role === 'user'
                ? 'Người Dùng'
                : 'Chuyên Gia Về Cây Thuốc',
    })
    const [displayButtons, setDisplayButtons] = useState(1)

    const onSwitch = (buttonSet) => {
        if (buttonSet === 1) {
            setDisplayButtons(2)
            handleEditButtonClick()
        } else {
            setDisplayButtons(1)
            isDisabled(true)
        }
    }

    const handleInputChange = (key, value) =>
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))

    const renderHeaders = (obj) => (
        <styleMui.inputHeader key={obj.id}>{obj.header}</styleMui.inputHeader>
    )

    const renderInputs = (obj) => (
        <InputField
            key={obj.id}
            type={obj.type}
            placeholder={obj.placeholder}
            eyeIcon={!isDisabled ? obj.icon : null}
            value={inputs[obj.key]}
            error={errors[obj.key]}
            disabled={obj.isDisabled}
            onChange={(e) => handleInputChange(obj.key, e.target.value)}
            helperText={
                <styleMui.helperTextStyle>
                    {errors[obj.key]}
                </styleMui.helperTextStyle>
            }
        />
    )

    const onValidate = () => {
        const inputErrors = validateInputs(inputs)
        if (Object.keys(inputErrors).length > 0) setErrors(inputErrors)
        else {
            setErrors({})
            handleOnSubmit()
        }
    }

    const handleOnSubmit = () => {
        onUpdateInfo({ FullName: inputs.fullname })
        onSwitch(2)
        return navigate('/profile')
    }

    const buttonsSet1 = [
        {
            id: 1,
            value: 'Thay đổi',
            width: '7rem',
            onClick: () => onSwitch(1),
        },
        {
            id: 2,
            value: 'Hủy thay đổi',
            width: '8rem',
            onClick: () => onSwitch(2),
        },
        { id: 3, value: 'Đổi mật khẩu', width: '8rem', nav: '/reset-password' },
    ]

    const buttonsSet2 = [
        { id: 1, value: 'Lưu thông tin', width: '8rem', onClick: onValidate },
        {
            id: 2,
            value: 'Hủy thay đổi',
            width: '8rem',
            onClick: () => onSwitch(2),
        },
        { id: 3, value: 'Đổi mật khẩu', width: '8rem', nav: '/reset-password' },
    ]

    const renderButtons = (obj) => (
        <styleMui.button
            component={Link}
            key={obj.id}
            onClick={obj.onClick}
            width={obj.width}
            to={obj.nav}
        >
            {obj.value}
        </styleMui.button>
    )

    const editFields = [
        {
            id: 1,
            type: 'text',
            header: 'Tên Người Dùng',
            placeholder: 'Tên người dùng',
            key: 'fullname',
            isDisabled: isDisabled,
            icon: <EditIcon sx={styleMui.editIconStyle} />,
        },
        {
            id: 2,
            type: 'text',
            header: 'Email',
            key: 'email',
            isDisabled: true,
        },
        {
            id: 3,
            type: 'text',
            header: 'Ngày Tạo Tài Khoản',
            key: 'createdDate',
            isDisabled: true,
        },
        {
            id: 4,
            type: 'text',
            header: 'Chức Nghiệp',
            key: 'role',
            isDisabled: true,
        },
    ]

    return (
        <styleMui.profilePlace>
            <styleMui.profileContainer>
                <styleMui.Title variant="h2">
                    Thông tin người dùng
                </styleMui.Title>
                <styleMui.inputPlace>
                    <styleMui.hearderContainer>
                        {editFields.map(renderHeaders)}
                    </styleMui.hearderContainer>
                    <styleMui.inputContainer>
                        {editFields.map(renderInputs)}
                    </styleMui.inputContainer>
                </styleMui.inputPlace>
            </styleMui.profileContainer>
            <styleMui.buttonContainer>
                {displayButtons === 1
                    ? buttonsSet1.map(renderButtons)
                    : buttonsSet2.map(renderButtons)}
            </styleMui.buttonContainer>
        </styleMui.profilePlace>
    )
}
