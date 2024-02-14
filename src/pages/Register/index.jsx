import { motion } from 'framer-motion'
import useScrollTo from 'hooks/useScrollTo'
import { useState } from 'react'
import * as styleMui from './SignupPage.styled'
import RegisterForm from 'components/RegisterForm'

function Register() {
    const [typeUser, setTypeUser] = useState('người dùng')

    //trigger scrollY
    useScrollTo(0, 100)

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
                    <RegisterForm
                        setTypeUser={setTypeUser}
                        typeUser={typeUser}
                    />
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

export default Register
