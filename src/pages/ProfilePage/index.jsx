import * as styleMui from './ProfilePage.styled'
import { ProfileAvatar, ProfileForm, ProfileSidebar } from 'components/Profile'
import { readCookie } from 'utils/cookie'
import { parseJwt } from 'utils'
import { ACCESS_TOKEN } from 'constant'
import { useState } from 'react'
import { updateInfo } from 'rest/api/user'
import { refreshToken as authRefreshToken } from 'rest/api/auth'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'
import { authAction } from 'app/reducers/auth'

function ProfilePage() {
    const { refreshToken } = useActions(authAction)
    const { show } = useActions(snackbarAction)
    const [userInfo, setUserInfo] = useState(null)
    const accessToken = readCookie(ACCESS_TOKEN)
    const tokenInfo = accessToken ? parseJwt(accessToken) : null

    useState(() => {
        setUserInfo(tokenInfo)
    }, [tokenInfo])

    const updateUserInformation = async (userInfo) => {
        try {
            show({
                message: 'Vui lòng chờ trong giây lát',
                autoHideDuration: 2000,
            })
            const response = await updateInfo(userInfo)
            setUserInfo({ ...userInfo, FullName: userInfo.FullName })
            await authRefreshToken(JSON.stringify(userInfo))
            refreshToken(response.data)
            show({
                message: 'Cập nhật thông tin thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            show({
                message:
                    error.response.data.message ??
                    'Lỗi hệ thống! Vui lòng thử lại sau!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    return (
        <styleMui.container>
            <ProfileAvatar userInfo={userInfo} />
            <ProfileForm
                userInfo={userInfo}
                onUpdateInfo={updateUserInformation}
            />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ProfilePage
