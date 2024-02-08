import React from 'react'
import * as S from './AboutUs.styled'

const AboutUsHero = ({ title, note }) => {
    return (
        <>
            <S.arrangeContainer>
                <S.contentPlace>
                    <S.Title>{title}</S.Title>
                    <S.Note>{note}</S.Note>
                </S.contentPlace>
                <S.Image />
            </S.arrangeContainer>
        </>
    )
}

export default AboutUsHero
