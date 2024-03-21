import PersonIcon from '@mui/icons-material/Person'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './ForgotPasswordForm.styled'
import { forgotPassword } from 'rest/api/auth'
import useActions from 'hooks/useActions'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'

export default function ForgotPasswordForm() {
    const navigate = useNavigate()
    const { show } = useActions(snackbarAction)

    const [errors, setErrors] = useState({})
    const [inputs, setInputs] = useState({
        email: '',
    })

    const inputFields = [
        {
            key: 'email',
            placeholder: 'Email',
            type: 'email',
            icon: <PersonIcon sx={styleMui.iconStyle} />,
        },
    ]

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

    const handleInputChange = (key, value) => {
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))
    }

    const clearInput = () => {
        setInputs({
            email: '',
        })
    }

    const onSubmit = async () => {
        show({ message: 'Vui lòng chờ trong giây lát!' })
        try {
            await forgotPassword({ email: inputs.email })
            show({
                message: 'Vui lòng kiểm tra email!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            clearInput()
            navigate('/login')
        } catch (error) {
            console.log('error:', error)
            show({
                message: 'Email không chính xác!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onValidate()
            e.preventDefault()
        }
    }

    //Khai báo input
    const renderInputs = (inputFields) => {
        return inputFields.map((item) => (
            <InputField
                key={item.id}
                type={item.type}
                icon={item.icon}
                placeholder={item.placeholder}
                value={inputs[item.key]}
                error={errors[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
                helperText={errors[item.key]}
                onKeyDown={handleEnter}
            />
        ))
    }

    return (
        <styleMui.Form>
            <styleMui.forgotPassTitle variant="h5" align="center">
                Quên mật khẩu ?
            </styleMui.forgotPassTitle>
            <styleMui.containerInput>
                <styleMui.Note>Nhập email để nhận mật khẩu mới</styleMui.Note>
                {/* Start input place */}
                <styleMui.inputPlace>
                    {renderInputs(inputFields)}
                </styleMui.inputPlace>
                {/* End input place */}
            </styleMui.containerInput>
            <styleMui.navPlace>
                <styleMui.button
                    variant="contained"
                    onClick={() => onValidate()}
                    onKeyDown={handleEnter}
                >
                    Xác Nhận
                </styleMui.button>
                <styleMui.link to="/login" underline="hover">
                    Quay lại đăng nhập
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
