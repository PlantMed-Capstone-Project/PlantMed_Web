import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as styleMui from './Profile.styled';

const ProfileForm = ({ username, email, phone }) => {
    const [editFields, setEditFields] = useState([
        {
            id: 1,
            type: 'text',
            header: 'Tên hiển thị',
            isDisabled: true,
            key: 'username',
        },
        {
            id: 2,
            type: 'email',
            header: 'Email',
            isDisabled: true,
            key: 'email',
        },
        {
            id: 3,
            type: 'text',
            header: 'Số điện thoại',
            isDisabled: true,
            key: 'phone',
        },
    ]);

    const [inputs, setInputs] = useState({
        username: username || '',
        email: email || '',
        phone: phone || '',
    });

    const location = useLocation();

    useEffect(() => {
        // Check if the current URL location matches '/profile/edit'
        const isEditMode = location.pathname === '/profile/edit';
        
        // Update the isDisabled property based on the edit mode
        const updatedFields = editFields.map(field => ({
            ...field,
            isDisabled: !isEditMode
        }));
        
        // Set the updated fields
        setEditFields(updatedFields);
    }, [location.pathname]); // Re-run this effect whenever the pathname changes

    const handleInputChange = (key, value) => {
        setInputs(prevInputs => ({ ...prevInputs, [key]: value }));
    };

    const renderInputs = ({ id, type, header, isDisabled, key }) => {
        return (
            <styleMui.inputContainer key={id}>
                <styleMui.inputHeader>{header}</styleMui.inputHeader>
                <styleMui.Input
                    size="small"
                    value={inputs[key]}
                    onChange={e => handleInputChange(key, e.target.value)}
                    margin="dense"
                    type={type}
                    disabled={isDisabled}
                />
            </styleMui.inputContainer>
        );
    };

    return (
        <styleMui.profilePlace>
            <styleMui.Title>Thông tin người dùng</styleMui.Title>
            <styleMui.inputPlace>
                {editFields.map(obj => renderInputs({ ...obj }))}
            </styleMui.inputPlace>
            <styleMui.button variant="contained" component={Link} to='/profile'>Lưu thông tin</styleMui.button>
        </styleMui.profilePlace>
    );
};

export default ProfileForm;
