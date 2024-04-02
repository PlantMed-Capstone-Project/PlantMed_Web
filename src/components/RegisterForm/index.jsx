import BadgeIcon from '@mui/icons-material/Badge'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, Link, Tabs } from '@mui/material'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from 'rest/api/auth'
import * as styleMui from './SignupForm.styled'

export default function RegisterForm({ setTypeUser, typeUser }) {
    const navigate = useNavigate()
    const { show } = useActions(snackbarAction)

    const handleChange = (_, newValue) => {
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
            icon: <PersonIcon sx={styleMui.iconStyle} />,
        },
        {
            id: 2,
            key: 'lastName',
            placeholder: 'Họ',
            type: 'text',
            icon: <BadgeIcon sx={styleMui.iconStyle} />,
        },
        {
            id: 3,
            key: 'firstName',
            placeholder: 'Tên',
            type: 'text',
            icon: <BadgeIcon sx={styleMui.iconStyle} />,
        },
        {
            id: 4,
            key: 'password',
            placeholder: 'Mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={styleMui.iconStyle} />,
            eyeIcon: (
                <IconButton onClick={handleEye} tabIndex={-1}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            ),
        },
        {
            id: 5,
            key: 'confirmPassword',
            placeholder: 'Xác thực mật khẩu',
            type: eye ? 'text' : 'password',
            icon: <LockRoundedIcon sx={styleMui.iconStyle} />,
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
            <InputField
                key={item.id}
                type={item.type}
                icon={item.icon}
                eyeIcon={item.eyeIcon}
                handleEye={handleEye}
                placeholder={item.placeholder}
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                onKeyDown={handleKeyDown}
                helperText={errors[item.key]}
            />
        ))
    }

    //Check validation
    const onValidate = () => {
        const inputErrors = validateInputs(inputs)

        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors)
        } else {
            setErrors({})
            onSubmit()
        }
    }

    //Nhận event khi onKeyDown để validate
    const handleKeyDown = (event) => {
        //Nhấp Enter để validate
        if (event.key === 'Enter') {
            onValidate()
        }
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
                message: 'Vui lòng chờ trong giây lát',
                autoHideDuration: 2000,
            })
            const data = {
                email: inputs.email,
                password: inputs.password,
                confirmPassword: inputs.confirmPassword,
                fullName: inputs.lastName + ' ' + inputs.firstName,
                role: typeUser === 'người dùng' ? 'user' : 'expert',
                type: 'web',
            }
            const res = await register(data)
            show({
                message: res.data.message,
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            clearInput()
            navigate('/login')
        } catch (error) {
            show({
                message: error.response.data.message,
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
                        sách quyền riêng tư.
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
