import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import * as S from './LoginLayout.styled'

const LoginLayout = ({ children }) => {
    const spacingTop = 5
    return (
        <S.Root>
            <S.Header>
                <Header />
            </S.Header>

            <S.Main>{children}</S.Main>

            <S.Footer>
                <Footer topspacing={spacingTop} />
            </S.Footer>
        </S.Root>
    )
}

export default LoginLayout
