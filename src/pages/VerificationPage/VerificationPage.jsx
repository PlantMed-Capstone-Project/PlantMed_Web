import { motion } from 'framer-motion'
import useScrollTo from 'hooks/useScrollTo'
import * as styleMui from './VerificationPage.styled'
import { VerifySuccess, VerifyFailed } from 'components/ConfirmRegister'

function VerificationPage() {
    //trigger animation khi scrollY
    useScrollTo(0, 100)

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
                    <VerifySuccess />
                </styleMui.formContainer>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default VerificationPage
