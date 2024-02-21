import { Link } from 'react-router-dom'
import * as styleMui from './Profile.styled'
import { useImperativeHandle, forwardRef, useState } from 'react'

const ProfileSidebar = forwardRef(({ onEditButtonClick }, ref) => {
    const [selectedButtonId, setSelectedButtonId] = useState(null)

    const buttons = [
        {
            id: 1,
            name: 'Chỉnh sửa thông tin',
            nav: '/profile',
        },
        {
            id: 2,
            name: 'Thay đổi mật khẩu',
            nav: '/reset-password',
        },
        {
            id: 3,
            name: 'Blog của tôi',
            nav: '/blog',
        },
    ]

    const handleButtonClick = (id) => {
        setSelectedButtonId(id)
        if (id === 1) {
            onEditButtonClick()
        }
    }

    const resetSelection = () => {
        setSelectedButtonId(null)
    }

    // Expose resetSelection function using useImperativeHandle
    useImperativeHandle(ref, () => ({
        resetSelection,
    }))

    return (
        <styleMui.sidebarPlace>
            {buttons.map((item) => (
                <styleMui.sidebarButton
                    key={item.id}
                    component={Link}
                    to={item.nav}
                    variant="contained"
                    isSelected={selectedButtonId === item.id}
                    onClick={() => handleButtonClick(item.id)}
                >
                    {item.name}
                </styleMui.sidebarButton>
            ))}
        </styleMui.sidebarPlace>
    )
})

export default ProfileSidebar
