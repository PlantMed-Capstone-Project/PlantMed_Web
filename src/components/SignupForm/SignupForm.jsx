import BadgeIcon from '@mui/icons-material/Badge'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Checkbox, IconButton, InputAdornment, Link, Tabs } from '@mui/material'
import { useState } from 'react'
import * as styleMui from './SignupForm.styled'
import { redirect } from 'react-router-dom'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SignupForm({ setTypeUser, typeUser }) {
    const handleChange = (event, newValue) => {
        setTypeUser(newValue)
    }

    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    const [errors, setErrors] = useState({})

    const [inputs, setInputs] = useState({
        email: '',
        lastName: '',
        firstName: '',
        password: '',
        confirmPassword: '',
        policyCheck: false,
    })

    //khai báo array các thuộc tính input
    const inputFields = [
        {
            key: 'email',
            placeholder: 'Email',
            type: 'text',
            icon: <PersonIcon sx={iconStyle} />,
        },
        {
            key: 'lastName',
            placeholder: 'Họ',
            type: 'text',
            icon: <BadgeIcon sx={iconStyle} />,
        },
        {
            key: 'firstName',
            placeholder: 'Tên',
            type: 'text',
            icon: <BadgeIcon sx={iconStyle} />,
        },
        {
            key: 'password',
            placeholder: 'Mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={iconStyle} />,
            eyeIcon: (
                <IconButton onClick={handleEye}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
        {
            key: 'confirmPassword',
            placeholder: 'Xác thực mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={iconStyle} />,
        },
    ]

    //khai báo array các validation
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
        {
            field: 'lastName',
            message: 'Vui lòng nhập họ',
        },
        {
            field: 'firstName',
            message: 'Vui lòng nhập tên',
        },
        {
            field: 'password',
            message: 'Mật khẩu không được dưới 5 ký tự',
            minLength: 5,
        },
        {
            field: 'password',
            message: 'Vui lòng nhập mật khẩu',
        },
        {
            field: 'confirmPassword',
            message: 'Mật khẩu xác thực không trùng khớp',
            compareField: 'password',
        },
        {
            field: 'policyCheck',
            message: 'Phải chấn nhận với điều khoản trước khi đăng ký',
            isCheck: false,
        },
    ]

    //khai báo array các tab
    const nabItem = [
        {
            label: 'người dùng',
            link: '/',
        },
        {
            label: 'chuyên gia',
            link: '/',
        },
    ]

    //khai báo input
    const renderInputs = () => {
        return inputFields.map((item, indx) => (
            <styleMui.Input
                key={indx}
                placeholder={item.placeholder}
                size="small"
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                helperText={errors[item.key]}
                margin="dense"
                type={item.type}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {item.icon}
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {item.eyeIcon}
                        </InputAdornment>
                    ),
                }}
            />
        ))
    }

    //check validation
    const onValidate = () => {
        setErrors({})
        let isValid = true

        validationRules.forEach(
            ({ field, message, regex, minLength, compareField, isCheck }) => {
                if (
                    !inputs[field] ||
                    (regex && !inputs[field].match(regex)) ||
                    (minLength && inputs[field].length < minLength) ||
                    (compareField && inputs[field] !== inputs[compareField]) ||
                    (isCheck && !inputs.policyCheck)
                ) {
                    isValid = false
                    handleError(message, field)
                }
            }
        )

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

    const handleCheckboxChange = (e) => {
        handleInputChange('policyCheck', e.target.checked)
    }

    const clearInput = () => {
        setInputs({
            email: '',
            lastName: '',
            firstName: '',
            password: '',
            confirmPassword: '',
        })
    }

    const onSubmit = () => {
        clearInput()
        return redirect('/login')
    }

    return (
        <styleMui.container>
            <styleMui.Form>
                <styleMui.signupTitle variant="h5" align="center">
                    Đăng ký
                </styleMui.signupTitle>
                <Tabs
                    value={typeUser}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: { backgroundColor: '#69AD28' },
                    }}
                    sx={{
                        marginLeft: '4rem',
                        '& .Mui-selected': {
                            color: '#69AD28 !important',
                        },
                    }}
                >
                    {nabItem?.map((item, idx) => (
                        <styleMui.typeUserTab
                            component={Link}
                            to={item.link}
                            key={idx}
                            label={item.label}
                            value={item.label}
                        />
                    ))}
                </Tabs>
                <styleMui.inputPlace>{renderInputs()}</styleMui.inputPlace>
                <styleMui.policyPlace
                    control={
                        <Checkbox
                            checked={inputs.policyCheck}
                            onChange={handleCheckboxChange}
                            value="policyCheck"
                        />
                    }
                    label={
                        <styleMui.policy>
                            Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính
                            sách quyền riêng tư của chúng tôi.
                        </styleMui.policy>
                    }
                />
                {errors.policyCheck && (
                    <styleMui.policyCheck>
                        {errors.policyCheck}
                    </styleMui.policyCheck>
                )}
                <styleMui.button
                    variant="contained"
                    onClick={() => onValidate()}
                >
                    Đăng ký
                </styleMui.button>
                <styleMui.link href="/login" underline="hover">
                    Đăng nhập
                </styleMui.link>
            </styleMui.Form>
        </styleMui.container>
    )
}
