import avatar from 'Images/avatar.jpg'
import { ProfileAvatar, ProfileSidebar } from 'components/Profile'
import ResetPasswordForm from 'components/ResetPassword'
import * as styleMui from './ResetPasswordPage.styled'

function ResetPasswordPage() {
    const profileInfo = {
        id: 1,
        username: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        createdDate: '2/21/2024',
        avatar: avatar,
        password: '123456',
    }

    return (
        <styleMui.container>
            <ProfileAvatar {...profileInfo} isDisabled={true} />
            <ResetPasswordForm {...profileInfo} />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ResetPasswordPage
