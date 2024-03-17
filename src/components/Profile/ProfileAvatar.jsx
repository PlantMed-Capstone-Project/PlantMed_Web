import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { useEffect, useState } from 'react'
import { imageToBase64, parseImg } from 'utils'
import * as styleMui from './Profile.styled'
import { getAvatar, updateAvatar } from 'rest/api/user'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'

export const ProfileAvatar = ({ userInfo, avatar, isDisabled }) => {
    const { show } = useActions(snackbarAction)
    const [selectedAvatar, setSelectedAvatar] = useState()

    const handleAvatarChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            imageToBase64(file, (result) => {
                setSelectedAvatar(result)
                handleUpdateAvatar(result)
            })
        }
    }

    const handleUpdateAvatar = async (image) => {
        try {
            await updateAvatar(image)
            show({
                message: 'Cập nhật ảnh đại diện thành công',
                severity: SNACKBAR_SEVERITY.SUCCESS,
                autoHideDuration: 2000,
            })
        } catch (e) {
            show({
                message:
                    e.response.data.message ??
                    'Lỗi hệ thống! Vui lòng thử lại sau!',
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
        }
    }

    const handleGetAvatar = async () => {
        try {
            const res = await getAvatar()
            setSelectedAvatar(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleGetAvatar()
    }, [])

    return (
        <styleMui.avatarPlace>
            <styleMui.avatarContainer>
                <styleMui.avatar
                    src={selectedAvatar ? parseImg(selectedAvatar) : avatar}
                />
                <styleMui.Camera
                    component="label"
                    htmlFor="avatar-upload"
                    disabled={isDisabled}
                >
                    <CameraAltIcon />
                    <styleMui.uploadImage
                        id="avatar-upload"
                        type="file"
                        accept={['image/png', 'image/jpeg']}
                        onChange={handleAvatarChange}
                        hidden
                    />
                </styleMui.Camera>
            </styleMui.avatarContainer>
            <styleMui.Username>{userInfo?.FullName}</styleMui.Username>
            <styleMui.personalEmail>{userInfo?.Email}</styleMui.personalEmail>
        </styleMui.avatarPlace>
    )
}
