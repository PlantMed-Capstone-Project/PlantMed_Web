import VerificationForm from 'components/VerificationForm/VerificationForm'
import * as styleMui from './VerificationPage.styled'

function VerificationPage() {
    return (
        <styleMui.container>
            <styleMui.Background>
                <VerificationForm/>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default VerificationPage
