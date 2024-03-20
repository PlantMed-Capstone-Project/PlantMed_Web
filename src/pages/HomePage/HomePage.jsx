import { Stack } from '@mui/material'
import BlogQuantity from 'components/BlogQuantity'
import SpecialThreeD from 'components/CardThreeD/SpecialThreeD'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import * as styleMui from './HomePage.styled'

export default function HomePage() {
    const { data, loading } = useShallowEqualSelector((state) => state.plant)

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
