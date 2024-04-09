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
import ResetPasswordForm from 'components/ResetPassword/index.jsx'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector.js'

function ProfilePage() {
    const { refreshToken } = useActions(authAction)
    const { show } = useActions(snackbarAction)
    const { isChangePass } = useShallowEqualSelector(
        (state) => state.changePass
    )
    const [userInfo, setUserInfo] = useState(parseJwt(readCookie(ACCESS_TOKEN)))
    const [isFormDisabled, setIsFormDisabled] = useState(true)

    const updateUserInformation = async (userInfo) => {
        show({ message: 'Vui lòng chờ trong giây lát' })
        try {
            await updateInfo(userInfo)
            const response = await authRefreshToken({
                refreshToken: readCookie(REFRESH_TOKEN),
            })

            refreshToken(response.data)
            setUserInfo(parseJwt(readCookie(ACCESS_TOKEN)))
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

    //If click on 'Thay đổi' button, the profile will be abled to edit
    const handleEditButtonClick = () => {
        setIsFormDisabled(false)
    }

    //If click on 'Hủy thay đổi' button, the profile will be disabled to edit
    const handleCancelButtonClick = () => {
        setIsFormDisabled(true)
    }

    return (
        <styleMui.container>
            <ProfileAvatar userInfo={userInfo} isDisabled={isFormDisabled} />
            {isChangePass ? (
                <ResetPasswordForm />
            ) : (
                <ProfileForm
                    userInfo={userInfo}
                    isDisabled={isFormDisabled}
                    onUpdateInfo={updateUserInformation}
                    handleEditButtonClick={handleEditButtonClick}
                    handleCancelButtonClick={handleCancelButtonClick}
                />
            )}
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default ProfilePage
