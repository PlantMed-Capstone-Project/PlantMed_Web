import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PersonIcon from '@mui/icons-material/Person'
import * as styleMui from './SigninForm.styled'
import { useLocation } from 'react-router-dom'
import { saveScrollPosition } from 'utils/scrollUtils'

const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export default function SigninForm() {
    const inputItems = [
        { icon: <PersonIcon sx={iconStyle} />, placeholder: 'Email' },
        { icon: <LockRoundedIcon sx={iconStyle} />, placeholder: 'Mật khẩu' },
    ]

    //Lưu trạng thái scroll khi qua trang khác
    const location = useLocation()
    const handleClick = () => {
        saveScrollPosition(location.pathname)
    }
    return (
        <styleMui.Form>
            <styleMui.signinTitle variant="h5" align="center">
                Đăng nhập
            </styleMui.signinTitle>

            <styleMui.containerInput>
                {/* Start input place */}
                <styleMui.inputPlace>
                    {inputItems.map((item, indx) => (
                        <styleMui.Input
                            key={indx}
                            placeholder={item.placeholder}
                            size="small"
                            InputProps={{
                                startAdornment: item.icon,
                            }}
                        />
                    ))}
                </styleMui.inputPlace>
                {/* End input place */}

                <styleMui.passSection>
                    <styleMui.forgetPass href="/" underline="hover">
                        Quên mật khẩu?
                    </styleMui.forgetPass>
                </styleMui.passSection>
            </styleMui.containerInput>
            <styleMui.navPlace>
                <styleMui.button variant="contained">Đăng nhập</styleMui.button>
                <styleMui.link
                    href="/register"
                    underline="hover"
                    onClick={handleClick}
                >
                    Tạo tài khoản mới
                </styleMui.link>
            </styleMui.navPlace>
        </styleMui.Form>
    )
}
