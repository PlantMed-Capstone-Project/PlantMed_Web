import BadgeIcon from '@mui/icons-material/Badge'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment, Link, Tabs } from '@mui/material'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import { FORM_REGISTER, VERIFY_CODE } from 'constants'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyEmail } from 'rest/api/auth'
import { createCookie } from 'utils/cookie'
import * as styleMui from './SignupForm.styled'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SignupForm({ setTypeUser, typeUser }) {
    const navigate = useNavigate()
    const { show } = useActions(snackbarAction)

    const handleChange = (event, newValue) => {
        setTypeUser(newValue)
    }

    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye((prevState) => !prevState)
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

    //Khai báo array các thuộc tính input
    const inputFields = [
        {
            id: 1,
            key: 'email',
            placeholder: 'Email',
            type: 'email',
            icon: <PersonIcon sx={iconStyle} />,
        },
        {
            id: 2,
            key: 'lastName',
            placeholder: 'Họ',
            type: 'text',
            icon: <BadgeIcon sx={iconStyle} />,
        },
        {
            id: 3,
            key: 'firstName',
            placeholder: 'Tên',
            type: 'text',
            icon: <BadgeIcon sx={iconStyle} />,
        },
        {
            id: 4,
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
            id: 5,
            key: 'confirmPassword',
            placeholder: 'Xác thực mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={iconStyle} />,
        },
    ]

    //Khai báo array các validation
    const validationRules = [
        {
            field: 'email',
            message: 'Email không hợp lệ',
            // eslint-disable-next-line no-useless-escape
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

    //Khai báo array các tab
    const nabItem = [
        {
            id: 1,
            label: 'người dùng',
            link: '/',
        },
        {
            id: 2,
            label: 'chuyên gia',
            link: '/',
        },
    ]

    //Khai báo input
    const renderInputs = () => {
        return inputFields.map((item) => (
            <styleMui.Input
                key={item.id}
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

    //Check validation
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

    // handle registration account
    const onSubmit = async () => {
        try {
            show({
                message: 'Vui long chờ trong giây lát',
                autoHideDuration: 2000,
            })
            const response = await verifyEmail({ email: inputs.email })
            const data = {
                email: inputs.email,
                password: inputs.password,
                confirmPassword: inputs.confirmPassword,
                fullName: inputs.lastName + ' ' + inputs.firstName,
                role: typeUser === 'người dùng' ? 'user' : 'expert',
            }
            createCookie(VERIFY_CODE, JSON.stringify(response.data.data))
            createCookie(FORM_REGISTER, JSON.stringify(data))
            clearInput()
            return navigate('/verification')
        } catch (error) {
            show({
                message:
                    error.response.data.message ??
                    'Lỗi hệ thống! Vui lòng thử lại sau!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    return (
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
                    '& .Mui-selected': {
                        color: '#69AD28 !important',
                    },
                }}
            >
                {nabItem?.map((item) => (
                    <styleMui.typeUserTab
                        component={Link}
                        to={item.link}
                        key={item.id}
                        label={item.label}
                        value={item.label}
                    />
                ))}
            </Tabs>
            <styleMui.inputPlace>{renderInputs()}</styleMui.inputPlace>
            <styleMui.policyPlace
                control={
                    <styleMui.Check
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
            <styleMui.button variant="contained" onClick={() => onValidate()}>
                Đăng ký
            </styleMui.button>
            <styleMui.link to="/login" underline="hover">
                Đăng nhập
            </styleMui.link>
        </styleMui.Form>
    )
}
