import SigninForm from 'components/SigninForm/SigninForm'
import { Box } from '@mui/material'
import * as styleMui from './SigninPage.styled'

function SigninPage() {
    return (
        <styleMui.container>
            <styleMui.Background>
                <SigninForm />
                <Box
                    sx={{
                        width: '50%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        paddingTop: '7.5rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <styleMui.Title variant="h5">
                            CHÀO MỪNG <br />
                            TRỞ LẠI VỚI PLANTMED
                        </styleMui.Title>
                        <styleMui.Note>
                            Đây là trang đăng nhập dành cho cá nhân
                            <br />
                            đã có tài khoản tại PLANTMED
                        </styleMui.Note>
                    </Box>
                </Box>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SigninPage
