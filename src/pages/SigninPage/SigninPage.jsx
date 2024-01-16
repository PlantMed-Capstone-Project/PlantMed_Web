import SigninForm from 'components/SigninForm/SigninForm'
import { Box } from '@mui/material'
import * as styleMui from './SigninPage.styled'

function SigninPage() {
    return (
        <Box>
            <styleMui.Background></styleMui.Background>
            <styleMui.Title variant="h5">
                CHÀO MỪNG <br />
                TRỞ LẠI VỚI PLANTMED
            </styleMui.Title>
            <styleMui.Note>
                Đây là trang đăng nhập dành cho cá nhân
                <br />
                đã có tài khoản tại PLANTMED
            </styleMui.Note>
            <SigninForm></SigninForm>
        </Box>
    )
}

export default SigninPage
