import avatar from 'Images/avatar.jpg'
import { useRef, useState } from 'react'
import * as styleMui from './ProfilePage.styled'
import { ProfileAvatar, ProfileForm, ProfileSidebar } from 'components/Profile'

function ProfilePage() {
    const [isFormDisabled, setIsFormDisabled] = useState(true)
    const sidebarRef = useRef()

    const profileInfo = {
        id: 1,
        username: 'Qiqi',
        email: 'Qiqi123@gmail.com',
        createdDate: '2/21/2024',
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

    console.log(isFormDisabled)

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
