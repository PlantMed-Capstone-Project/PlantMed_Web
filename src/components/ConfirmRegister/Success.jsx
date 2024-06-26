import { motion } from 'framer-motion'
import * as styleMui from './ConfirmRegister.styled'
import successImage from 'Images/success_verification.png'
import { useNavigate } from 'react-router-dom'

export const VerifySuccess = () => {
    const navigate = useNavigate()

    const gotoLogin = () => {
        navigate('/login')
    }

    return (
        <styleMui.verifyContainer>
            <styleMui.Title color={'#3498db'}>
                Xác nhận đăng ký tài khoản thành công
            </styleMui.Title>
            <styleMui.verifyImageBg verifyImage={successImage} />
            <styleMui.btn
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => gotoLogin()}
                isSuccess
            >
                Quay về trang đăng nhập
            </styleMui.btn>
        </styleMui.verifyContainer>
    )
}
