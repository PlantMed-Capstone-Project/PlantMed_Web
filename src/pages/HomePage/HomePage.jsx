import { Box, Stack } from '@mui/material'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'
import imgDemo from 'Images/heroSen.jpg'
import imageDayLeo from 'Images/heroSen.jpg'
import imageBachBo from 'Images/heroSi.jpg'

export default function HomePage() {

	const spacingTop = 5
	const nav = ['TRANG CHỦ', 'PHÁT HIỆN HÌNH ẢNH', 'BÀI VIẾT', 'THỰC VẬT', 'VỀ CHÚNG TÔI']
	const plants = [
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
		{ title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
	]

  const searchProducts = [
    { id: 1, name: 'Product 1', image: imageBachBo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 2, name: 'Product 2', image: imageDayLeo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 3, name: 'Product 3', image: imageBachBo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 4, name: 'Product 4', image: imageDayLeo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 5, name: 'Product 5', image: imageBachBo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  ]

  return (
    <Box component="section" sx={{ width: "90rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header navItems={nav} />
      <Heros />
      <Sologan />
      <FeaturedSearch />
      <Stack
        direction="column"
        alignItems="center"
        width="100%"
        height="106.94rem"
        mt="6.38rem"
        sx={{ backgroundColor: "#F4FFEB" }}
      >
        <DiversityPlant title='ĐA DẠNG CÁC LOẠI THỰC VẬT' data={plants} />
        <SpecialFeature title='TÌM KIẾM NỔI BẬT' data={searchProducts} />
      </Stack>
      <Quantity />
      <Footer valueTop={spacingTop} />
    </Box>
  )
}
