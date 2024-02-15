import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import * as S from './MainLayout.styled'
import { checkCookie } from 'utils/cookie'
import { useEffect } from 'react'

const MainLayout = ({ children }) => {
    const spacingTop = 5

    const checkHeader = () => checkCookie(ACCESS_TOKEN, REFRESH_TOKEN)

    return (
        <>
            <S.Header>
                <Header typeHeader={checkHeader} />
            </S.Header>

            <S.Main>{children}</S.Main>

            <S.Footer>
                <Footer topspacing={spacingTop} />
            </S.Footer>
        </>
    )
}

export default MainLayout
