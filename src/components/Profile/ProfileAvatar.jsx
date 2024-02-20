import * as styleMui from './Profile.styled'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const ProfileAvatar = ({ avatar, username, email }) => {
    return (
        <styleMui.avatarPlace>
            <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                <styleMui.Camera>
                    <CameraAltIcon/>
                </styleMui.Camera>
            </styleMui.Avatar>
            <styleMui.Username>{username}</styleMui.Username>
            <styleMui.personalEmail>{email}</styleMui.personalEmail>
        </styleMui.avatarPlace>
    )
}

export default ProfileAvatar
