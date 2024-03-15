import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from 'components/InputField'
import * as styleMui from './Profile.styled'
import { validateInputs } from 'components/InputField/validationRules'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import EditIcon from '@mui/icons-material/Edit'

export const ProfileForm = ({
    username,
    email,
    createdDate,
    role,
    password,
}) => {
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
            type: 'text',
            header: 'Tên Người Dùng',
            placeholder: 'Tên người dùng',
            key: 'username',
            isDisabled: false,
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
        {
            id: 5,
            type: eye ? 'text' : 'password',
            header: 'Mật Khẩu',
            key: 'password',
            icon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
            isDisabled: true,
        },
    ]

    const [inputs, setInputs] = useState({
        username: username || '',
        email: email,
        createdDate: createdDate,
        role: role,
        password: password,
    })

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const renderHeaders = ({ id, header }) => {
        return <styleMui.inputHeader key={id}>{header}</styleMui.inputHeader>
    }

    const renderInputs = ({ id, type, key, placeholder, icon, isDisabled }) => {
        return (
            <InputField
                key={id}
                type={type}
                placeholder={placeholder}
                eyeIcon={icon}
                value={inputs[key]}
                error={errors[key]}
                disabled={isDisabled}
                onChange={(e) => handleInputChange(key, e.target.value)}
                helperText={
                    <styleMui.helperTextStyle>
                        {errors[key]}
                    </styleMui.helperTextStyle>
                }
            />
        )
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

    const handleOnSubmit = () => {
        return navigate('/profile')
    }

    const buttons = [
        {
            id: 1,
            value: 'Thay đổi',
            width: '7rem',
            onClick: onValidate,
        },
        {
            id: 2,
            value: 'Hủy thay đổi',
            width: '8rem',
            onClickEvent: {},
        },
        {
            id: 3,
            value: 'Đổi mật khẩu',
            width: '8rem',
            nav: '/reset-password',
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
        <styleMui.profilePlace>
            <styleMui.infoPlace>
                <styleMui.profileFormContainer>
                    <styleMui.Title variant="h2">
                        Thông tin người dùng
                    </styleMui.Title>
                    <styleMui.inputPlace>
                        <styleMui.hearderContainer>
                            {editFields.map((obj) => {
                                if (obj.id !== 5) {
                                    return renderHeaders({ ...obj })
                                }
                                return null
                            })}
                        </styleMui.hearderContainer>
                        <styleMui.inputContainer>
                            {editFields.map((obj) => {
                                if (obj.id !== 5) {
                                    return renderInputs({ ...obj })
                                }
                                return null
                            })}
                        </styleMui.inputContainer>
                    </styleMui.inputPlace>
                </styleMui.profileFormContainer>
                <styleMui.buttonInfoContainer>
                    {buttons.map((obj) => {
                        if (obj.id !== 3) {
                            return renderButtons({ ...obj })
                        }
                        return null
                    })}
                </styleMui.buttonInfoContainer>
            </styleMui.infoPlace>
            <styleMui.accountPlace>
                <styleMui.profileFormContainer>
                    <styleMui.Title variant="h2">
                        Tài khoản cá nhân
                    </styleMui.Title>
                    <styleMui.inputPlace>
                        <styleMui.hearderContainer>
                            {editFields.map((obj) => {
                                if (obj.id === 5) {
                                    return renderHeaders({ ...obj })
                                }
                                return null
                            })}
                        </styleMui.hearderContainer>
                        <styleMui.inputContainer>
                            {editFields.map((obj) => {
                                if (obj.id === 5) {
                                    return renderInputs({ ...obj })
                                }
                                return null
                            })}
                        </styleMui.inputContainer>
                    </styleMui.inputPlace>
                </styleMui.profileFormContainer>
                <styleMui.buttonAccountContainer>
                    {buttons.map((obj) => {
                        if (obj.id === 3) {
                            return renderButtons({ ...obj })
                        }
                        return null
                    })}
                </styleMui.buttonAccountContainer>
            </styleMui.accountPlace>
        </styleMui.profilePlace>
    )
}
