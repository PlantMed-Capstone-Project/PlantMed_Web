import { Box } from '@mui/material'
import Header from 'components/Header/Header'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import Searching from 'components/Searching/Searching'
import { useEffect, useState } from 'react'

export default function PlantPage() {

  const [search, setSearch] = useState()

  useEffect(() => {
    console.log(search);
  }, [search])


  return (
    <Box component="section" sx={{ width: "90rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <HerosDeatail pages="plant" />
      <Searching setSearch={setSearch} />
    </Box>
  )
}
