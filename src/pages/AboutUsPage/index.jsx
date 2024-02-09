import AboutUsHero from 'components/AboutUs/Hero'
import AboutUsMember from 'components/AboutUs/Members'
import * as styleMui from './AboutUsPage.styled'

function AboutUsPage() {
    const heroText = {
        title: 'Về chúng tôi',
        note: 'PLANMED được thành lập bởi đội ngũ năng động và sáng tạo. Chúng tôi luôn nỗ lực không ngừng để mang đến cho bạn những trải nghiệm tuyệt vời nhất.',
    }

    const members = {
        title: 'Thành viên',
        listTop: [
            { id: 1, name: 'Nguyễn Lê Hưng Phú', studentId: 'CE150297' },
            { id: 2, name: 'Bùi Tấn Nguyên', studentId: 'CE150651' },
        ],
        listBot: [
            { id: 1, name: 'Nguyễn Hoàng Huệ Nhân', studentId: 'CE140059' },
            { id: 2, name: 'Huỳnh Hoàng Phương', studentId: 'CE161062' },
            { id: 3, name: 'Nguyễn Quốc Huy', studentId: 'CE161074' },
        ],
    }

    return (
        <styleMui.container>
            <AboutUsHero {...heroText} />

            <AboutUsMember {...members} />
        </styleMui.container>
    )
}

export default AboutUsPage
