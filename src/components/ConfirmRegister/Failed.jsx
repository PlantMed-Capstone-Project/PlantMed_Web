import * as styleMui from './ConfirmRegister.styled'
import failedImage from 'Images/deny_verification.png'

export const VerifyFailed = () => {
    return (
        <styleMui.verifyContainer>
            <styleMui.Title color={'#d51b21'}>
                Xác nhận đăng ký tài khoản thất bại
            </styleMui.Title>
            <styleMui.verifyImageBg verifyImage={failedImage} />
        </styleMui.verifyContainer>
    )
}
