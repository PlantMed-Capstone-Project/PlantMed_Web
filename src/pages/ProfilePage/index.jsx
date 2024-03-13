import * as styleMui from './ProfilePage.styled'
import { ProfileAvatar, ProfileForm, ProfileSidebar } from 'components/Profile'
import { readCookie } from 'utils/cookie'
import { parseJwt } from 'utils'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constant'
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
    const [isFormDisabled, setIsFormDisabled] = useState(true)

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
            await updateInfo(userInfo)
            setUserInfo({ ...userInfo, FullName: userInfo.FullName })
            console.log(userInfo)
            const response = await authRefreshToken({
                refreshToken: readCookie(REFRESH_TOKEN),
            })
            console.log('refreshToken:', response)
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

    //If click on 'Chỉnh sửa thông tin' button, the profile will be abled to edit
    const handleEditButtonClick = () => {
        setIsFormDisabled(false)
    }

    return (
        <styleMui.container>
            <ProfileAvatar userInfo={userInfo} isDisabled={isFormDisabled} />
            <ProfileForm
                userInfo={userInfo}
                isDisabled={isFormDisabled}
                onUpdateInfo={updateUserInformation}
                handleEditButtonClick={handleEditButtonClick}
            />
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ProfilePage
