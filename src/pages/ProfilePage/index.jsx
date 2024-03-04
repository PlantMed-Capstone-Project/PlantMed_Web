import avatar from 'Images/avatar.jpg'
import * as styleMui from './ProfilePage.styled'
import { ProfileAvatar, ProfileForm, ProfileSidebar } from 'components/Profile'

function ProfilePage() {
    const profileInfo = {
        id: 1,
        fullname: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        createdDate: '21/2/2024',
        role: 'Người dùng',
        password: '123456',
        avatar: avatar,
    }

    return (
        <styleMui.container>
            <ProfileAvatar {...profileInfo} />
            <ProfileForm {...profileInfo} />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ProfilePage
