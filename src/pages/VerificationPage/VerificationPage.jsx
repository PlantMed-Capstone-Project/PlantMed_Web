import VerificationForm from 'components/VerificationForm/VerificationForm'
import * as styleMui from './VerificationPage.styled'
import { motion } from 'framer-motion'

function VerificationPage() {
    return (
        <styleMui.container>
            <styleMui.Background>
                <motion.div
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.formContainer>
                        <VerificationForm />
                    </styleMui.formContainer>
                </motion.div>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default VerificationPage
