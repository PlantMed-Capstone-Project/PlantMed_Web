import ProfileAvatar from 'components/Profile/ProfileAvatar'
import * as styleMui from './ProfilePage.styled'
import avatar from 'Images/avatar.jpg'
import ProfileForm from 'components/Profile/ProfileForm'
import ProfileSidebar from 'components/Profile/ProfileSidebar'
import { useRef, useState } from 'react'

function ProfilePage() {
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const sidebarRef = useRef()

    const profileInfo = {
        id: 1,
        username: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        phone: '0123456789',
        avatar: avatar,
    }

    //If click on 'Chỉnh sửa thông tin' button, the profile will be abled to edit
    const handleEditButtonClick = () => {
        setIsFormDisabled(false)
    }

    //If click on 'Lưu thông tin' button, the profile will be disabled to edit
    const handleSubmitButtonClick = () => {
        setIsFormDisabled(true)
    }

    // Accessing ProfileSidebar's resetSelection function
    const resetSidebarSelection = () => {
        sidebarRef.current.resetSelection() 
    }

    return (
        <styleMui.container>
            <ProfileAvatar {...profileInfo} isDisabled={isFormDisabled} />
            <ProfileForm
                {...profileInfo}
                isDisabled={isFormDisabled}
                onSubmitButtonClick={handleSubmitButtonClick}
                resetSidebarSelection={resetSidebarSelection}
            />
            <ProfileSidebar
                onEditButtonClick={handleEditButtonClick}
                ref={sidebarRef}
            />
        </styleMui.container>
    )
}

export default ProfilePage
