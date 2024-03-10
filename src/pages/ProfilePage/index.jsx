import * as styleMui from './ProfilePage.styled'
import { ProfileAvatar, ProfileForm, ProfileSidebar } from 'components/Profile'
import { readCookie } from 'utils/cookie'
import { parseJwt } from 'utils'
import { ACCESS_TOKEN } from 'constant'

function ProfilePage() {
    const accessToken = readCookie(ACCESS_TOKEN)
    const tokenInfo = accessToken ? parseJwt(accessToken) : null
    console.log(parseJwt(accessToken))

    return (
        <styleMui.container>
            <ProfileAvatar {...tokenInfo} />
            <ProfileForm {...tokenInfo} />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ProfilePage
