import { useState } from 'react'
import * as styleMui from './Profile.styled'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { base64ToImage, imageToBase64 } from 'utils'

const ProfileAvatar = ({ avatar, username, email, isDisabled }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(avatar)

    const handleAvatarChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            imageToBase64(file, (result) => {
                setSelectedAvatar(avatar)
                //console.log(base64ToImage(result))
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
                        accept=".png, .jpeg"
                        onChange={handleAvatarChange}
                        hidden
                    />
                </styleMui.Camera>
            </styleMui.Avatar>
            <styleMui.Username>{username}</styleMui.Username>
            <styleMui.personalEmail>{email}</styleMui.personalEmail>
        </styleMui.avatarPlace>
    )
}

export default ProfileAvatar
