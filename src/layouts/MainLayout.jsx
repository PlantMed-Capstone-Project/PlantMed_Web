import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import * as S from './MainLayout.styled'

const MainLayout = ({ children }) => {
    const spacingTop = 5
    const { isLogin } = useShallowEqualSelector((state) => state.auth)

    return (
        <S.Root>
            <S.Header>
                <Header isLogin={isLogin} />
            </S.Header>

            <S.Main>{children}</S.Main>

            <S.Footer>
                <Footer topspacing={spacingTop} />
            </S.Footer>
        </S.Root>
    )
}

export default MainLayout
