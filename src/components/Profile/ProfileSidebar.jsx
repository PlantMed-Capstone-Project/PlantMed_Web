import { Link, useLocation } from 'react-router-dom'
import * as styleMui from './Profile.styled'
import { useImperativeHandle, forwardRef, useState, useEffect } from 'react'

export const ProfileSidebar = forwardRef(({ onEditButtonClick }, ref) => {
    const [selectedButtonId, setSelectedButtonId] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const currentButton = buttons.find((button) => button.nav === location.pathname)
        if (currentButton && currentButton.id !== 1) {
            setSelectedButtonId(currentButton.id)
        } else {
            setSelectedButtonId(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

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
