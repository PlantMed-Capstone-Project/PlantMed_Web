import { AboutUsHero, AboutUsMember } from 'components/AboutUs'
import * as styleMui from './AboutUsPage.styled'
import TanNguyenImg from 'Images/TanNguyen.jpg'
import HueNhanImg from 'Images/HueNhan.jpg'
import HungPhuImg from 'Images/Phu.jpg'
import PhuongImg from 'Images/Phuong.jpg'
import HuyImg from 'Images/Huy.jpg'

function AboutUsPage() {
    const heroText = {
        title: 'Về chúng tôi',
        note: 'PLANMED được thành lập bởi đội ngũ năng động và sáng tạo. Chúng tôi luôn nỗ lực không ngừng để mang đến cho bạn những trải nghiệm tuyệt vời nhất.',
    }

    const members = {
        title: 'Thành viên',
        listTop: [
            {
                id: 1,
                name: 'Nguyễn Lê Hưng Phú',
                studentId: 'CE150297',
                avartar: HungPhuImg,
            },
            {
                id: 2,
                name: 'Bùi Tấn Nguyên',
                studentId: 'CE150651',
                avartar: TanNguyenImg,
            },
        ],
        listBot: [
            {
                id: 1,
                name: 'Nguyễn Hoàng Huệ Nhân',
                studentId: 'CE140059',
                avartar: HueNhanImg,
            },
            {
                id: 2,
                name: 'Huỳnh Hoàng Phương',
                studentId: 'CE161062',
                avartar: PhuongImg,
            },
            {
                id: 3,
                name: 'Nguyễn Quốc Huy',
                studentId: 'CE161074',
                avartar: HuyImg,
            },
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
