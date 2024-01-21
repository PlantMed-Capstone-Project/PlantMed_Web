import imgDemo from 'Images/heroSen.jpg'
import imageBachBo from 'Images/heroSi.jpg'
import imageDayLeo from 'Images/herogreen.jpg'
import imgHosen from 'Images/avatar.jpg'
import imgHosung from 'Images/hiền nhân.jpg'
import imgHoacucLon from 'Images/lap.png'
import hoaThom from 'Images/cannabis.png'
import hoaHoe from 'Images/groupImage.png'
import CardThreeD from 'components/CardThreeD/CardThreeDList/CardThreeDList'
import SpecialThreeD from 'components/CardThreeD/SpecialThreeD'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'
import { v4 as uuidv4 } from 'uuid'
import * as styleMui from './HomePage.styled'

export default function HomePage() {
    const spacingTop = 5

    const plants = [
        {
            id: 1,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 2,
            title: 'Cầu Kỳ Tử',
            image: imageBachBo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 3,
            title: 'Cầu Kỳ Tử',
            image: imageDayLeo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 4,
            title: 'Cầu Kỳ Tử',
            image: imgHosen,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 5,
            title: 'Cầu Kỳ Tử',
            image: imgHosung,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 6,
            title: 'Cầu Kỳ Tử',
            image: imgHoacucLon,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 7,
            title: 'Cầu Kỳ Tử',
            image: hoaThom,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 8,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 9,
            title: 'Cầu Kỳ Tử',
            image: hoaHoe,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 10,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
    ]

    const searchProducts = [
        {
            id: 1,
            name: 'Product 1',
            image: imageBachBo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 2,
            name: 'Product 2',
            image: imageDayLeo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 3,
            name: 'Product 3',
            image: imageBachBo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 4,
            name: 'Product 4',
            image: imageDayLeo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 5,
            name: 'Product 5',
            image: imageBachBo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
    ]

    // lib cần phải truyền tải component theo dạng này vào prop của 1 thư viện mới có thể sử dụng
    const manyPlantCard = plants.map((item) => ({
        key: uuidv4(),
        content: <CardThreeD key={item} data={item} />,
    }))

    return (
        <styleMui.container component="section">
            <Heros />
            <Sologan />
            <FeaturedSearch title="TÌM KIẾM NỔI BẬT" data={searchProducts} />
            <styleMui.subContainer direction="column" alignItems="center">
                <styleMui.alotComponent>
                    <styleMui.slideShowTitle>
                        ĐA DẠNG CÁC LOẠI THỰC VẬT
                    </styleMui.slideShowTitle>
                    <SpecialThreeD
                        cards={manyPlantCard}
                        height="25rem"
                        width="95%"
                        margin="0 auto"
                        offset={2}
                        showArrows={false}
                    />
                </styleMui.alotComponent>

                <SpecialFeature />
            </styleMui.subContainer>
            <Quantity />
        </styleMui.container>
    )
}
