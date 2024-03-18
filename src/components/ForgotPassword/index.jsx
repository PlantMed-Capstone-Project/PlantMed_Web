import PersonIcon from '@mui/icons-material/Person'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './ForgotPasswordForm.styled'

export default function ForgotPasswordForm() {
    // const { show } = useActions(snackbarAction)
    const sampleEmail = 'Qiqi123@gmail.com'
    const navigate = useNavigate()

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
        try {
            /*
            show({
                message: 'Vui lòng đợi giấy lát!',
                autoHideDuration: 500,
            })
            const response = await authLogin(inputs)
            login(response.data)
            show({
                message: 'Đăng nhập thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            */
            if (inputs.email === sampleEmail) {
                clearInput()
                return navigate('/login')
            }
        } catch (error) {
            /*
            loginFailure(error.response.data.message)
            show({
                message: error.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
            */
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
                >
                    Nhận mã
                </styleMui.button>
                <styleMui.link to="/login" underline="hover">
                    Quay lại đăng nhập
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
