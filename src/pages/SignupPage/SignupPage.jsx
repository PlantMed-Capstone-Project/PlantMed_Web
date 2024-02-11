import SignupForm from 'components/SignupForm/SignupForm'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import * as styleMui from './SignupPage.styled'

function SignupPage() {
    const location = useLocation()
    const searchParams = useMemo(() => {
        return new URLSearchParams(location.search)
    }, [location.search])

    const [typeUser, setTypeUser] = useState('người dùng')

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
                <styleMui.formContainer
                    component={motion.div}
                    initial={{ opacity: 0, x: '30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <SignupForm setTypeUser={setTypeUser} typeUser={typeUser} />
                </styleMui.formContainer>
                <styleMui.containerTxt
                    component={motion.div}
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.containsTitle>
                        <styleMui.Title>
                            CHÀO MỪNG <br />
                            BẠN ĐẾN VỚI PLANTMED
                        </styleMui.Title>
                        <styleMui.subTitle>
                            Đây là trang đăng ký dành cho {typeUser}
                        </styleMui.subTitle>
                    </styleMui.containsTitle>
                </styleMui.containerTxt>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SignupPage
