import SignupForm from 'components/SignupForm/SignupForm'
import { Box } from '@mui/material'
import * as styleMui from './SignupPage.styled'

function SignupPage() {
    return (
        <Box>
            <styleMui.Background></styleMui.Background>
            <styleMui.Title>
                CHÀO MỪNG <br />
                BẠN ĐẾN VỚI PLANTMED
            </styleMui.Title>
            <SignupForm></SignupForm>
        </Box>
    )
}

export default SignupPage
