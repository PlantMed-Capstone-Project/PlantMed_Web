import * as styleMui from './ConfirmRegister.styled'
import successImage from 'Images/success_verification.png'

export const VerifySuccess = () => {
    return (
        <styleMui.verifyContainer>
            <styleMui.Title color={'#008000'}>
                Xác nhận đăng ký tài khoản thành công
            </styleMui.Title>
            <styleMui.verifyImageBg verifyImage={successImage}/>
        </styleMui.verifyContainer>
    )
} 