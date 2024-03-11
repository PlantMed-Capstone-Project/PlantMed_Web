import { ProfileAvatar, ProfileSidebar } from 'components/Profile'
import ResetPasswordForm from 'components/ResetPassword'
import * as styleMui from './ResetPasswordPage.styled'
import useScrollTo from 'hooks/useScrollTo'
import { readCookie } from 'utils/cookie'
import { ACCESS_TOKEN } from 'constant'
import { parseJwt } from 'utils'
import { useState } from 'react'

function ResetPasswordPage() {
    //trigger crollY
    useScrollTo(0, 0)

    const [userInfo, setUserInfo] = useState(null)
    const accessToken = readCookie(ACCESS_TOKEN)
    const tokenInfo = accessToken ? parseJwt(accessToken) : null

    useState(() => {
        setUserInfo(tokenInfo)
    }, [tokenInfo])

    return (
        <styleMui.container>
            <ProfileAvatar userInfo={userInfo} />
            <ResetPasswordForm />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ResetPasswordPage
