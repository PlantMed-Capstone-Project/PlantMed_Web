import { Box } from '@mui/material'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import FeaturedSearch from 'components/FeaturedSearch/FeaturedSearch'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Heros from 'components/Heros/Heros'
import Quantity from 'components/Quantity/Quantity'
import Sologan from 'components/Sologan/Sologan'
import SpecialFeature from 'components/SpecialFeature/SpecialFeature'

export default function HomePage() {

  const spacingTop = 5

  return (
    <Box component="section" sx={{ width: "90rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <Heros />
      <Sologan />
      <FeaturedSearch />
      <SpecialFeature />
      <Quantity />
      <Footer valueTop={spacingTop} />
      <DiversityPlant/>
    </Box>
  )
}
