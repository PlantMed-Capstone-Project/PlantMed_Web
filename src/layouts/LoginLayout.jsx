import Header from 'components/Header/Header'
import * as S from './LoginLayout.styled'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'

const LoginLayout = ({ children }) => {
    const { isLogin } = useShallowEqualSelector((state) => state.auth)

    return (
        <S.Root>
            <S.Header>
                <Header isLogin={isLogin} />
            </S.Header>

            <S.Main>{children}</S.Main>
        </S.Root>
    )
}

export default LoginLayout
