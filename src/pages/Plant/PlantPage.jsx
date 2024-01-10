import { Box } from '@mui/material'
import Header from 'components/Header/Header'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import Searching from 'components/Searching/Searching'
import { useEffect, useState } from 'react'
import imgDemo from 'Images/heroSen.jpg'
import imgHai from 'Images/hiền nhân.jpg'
import immageBa from 'Images/heroSi.jpg'
import Footer from 'components/Footer/Footer'

export default function PlantPage() {

  const [search, setSearch] = useState('')

  const plants = [
    { id: 1, title: 'Cầu cổ Tử', image: immageBa, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 2, title: 'Cầu Kỳ Tử', image: imgHai, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 3, title: 'Cầu khỉ', image: imgHai, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 4, title: 'Cầu Kỳ Tử', image: immageBa, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 5, title: 'Cầu Kỳ Tử', image: imgHai, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 6, title: 'Cầu Mong', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 7, title: 'Cầu Được ước thấy', image: immageBa, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 8, title: 'Cầu Kỳ Tử', image: imgHai, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 9, title: 'Cầu cho siu', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { id: 10, title: 'Cầu Kỳ Tử', image: imgHai, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  ]


  useEffect(() => {
    console.log(search);
  }, [search])



  return (
    <Box component="section" sx={{ width: "90rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <HerosDeatail />
      <Searching setSearch={setSearch} />
      <PaginationLayout data={plants} serachText={search} />
      <Footer />
    </Box>
  )
}
