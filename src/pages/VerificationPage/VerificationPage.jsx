import { VerifyFailed, VerifySuccess } from 'components/ConfirmRegister'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { confirm } from 'rest/api/auth'
import * as styleMui from './VerificationPage.styled'

function VerificationPage() {
    const [isVerified, setIsVerified] = useState()
    // Vì không sử dụng hàm setSearchParams
    const searchParams = useSearchParams()[0]

    async function verify() {
        try {
            const email = searchParams.get('email')
            const code = searchParams.get('code')
            await confirm(email, code)
            setIsVerified(true)
        } catch (error) {
            console.log(error.message)
            setIsVerified(false)
        }
    }

    useEffect(() => {
        verify()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
