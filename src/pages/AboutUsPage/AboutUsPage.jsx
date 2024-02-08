import * as styleMui from './AboutUsPage.styled'
import avatar from 'Images/avatar.jpg'

function AboutUsPage() {
    return (
        <styleMui.container>
            <styleMui.arrangeContainer>
                <styleMui.contentPlace>
                    <styleMui.Title>Về chúng tôi</styleMui.Title>
                    <styleMui.Note>
                        PLANMED được thành lập bởi đội ngũ năng động và sáng
                        tạo. Chúng tôi luôn nỗ lực không ngừng để mang đến cho
                        bạn những trải nghiệm tuyệt vời nhất.
                    </styleMui.Note>
                </styleMui.contentPlace>
                <styleMui.Image />
            </styleMui.arrangeContainer>
            <styleMui.memberPlace>
                <styleMui.memberTitle>Thành viên</styleMui.memberTitle>
                <styleMui.avatarPlace1>
                    <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                        <styleMui.infoPlace>
                            <styleMui.Info>
                                Nguyễn Lê Hưng Phú
                                <br />
                                CE150297
                            </styleMui.Info>
                        </styleMui.infoPlace>
                    </styleMui.Avatar>
                    <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                        <styleMui.infoPlace>
                            <styleMui.Info>
                                Bùi Tấn Nguyên
                                <br />
                                CE150651
                            </styleMui.Info>
                        </styleMui.infoPlace>
                    </styleMui.Avatar>
                </styleMui.avatarPlace1>
                <styleMui.avatarPlace2>
                    <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                        <styleMui.infoPlace>
                            <styleMui.Info>
                                Nguyễn Hoàng Huệ Nhân
                                <br />
                                CE140059
                            </styleMui.Info>
                        </styleMui.infoPlace>
                    </styleMui.Avatar>
                    <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                        <styleMui.infoPlace>
                            <styleMui.Info>
                                Huỳnh Hoàng Phương
                                <br />
                                CE161062
                            </styleMui.Info>
                        </styleMui.infoPlace>
                    </styleMui.Avatar>
                    <styleMui.Avatar sx={{ backgroundImage: `url(${avatar})` }}>
                        <styleMui.infoPlace>
                            <styleMui.Info>
                                Nguyễn Quốc Huy
                                <br />
                                CE161074
                            </styleMui.Info>
                        </styleMui.infoPlace>
                    </styleMui.Avatar>
                </styleMui.avatarPlace2>
            </styleMui.memberPlace>
        </styleMui.container>
    )
}

export default AboutUsPage
