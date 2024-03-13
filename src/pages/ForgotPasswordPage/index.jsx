import ForgotPasswordForm from 'components/ForgotPassword'
import * as styleMui from './ForgotPasswordPage.styled'
import { motion } from 'framer-motion'
import useScrollTo from 'hooks/useScrollTo'

function ForgotPasswordPage() {
    //trigger crollY
    useScrollTo(0, 100)

    return (
        <styleMui.container>
            <styleMui.Background>
                <styleMui.arrangeContainer
                    component={motion.div}
                    initial={{ opacity: 0, x: '30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.contentPlace>
                        <styleMui.Title variant="h5">
                            CHÀO MỪNG <br />
                            TRỞ LẠI VỚI PLANTMED
                        </styleMui.Title>
                        <styleMui.Note>
                            Đây là trang dùng để lấy lại mật khẩu khi
                            <br />
                            đã có tài khoản tại PLANTMED
                        </styleMui.Note>
                    </styleMui.contentPlace>
                </styleMui.arrangeContainer>
                <styleMui.formContainer
                    component={motion.div}
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <ForgotPasswordForm />
                </styleMui.formContainer>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default ForgotPasswordPage
