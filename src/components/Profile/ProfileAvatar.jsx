import { useState } from 'react'
import * as styleMui from './Profile.styled'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

const ProfileAvatar = ({ avatar, username, email, isDisabled }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(avatar)

    const handleAvatarChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedAvatar(reader.result)
            }
            reader.readAsDataURL(file)
        }
        //console.log(file)
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
                    <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        style={{ display: 'none' }}
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
