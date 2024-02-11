import SigninForm from 'components/SigninForm/SigninForm'
import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import * as styleMui from './SigninPage.styled'

function SigninPage() {
    const location = useLocation()
    const searchParams = useMemo(() => {
        return new URLSearchParams(location.search)
    }, [location.search])

    //trigger animation khi scrollY
    useEffect(() => {
        let checkNav = true

        if (checkNav) {
            window.scrollTo(0, 100)
        }

        // clean up func
        return () => {
            checkNav = false
        }
    }, [searchParams])

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
                            Đây là trang đăng nhập dành cho cá nhân
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
                    <SigninForm />
                </styleMui.formContainer>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SigninPage
