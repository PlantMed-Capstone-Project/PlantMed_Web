import SignupForm from 'components/SignupForm/SignupForm'
import { useState } from 'react'
import * as styleMui from './SignupPage.styled'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { saveScrollPosition, restoreScrollPosition } from 'utils/scrollUtils'
import { motion } from 'framer-motion'

function SignupPage() {
    const [typeUser, setTypeUser] = useState('người dùng')
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)

    //trigger animation khi scrollY
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition >= 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            saveScrollPosition(location.pathname)
            restoreScrollPosition(location.pathname)
        }
    }, [location])

    return (
        <styleMui.container>
            <styleMui.Background>
                <motion.div
                    initial={{ opacity: 0, x: '30%' }}
                    animate={isScrolled ? { opacity: 1, x: '0%' } : {}}
                    exit={{ opacity: 0, x: '-30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.formContainer>
                        <SignupForm
                            setTypeUser={setTypeUser}
                            typeUser={typeUser}
                        />
                    </styleMui.formContainer>
                </motion.div>
                <styleMui.containerTxt>
                    <motion.div
                        initial={{ opacity: 0, x: '-30%' }}
                        animate={isScrolled ? { opacity: 1, x: '0%' } : {}}
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
                    </motion.div>
                </styleMui.containerTxt>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SignupPage
