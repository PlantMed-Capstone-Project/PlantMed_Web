import avatar from 'Images/avatar.jpg'
import * as S from './AboutUs.styled'

const RenderAvatar = ({ name, studentId }) => {
    return (
        <S.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
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

const AboutUsMember = ({ title, listTop, listBot }) => {
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

export default AboutUsMember
