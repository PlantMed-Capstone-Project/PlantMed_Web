import BadgeIcon from '@mui/icons-material/Badge'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button, IconButton, Link, Tabs } from '@mui/material'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import { imgDb } from 'firebase.js'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from 'rest/api/auth'
import { v4 } from 'uuid'
import * as styleMui from './SignupForm.styled'
import { Typography, Box } from '@mui/material'

export default function RegisterForm({ setTypeUser, typeUser, setValidPdf }) {
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
    const [certificate, setCertificate] = useState([])

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
        return (
            <>
                {inputFields.map((item) => (
                    <InputField
                        key={item.id}
                        type={item.type}
                        icon={item.icon}
                        eyeIcon={item.eyeIcon}
                        handleEye={handleEye}
                        placeholder={item.placeholder}
                        value={inputs[item.key]}
                        error={errors[item.key]}
                        onChange={(e) =>
                            handleInputChange(item.key, e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        helperText={errors[item.key]}
                    />
                ))}
            </>
        )
    }

    //Hàm này kiểm tra khi file change được đưa vào có đúng định dạng hay không ?
    const handleSelectedFile = (event) => {
        const filesFormats = ['application/pdf']
        const files = Array.from(event.target.files)

        if (files.length > 2 || files.length === 0) {
            show({
                message: 'Cần có ít nhất 1 ảnh chứng chỉ, và tối đa là 2 ảnh',
                severity: SNACKBAR_SEVERITY.WARNING,
            })
            return
        } else if (files.length === 1) {
            if (filesFormats.includes(files[0].type)) {
                setCertificate(files)
            } else {
                setCertificate([])
                show({
                    message: 'Chỉ nhận định dạng PDF',
                    severity: SNACKBAR_SEVERITY.WARNING,
                })
                return
            }
        } else if (files.length === 2) {
            if (
                filesFormats.includes(files[0].type) &&
                filesFormats.includes(files[1].type)
            ) {
                setCertificate(files)
            } else {
                setCertificate([])
                show({
                    message: 'Chỉ nhận định dạng PDF',
                    severity: SNACKBAR_SEVERITY.WARNING,
                })
                return
            }
        }
    }

    // Hàm được gọi khi role đăng ký là expert
    const renderInputExpert = () => {
        return (
            <>
                {inputFields.map((item) => (
                    <InputField
                        key={item.id}
                        type={item.type}
                        icon={item.icon}
                        eyeIcon={item.eyeIcon}
                        handleEye={handleEye}
                        placeholder={item.placeholder}
                        value={inputs[item.key]}
                        error={errors[item.key]}
                        onChange={(e) =>
                            handleInputChange(item.key, e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        helperText={errors[item.key]}
                    />
                ))}

                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.7rem',
                    }}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        color="secondary"
                        component="label"
                        fullWidth
                        sx={{
                            backgroundColor: '#69AD28',
                            borderRadius: '0.625rem',
                            '&:hover': {
                                backgroundColor: '#69AD28',
                            },
                        }}
                    >
                        Tải lên chứng chỉ
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleSelectedFile}
                            hidden
                            multiple
                        />
                    </Button>
                    <Box sx={{ display: 'flex', width: '100%', gap: '0.4rem' }}>
                        {certificate.length > 0 &&
                            certificate.map((val, idx) => (
                                <Typography
                                    key={idx}
                                    sx={{ fontSize: '0.6rem' }}
                                    variant="caption"
                                >
                                    {val.name}
                                </Typography>
                            ))}
                    </Box>
                </form>
            </>
        )
    }

    //Check validation
    const onValidate = () => {
        const inputErrors = validateInputs(inputs)
        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors)
            setValidPdf(() => false)
        } else {
            setErrors({})
            if (typeUser === 'người dùng') {
                onSubmit()
            } else submmitFireBase()
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

    // Hàm xử lý trên fireBase
    const submmitFireBase = () => {
        if (certificate.length === 0) {
            setValidPdf(() => false)
            show({
                message: 'Cần có ít nhất 1 ảnh chứng chỉ, và tối đa là 2 ảnh',
                severity: SNACKBAR_SEVERITY.WARNING,
            })
            return
        }

        const uploadPromises = []
        certificate.forEach((vl) => {
            const imgs = ref(imgDb, `ImgsExpert/${v4()}`)
            const uploadPromise = uploadBytes(imgs, vl)
                .then((data) => getDownloadURL(data.ref))
                .then((val) => {
                    return val // Trả về URL download để sử dụng sau này
                })

            uploadPromises.push(uploadPromise) // Thêm promise vào mảng
        })
        Promise.all(uploadPromises)
            .then((data) => {
                onSubmitExpert(data)
            })
            .catch((error) => {
                console.error(error)
                // Xử lý lỗi nếu có
            })
        setValidPdf(() => true)
    }

    // Đăng ký của các chuyên gia
    const onSubmitExpert = async (dataFirebase) => {
        if (dataFirebase?.length === certificate?.length) {
            try {
                show({
                    message: 'Đang xử lý nhé!',
                    autoHideDuration: 3000,
                })
                const data = {
                    email: inputs.email,
                    password: inputs.password,
                    confirmPassword: inputs.confirmPassword,
                    fullName: inputs.lastName + ' ' + inputs.firstName,
                    role: 'expert',
                    type: 'web',
                    certificateList: dataFirebase,
                }
                await register(data)
                show({
                    message: 'Đã xử lý thành công, vui lòng đợi chờ được duyệt',
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
        } else {
            show({
                message: 'Vui lòng chờ trong giây lát',
                autoHideDuration: 3000,
            })
        }
    }

    // Đăng ký của người dùng bình thường
    const onSubmit = async () => {
        show({
            message: 'Vui lòng chờ trong giây lát',
            autoHideDuration: 2000,
        })
        try {
            const data = {
                email: inputs.email,
                password: inputs.password,
                confirmPassword: inputs.confirmPassword,
                fullName: inputs.lastName + ' ' + inputs.firstName,
                role: 'user',
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
            {typeUser === 'người dùng' ? (
                <styleMui.inputPlace>{renderInputs()} </styleMui.inputPlace>
            ) : (
                <styleMui.inputPlace>{renderInputExpert()}</styleMui.inputPlace>
            )}

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
