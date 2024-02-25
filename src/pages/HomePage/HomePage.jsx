import imgHosen from 'Images/avatar.jpg'
import hoaThom from 'Images/cannabis.png'
import hoaHoe from 'Images/groupImage.png'
import imgDemo from 'Images/heroSen.jpg'
import imageBachBo from 'Images/heroSi.jpg'
import imageDayLeo from 'Images/herogreen.jpg'
import imgHosung from 'Images/hiền nhân.jpg'
import imgHoacucLon from 'Images/lap.png'
import CardThreeD from 'components/CardThreeD/CardThreeDList/CardThreeDList'
import SpecialThreeD from 'components/CardThreeD/SpecialThreeD'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'
import * as styleMui from './HomePage.styled'
import { Stack } from '@mui/material'

export default function HomePage() {
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
        key: item.id,
        content: <CardThreeD key={item.id} data={item} />,
    }))

    return (
        <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
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
                        margin="0 0 6rem 0"
                        offset={3}
                        showArrows={false}
                    />
                </styleMui.alotComponent>

                <SpecialFeature />
            </styleMui.subContainer>
            <Quantity />
        </Stack>
    )
}
