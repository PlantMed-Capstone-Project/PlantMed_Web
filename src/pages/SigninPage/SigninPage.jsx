import SigninForm from 'components/SigninForm/SigninForm'
import * as styleMui from './SigninPage.styled'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { saveScrollPosition, restoreScrollPosition } from 'utils/scrollUtils'
import { motion } from 'framer-motion'

function SigninPage() {
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
                <styleMui.arrangeContainer>
                    <motion.div
                        initial={{ opacity: 0, x: '30%' }}
                        animate={isScrolled ? { opacity: 1, x: '0%' } : {}}
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
                    </motion.div>
                </styleMui.arrangeContainer>
                <motion.div
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={isScrolled ? { opacity: 1, x: '0%' } : {}}
                    exit={{ opacity: 0, x: '30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.formContainer>
                        <SigninForm />
                    </styleMui.formContainer>
                </motion.div>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SigninPage
