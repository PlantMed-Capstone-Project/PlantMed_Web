import BadgeIcon from '@mui/icons-material/Badge'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
    Checkbox,
    IconButton,
    InputAdornment,
    Link,
    Tab,
    Tabs,
} from '@mui/material'
import { useState } from 'react'
import * as styleMui from './SignupForm.styled'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

const passValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export default function SignupForm({ setTypeUser, typeUser }) {
    const handleChange = (event, newValue) => {
        setTypeUser(newValue)
    }

    //Bắt lỗi input
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('')
    const [emailErrorText, setEmailErrorText] = useState('')
    const [firstNameErrorText, setFirstNameErrorText] = useState('')
    const [lastNameErrorText, setLastNameErrorText] = useState('')
    const [passwordErrorText, setPasswordErrorText] = useState('')
    const [reEnterPasswordErrorText, setReEnterPasswordErrorText] = useState('')
    const [isTrue, setIsTrue] = useState(false)
    const [isTrueErrorText, setIsTrueErrorText] = useState('')

    //Chuyển trạng thái nhìn thấy mật khẩu
    const [eye, setEye] = useState(false)
    const handleEye = () => {
        setEye(!eye)
    }

    //Bắt lỗi trước khi submit
    const onSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            setEmailErrorText('Vui lòng nhập email')
        } else if (!email.match(emailValidation)) {
            setEmailErrorText('Email không hợp lệ')
        } else {
            setEmailErrorText('')
        }
        if (!firstName) {
            setFirstNameErrorText('Vui lòng nhập tên')
        } else {
            setFirstNameErrorText('')
        }
        if (!lastName) {
            setLastNameErrorText('Vui lòng nhập họ')
        } else {
            setLastNameErrorText('')
        }
        if (!password) {
            setPasswordErrorText('Vui lòng nhập mật khẩu')
        } else if (!password.match(passValidation)) {
            setPasswordErrorText(
                'Mật khẩu phải từ 6-15 ký tự, trong đó có ít nhất một chữ số, một chữ hoa, một chữ thường và một ký tự đặc biệt'
            )
        } else {
            setPasswordErrorText('')
        }
        if (!reEnterPassword) {
            setReEnterPasswordErrorText('Vui lòng xác thực mật khẩu')
        } else if (reEnterPassword !== password) {
            setReEnterPasswordErrorText('Mật khẩu xác thực không trùng khớp')
        } else {
            setReEnterPasswordErrorText('')
        }

        if (!isTrue) {
            setIsTrueErrorText(
                'Phải chấn nhận với điều khoản trước khi đăng ký'
            )
        } else {
            setIsTrueErrorText('')
        }
    }

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
                        <Tab
                            component={Link}
                            to={item.link}
                            key={idx}
                            label={item.label}
                            value={item.label}
                            sx={{
                                color: '#214400',
                                fontWeight: '700',
                                width: '8.5rem',
                            }}
                        />
                    ))}
                </Tabs>
                <styleMui.inputPlace>
                    <styleMui.Input
                        placeholder="Email"
                        size="small"
                        style={{ width: 280 }}
                        required
                        autoComplete="email"
                        autoFocus
                        value={email}
                        error={!!emailErrorText}
                        helperText={emailErrorText}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="dense"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon sx={iconStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <styleMui.Input
                        placeholder="Họ"
                        size="small"
                        style={{ width: 280 }}
                        required
                        autoComplete="lastName"
                        autoFocus
                        value={lastName}
                        error={!!lastNameErrorText}
                        helperText={lastNameErrorText}
                        onChange={(e) => setLastName(e.target.value)}
                        margin="dense"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeIcon sx={iconStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <styleMui.Input
                        placeholder="Tên"
                        size="small"
                        style={{ width: 280 }}
                        required
                        autoFocus
                        value={firstName}
                        error={!!firstNameErrorText}
                        helperText={firstNameErrorText}
                        onChange={(e) => setFirstName(e.target.value)}
                        margin="dense"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BadgeIcon sx={iconStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <styleMui.Input
                        placeholder="Mật khẩu"
                        size="small"
                        style={{ width: 280 }}
                        required
                        autoFocus
                        value={password}
                        error={!!passwordErrorText}
                        helperText={passwordErrorText}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="dense"
                        type={eye ? 'text' : 'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRoundedIcon sx={iconStyle} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleEye}>
                                        {eye ? (
                                            <VisibilityIcon />
                                        ) : (
                                            <VisibilityOffIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <styleMui.Input
                        placeholder="Xác thực mật khẩu"
                        size="small"
                        style={{ width: 280 }}
                        required
                        autoFocus
                        value={reEnterPassword}
                        error={!!reEnterPasswordErrorText}
                        helperText={reEnterPasswordErrorText}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                        margin="dense"
                        type={eye ? 'text' : 'password'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRoundedIcon sx={iconStyle} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </styleMui.inputPlace>
                <styleMui.policyPlace
                    control={
                        <Checkbox
                            value="checkPolicy"
                            checked={isTrue}
                            onChange={(e) => setIsTrue(e.target.checked)}
                        />
                    }
                    label={
                        <styleMui.policy>
                            Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính
                            sách quyền riêng tư của chúng tôi.
                        </styleMui.policy>
                    }
                />
                <styleMui.policyCheck>{isTrueErrorText}</styleMui.policyCheck>
                <styleMui.button variant="contained" onClick={onSubmit}>
                    Đăng ký
                </styleMui.button>
                <styleMui.link href="/login" underline="hover">
                    Đăng nhập
                </styleMui.link>
            </styleMui.Form>
        </styleMui.container>
    )
}
