import { useNavigate } from 'react-router-dom'
import * as styleMui from './ConfirmRegister.styled'
import failedImage from 'Images/deny_verification.png'
import { motion } from 'framer-motion'

export const VerifyFailed = () => {
    const navigate = useNavigate()

    const gotoLoginPage = () => {
        navigate({
            pathname: '/login',
        })
    }

    return (
        <styleMui.verifyContainer>
            <styleMui.Title color={'#d51b21'}>
                Xác nhận đăng ký tài khoản thất bại
            </styleMui.Title>            
            <styleMui.verifyImageBg verifyImage={failedImage} />
            <styleMui.btn
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => gotoLoginPage()}
            >
                Quay về trang đăng nhập
            </styleMui.btn>
        </styleMui.verifyContainer>
    )
}
