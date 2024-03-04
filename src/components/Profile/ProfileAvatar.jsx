import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { useState } from 'react'
import { imageToBase64 } from 'utils'
import * as styleMui from './Profile.styled'

export const ProfileAvatar = ({ avatar, fullname, email, isDisabled }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(avatar)

    const handleAvatarChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            imageToBase64(file, (result) => {
                setSelectedAvatar(result)
            })
        }
    }

    return (
        <styleMui.avatarPlace>
            <styleMui.Avatar sx={{ backgroundImage: `url(${selectedAvatar})` }}>
                <styleMui.Camera
                    disabled={isDisabled}
                    component="label"
                    htmlFor="avatar-upload"
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
            </styleMui.Avatar>
            <styleMui.Username>{fullname}</styleMui.Username>
            <styleMui.personalEmail>{email}</styleMui.personalEmail>
        </styleMui.avatarPlace>
    )
}
