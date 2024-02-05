import VerificationForm from 'components/VerificationForm/VerificationForm'
import * as styleMui from './VerificationPage.styled'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function VerificationPage() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

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
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <VerificationForm />
                </styleMui.formContainer>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default VerificationPage
