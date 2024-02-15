import Header from 'components/Header/Header'
import * as S from './LoginLayout.styled'

const LoginLayout = ({ children }) => {
    return (
        <S.Root>
            <S.Header>
                <Header />
            </S.Header>

            <S.Main>{children}</S.Main>
        </S.Root>
    )
}

export default LoginLayout
