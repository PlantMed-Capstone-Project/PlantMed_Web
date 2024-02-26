import React from 'react'
import * as S from './AboutUs.styled'

export const AboutUsHero = ({ title, note }) => {
    return (
        <S.arrangeContainer>
            <S.contentPlace>
                <S.Title>{title}</S.Title>
                <S.Note>{note}</S.Note>
            </S.contentPlace>
            <S.Image />
        </S.arrangeContainer>
    )
}
