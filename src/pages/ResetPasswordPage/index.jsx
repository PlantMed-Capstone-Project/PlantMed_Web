import avatar from 'Images/avatar.jpg'
import { ProfileAvatar, ProfileSidebar } from 'components/Profile'
import ResetPasswordForm from 'components/ResetPassword'
import * as styleMui from './ResetPasswordPage.styled'
import useScrollTo from 'hooks/useScrollTo'

function ResetPasswordPage() {
    //trigger crollY
    useScrollTo(0)

    const profileInfo = {
        id: 1,
        username: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        createdDate: '21/2/2024',
        role: 'Người dùng',
        avatar: avatar,
    }

    return (
        <styleMui.container>
            <ProfileAvatar {...profileInfo} />
            <ResetPasswordForm {...profileInfo} />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ResetPasswordPage
