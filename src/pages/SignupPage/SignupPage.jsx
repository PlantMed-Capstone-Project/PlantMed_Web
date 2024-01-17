import SignupForm from 'components/SignupForm/SignupForm'
import { useState } from 'react'
import * as styleMui from './SignupPage.styled'

function SignupPage() {
    const [typeUser, setTypeUser] = useState('người dùng')

    return (
        <styleMui.container>
            <styleMui.Background>
                <SignupForm setTypeUser={setTypeUser} typeUser={typeUser} />
                <styleMui.containerTxt>
                    <styleMui.containsTitle>
                        <styleMui.Title>
                            CHÀO MỪNG <br />
                            BẠN ĐẾN VỚI PLANTMED
                        </styleMui.Title>
                        <styleMui.subTitle>
                            Đây là trang đăng ký dành cho {typeUser}
                        </styleMui.subTitle>
                    </styleMui.containsTitle>
                </styleMui.containerTxt>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default SignupPage
