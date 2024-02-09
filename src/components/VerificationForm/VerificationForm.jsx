import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import { FORM_REGISTER, VERIFY_CODE } from 'constants'
import useActions from 'hooks/useActions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register, verifyEmail } from 'rest/api/auth'
import { clearCookie, createCookie, readCookie } from 'utils/cookie'
import * as styleMui from './VerificationForm.styled'

export default function VerificationForm() {
    const { show } = useActions(snackbarAction)

    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    let otpCode = readCookie(VERIFY_CODE)
    let formData = readCookie(FORM_REGISTER)

    const onValidate = () => {
        let isValid = true
        let error = ''

        if (!otp) {
            isValid = false
            error = 'Vui lòng nhập mã xác nhận'
        } else if (JSON.stringify(otp) !== otpCode) {
            isValid = false
            error = 'Mã xác nhận không trùng khớp'
        }

        if (!isValid) {
            setError(error)
        } else {
            setError('')
            onSubmit()
        }
    }

    const onSubmit = async () => {
        try {
            show({
                message: 'Vui lòng chờ trong giấy lát!',
                autoHideDuration: 2000,
            })
            await register(JSON.parse(formData))
            clearCookie(VERIFY_CODE)
            clearCookie(FORM_REGISTER)
            show({
                message: 'Đăng ký thành công!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            return navigate('/login')
        } catch (error) {
            show({
                message: error.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    const reSend = async () => {
        try {
            show({
                message: 'Vui lòng chờ trong giấy lát!',
                autoHideDuration: 2500,
            })
            clearCookie(VERIFY_CODE)
            const form = JSON.parse(formData)
            const response = await verifyEmail({ email: form.email })
            createCookie(VERIFY_CODE, JSON.stringify(response.data.data))
            show({
                message: 'Đã gửi lại mã xác nhận, vui lòng kiểm tra email!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            show({
                message: error.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    return (
        <styleMui.Form>
            <CheckCircleOutlineIcon
                sx={{ color: '#69AD28', fontSize: '6rem' }}
            />
            <styleMui.verificationTitle variant="h5" align="center">
                Xác thực tài khoản
            </styleMui.verificationTitle>
            <styleMui.Note>
                Chúng tôi đã gửi bạn mã xác nhận thông qua email mà bạn đã đăng
                ký. Xin vui lòng kiểm tra và xác nhận tại đây
            </styleMui.Note>
            <styleMui.otpField
                value={otp}
                onChange={setOtp}
                OTPLength={4}
                otpType="number"
                disable={false}
                autoFocus
            />
            {error && <styleMui.otpCheck>{error}</styleMui.otpCheck>}
            <styleMui.button variant="contained" onClick={() => onValidate()}>
                Xác nhận
            </styleMui.button>
            <styleMui.textContainer>
                <styleMui.questionText>
                    Không nhận được mã?
                </styleMui.questionText>
                <styleMui.link
                    sx={{ cursor: 'pointer' }}
                    onClick={reSend}
                    underline="hover"
                >
                    Gửi lại mã
                </styleMui.link>
            </styleMui.textContainer>
        </styleMui.Form>
    )
}
