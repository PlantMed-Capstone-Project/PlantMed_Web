import ProfileAvatar from 'components/Profile/ProfileAvatar'
import * as styleMui from './ResetPasswordPage.styled'
import avatar from 'Images/avatar.jpg'
import ProfileSidebar from 'components/Profile/ProfileSidebar'
import { useState } from 'react'
import ResetPasswordForm from 'components/ResetPassword/ResetPasswordForm'

function ResetPasswordPage() {
    const [isFormDisabled, setIsFormDisabled] = useState(true)

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
            <ProfileAvatar {...profileInfo} isDisabled={isFormDisabled} />
            <ResetPasswordForm
                {...profileInfo}
            />
            <ProfileSidebar/>
        </styleMui.container>
    )
}

export default ResetPasswordPage
