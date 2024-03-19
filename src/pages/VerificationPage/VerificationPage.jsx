import { motion } from 'framer-motion'
import * as styleMui from './VerificationPage.styled'
import { VerifySuccess, VerifyFailed } from 'components/ConfirmRegister'
import { useEffect, useState } from 'react'
import { verifyEmail } from 'rest/api/auth'

function VerificationPage() {
    const [isVerified, setIsVerified] = useState(false)

    async function verify() {
        try {
            await verifyEmail()
            setIsVerified(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        verify()
    }, [])

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
                    {isVerified ? <VerifySuccess /> : <VerifyFailed />}
                </styleMui.formContainer>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default VerificationPage
