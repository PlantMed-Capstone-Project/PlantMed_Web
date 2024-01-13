import { Box } from '@mui/material'
import { plants } from 'FakeData/plantData'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import Searching from 'components/Searching/Searching'
import { useEffect, useState } from 'react'

export default function PlantPage() {
    const [search, setSearch] = useState('')
    const data = plants

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <Box
            component="section"
            sx={{
                width: '90rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <HerosDeatail />
            <Searching setSearch={setSearch} />
            <PaginationLayout data={data} serachText={search} />
        </Box>
    )
}
