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
            <styleMui.formContainer>
                {isVerified ? <VerifySuccess /> : <VerifyFailed />}
            </styleMui.formContainer>
        </styleMui.container>
    )
}

export default VerificationPage
