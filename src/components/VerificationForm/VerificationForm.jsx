import { useState } from 'react'
import * as styleMui from './VerificationForm.styled'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { useNavigate } from 'react-router-dom'

export default function VerificationForm() {
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    //Test validation
    let otpCode = 1234

    const onValidate = () => {
        let isValid = true
        let error = ''

        if (!otp) {
            isValid = false
            error = 'Vui lòng nhập mã xác nhận'
        } else if (otp !== otpCode.toString()) {
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

    const onSubmit = () => {
        return navigate('/login')
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
                    Chúng tôi đã gửi bạn mã xác nhận thông qua email mà bạn đã
                    đăng ký. Xin vui lòng kiểm tra và xác nhận tại đây
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
                <styleMui.button
                    variant="contained"
                    onClick={() => onValidate()}
                >
                    Xác nhận
                </styleMui.button>
                <styleMui.textContainer>
                    <styleMui.questionText>
                        Không nhận được mã?
                    </styleMui.questionText>
                    <styleMui.link href="/" underline="hover">
                        Gửi lại mã
                    </styleMui.link>
                </styleMui.textContainer>
            </styleMui.Form>
    )
}
