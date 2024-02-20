import { Link, useLocation } from 'react-router-dom';
import * as styleMui from './Profile.styled';
import { useState, useEffect } from 'react';

const ProfileSidebar = () => {
    const location = useLocation();

    const [buttons, setButtons] = useState([
        {
            id: 1,
            name: 'Chỉnh sửa thông tin',
            nav: '/profile/edit',
            isSelected: location.pathname === '/profile/edit',
        },
        {
            id: 2,
            name: 'Thay đổi mật khẩu',
            nav: '/',
            isSelected: location.pathname === '/',
        },
        {
            id: 3,
            name: 'Blog của tôi',
            nav: '/',
            isSelected: location.pathname === '/',
        },
    ]);

    const handleButtonClick = (id) => {
        const updatedButtons = buttons.map((button) =>
            button.id === id
                ? { ...button, isSelected: true }
                : { ...button, isSelected: false }
        );
        setButtons(updatedButtons);
    };

    useEffect(() => {
        // Update isSelected state based on the current URL when it changes
        const updatedButtons = buttons.map((button) => ({
            ...button,
            isSelected: button.nav === location.pathname
        }));
        setButtons(updatedButtons);
    }, [location.pathname]);

    return (
        <styleMui.sidebarPlace>
            {buttons.map((item) => (
                <styleMui.sidebarButton
                    key={item.id}
                    component={Link}
                    to={item.nav}
                    variant="contained"
                    isSelected={item.isSelected}
                    onClick={() => handleButtonClick(item.id)}
                >
                    {item.name}
                </styleMui.sidebarButton>
            ))}
        </styleMui.sidebarPlace>
    );
};

export default ProfileSidebar;
