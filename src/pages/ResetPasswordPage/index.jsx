import { ProfileAvatar, ProfileSidebar } from 'components/Profile'
import ResetPasswordForm from 'components/ResetPassword'
import * as styleMui from './ResetPasswordPage.styled'
import useScrollTo from 'hooks/useScrollTo'
import { readCookie } from 'utils/cookie'
import { ACCESS_TOKEN } from 'constant'
import { parseJwt } from 'utils'

function ResetPasswordPage() {
    //trigger crollY
    useScrollTo(0, 0)

    const accessToken = readCookie(ACCESS_TOKEN)
    const tokenInfo = accessToken ? parseJwt(accessToken) : null

    return (
        <styleMui.container>
            <ProfileAvatar {...tokenInfo} />
            <ResetPasswordForm />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ResetPasswordPage
