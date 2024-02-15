import Header from 'components/Header/Header'
import * as S from './LoginLayout.styled'

const LoginLayout = ({ children }) => {
    const checkHeader = () => checkCookie(ACCESS_TOKEN, REFRESH_TOKEN)

    return (
        <S.Root>
            <S.Header>
                <Header typeHeader={checkHeader} />
            </S.Header>

            <S.Main>{children}</S.Main>
        </S.Root>
    )
}

export default LoginLayout
