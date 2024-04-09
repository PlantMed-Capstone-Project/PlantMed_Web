import EditIcon from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { changePassAction } from 'app/reducers/changePass.js'
import InputField from 'components/InputField'
import { validateInputs } from 'components/InputField/validationRules'
import useActions from 'hooks/useActions.js'
import { useEffect, useState } from 'react'
import * as styleMui from './Profile.styled'

export const ProfileForm = ({
    userInfo,
    onUpdateInfo,
    handleEditButtonClick,
    handleCancelButtonClick,
    isDisabled,
}) => {
    const { setChange } = useActions(changePassAction)

    const [errors, setErrors] = useState({})
    const [inputs, setInputs] = useState({
        fullname: userInfo?.FullName,
        email: userInfo?.Email,
        createdDate: userInfo?.Date,
        role:
            userInfo?.Role === 'user'
                ? 'Người Dùng'
                : 'Chuyên Gia Về Cây Thuốc',
    })
    const [displayButtons, setDisplayButtons] = useState(1)
    //Lưu thông tin cũ khi hủy thay đổi
    const [initialNameInput, setInitialNameInput] = useState({})

    useEffect(() => {
        setInitialNameInput({
            fullname: userInfo?.FullName,
        })
        setInputs({ ...inputs, fullname: userInfo?.FullName })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo])

    //Switch set button
    const onSwitch = (buttonSet) => {
        if (buttonSet === 1) {
            setDisplayButtons(2)
            handleEditButtonClick()
        } else {
            setDisplayButtons(1)
            handleCancelButtonClick()
            setInputs(initialNameInput)
        }
    }

    const handleInputChange = (key, value) =>
        setInputs((prevInputs) => ({ ...prevInputs, [key]: value }))

    //Khai báo header cho mỗi input
    const renderHeaders = (obj) => (
        <styleMui.inputHeader key={obj.id} disabled={obj.isDisabled} {...obj}>
            {obj.header}
        </styleMui.inputHeader>
    )

    //Khai báo input
    const renderInputs = (obj) => (
        <InputField
            key={obj.id}
            type={obj.type}
            placeholder={obj.placeholder}
            eyeIcon={!isDisabled ? obj.icon : null}
            value={inputs[obj.key]}
            error={errors[obj.key]}
            disabled={obj.isDisabled}
            onChange={(e) => handleInputChange(obj.key, e.target.value)}
            height="3rem"
            fontSize="1.25rem"
            helperText={
                <styleMui.helperTextStyle>
                    {errors[obj.key]}
                </styleMui.helperTextStyle>
            }
        />
    )

    const onValidate = () => {
        const inputErrors = validateInputs(inputs)
        if (Object.keys(inputErrors).length > 0) setErrors(inputErrors)
        else {
            setErrors({})
            handleOnSubmit()
        }
    }

    const handleOnSubmit = () => {
        onUpdateInfo({ FullName: inputs.fullname })
        onSwitch(2)
    }

    const buttonsSet = [
        {
            id: 1,
            value: 'Lưu thông tin',
            width: '8rem',
            onClick: () => onValidate(),
        },
        {
            id: 2,
            value: 'Hủy thay đổi',
            width: '8rem',
            onClick: () => onSwitch(2),
        },
    ]

    const renderButtons = (obj) => (
        <styleMui.button key={obj.id} onClick={obj.onClick} width={obj.width}>
            {obj.value}
        </styleMui.button>
    )

    const editFields = [
        {
            id: 1,
            type: 'text',
            header: 'Tên Người Dùng',
            placeholder: 'Tên người dùng',
            key: 'fullname',
            isDisabled: isDisabled,
            icon: <EditIcon sx={styleMui.editIconStyle} />,
        },
        {
            id: 2,
            type: 'text',
            header: 'Email',
            key: 'email',
            isDisabled: true,
        },
        {
            id: 3,
            type: 'text',
            header: 'Ngày Tạo Tài Khoản',
            key: 'createdDate',
            isDisabled: true,
        },
        {
            id: 4,
            type: 'text',
            header: 'Vai Trò',
            key: 'role',
            isDisabled: true,
        },
    ]

    return (
        <styleMui.profilePlace>
            <styleMui.profileContainer>
                <styleMui.Title variant="h2">
                    Thông tin người dùng
                </styleMui.Title>
                <styleMui.inputPlace>
                    {editFields.map((obj) => (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '2rem',
                            }}
                        >
                            <styleMui.hearderContainer>
                                {renderHeaders(obj)}
                            </styleMui.hearderContainer>
                            <styleMui.inputContainer>
                                {renderInputs(obj)}
                            </styleMui.inputContainer>
                        </Box>
                    ))}
                </styleMui.inputPlace>
            </styleMui.profileContainer>
            <styleMui.buttonContainer>
                {displayButtons === 1 ? (
                    <styleMui.button width="7rem" onClick={() => onSwitch(1)}>
                        Thay đổi
                    </styleMui.button>
                ) : (
                    buttonsSet.map(renderButtons)
                )}
                <styleMui.button width="9rem" onClick={() => setChange(true)} j>
                    Đổi mật khẩu
                </styleMui.button>
            </styleMui.buttonContainer>
        </styleMui.profilePlace>
    )
}
