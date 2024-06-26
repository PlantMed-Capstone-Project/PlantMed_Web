import * as S from './AboutUs.styled'

const RenderAvatar = ({ name, studentId, avartar }) => {
    return (
        <S.Avatar sx={{ backgroundImage: `url(${avartar})` }}>
            <S.infoPlace>
                <S.Info>
                    {name}
                    <br />
                    {studentId}
                </S.Info>
            </S.infoPlace>
        </S.Avatar>
    )
}

export const AboutUsMember = ({ title, listTop, listBot }) => {
    return (
        <S.memberPlace>
            <S.memberTitle>{title}</S.memberTitle>
            <S.avatarPlace1>
                {listTop &&
                    listTop.map((obj) => (
                        <RenderAvatar key={obj.id} {...obj} />
                    ))}
            </S.avatarPlace1>
            <S.avatarPlace2>
                {listBot &&
                    listBot.map((obj) => (
                        <RenderAvatar key={obj.id} {...obj} />
                    ))}
            </S.avatarPlace2>
        </S.memberPlace>
    )
}
