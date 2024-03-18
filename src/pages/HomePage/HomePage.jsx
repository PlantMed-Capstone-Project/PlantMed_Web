import { Stack } from '@mui/material'
import imgHosen from 'Images/avatar.jpg'
import hoaThom from 'Images/cannabis.png'
import hoaHoe from 'Images/groupImage.png'
import imgDemo from 'Images/heroSen.jpg'
import imageBachBo from 'Images/heroSi.jpg'
import imageDayLeo from 'Images/herogreen.jpg'
import imgHosung from 'Images/hiền nhân.jpg'
import imgHoacucLon from 'Images/lap.png'
import SpecialThreeD from 'components/CardThreeD/SpecialThreeD'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import * as styleMui from './HomePage.styled'
import BlogQuantity from 'components/BlogQuantity'

export default function HomePage() {
    const { data, loading } = useShallowEqualSelector((state) => state.plant)
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

    return (
        <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
            <Heros />
            <Sologan />
            <FeaturedSearch
                title="TÌM KIẾM NỔI BẬT"
                data={data}
                loading={loading}
            />
            <styleMui.subContainer direction="column" alignItems="center">
                <styleMui.alotComponent>
                    <styleMui.slideShowTitle>
                        ĐA DẠNG CÁC LOẠI THỰC VẬT
                    </styleMui.slideShowTitle>
                    <SpecialThreeD />
                </styleMui.alotComponent>
                <SpecialFeature />
            </styleMui.subContainer>
            <Quantity />
            <BlogQuantity />
        </Stack>
    )
}
