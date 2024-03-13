import { Link, useLocation } from 'react-router-dom'
import * as styleMui from './Profile.styled'
import PersonIcon from '@mui/icons-material/Person'
import DescriptionIcon from '@mui/icons-material/Description'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'

export const ProfileSidebar = (height) => {
    const [selectedButtonId, setSelectedButtonId] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const currentButton = buttons.find(
            (button) =>
                button.nav === location.pathname ||
                location.pathname === '/reset-password'
        )
        if (currentButton) {
            setSelectedButtonId(currentButton.id)
        } else {
            setSelectedButtonId(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    const buttons = [
        {
            id: 1,
            icon: <PersonIcon sx={styleMui.iconStyle} />,
            name: 'Profile',
            nav: '/profile',
        },
        {
            id: 2,
            icon: <DescriptionIcon sx={styleMui.iconStyle} />,
            name: 'Bài viết',
            nav: '/my-blog',
        },
        {
            id: 3,
            icon: <FavoriteIcon sx={styleMui.iconStyle} />,
            name: 'Đã thích',
            nav: '/liked-blog',
        },
    ]

    const handleButtonClick = (buttonId) => {
        setSelectedButtonId(buttonId)
    }

    return (
        <styleMui.sidebarPlace height={height}>
            {buttons.map((item) => (
                <styleMui.sidebarButton
                    key={item.id}
                    component={Link}
                    to={item.nav}
                    variant="contained"
                    isSelected={selectedButtonId === item.id}
                    onClick={() => handleButtonClick(item.id)}
                >
                    {item.icon}
                    <styleMui.buttonName>{item.name}</styleMui.buttonName>
                </styleMui.sidebarButton>
            ))}
        </styleMui.sidebarPlace>
    )
}
