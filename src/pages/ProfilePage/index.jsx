import ProfileAvatar from 'components/Profile/ProfileAvatar'
import * as styleMui from './ProfilePage.styled'
import avatar from 'Images/avatar.jpg'
import ProfileForm from 'components/Profile/ProfileForm'
import ProfileSidebar from 'components/Profile/ProfileSidebar'

function ProfilePage() {
    const profileInfo = {
        username: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        phone: '0123456789',
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
