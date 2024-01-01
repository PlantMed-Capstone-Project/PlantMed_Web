import { Box, Stack } from '@mui/material';
import { getIdPlant } from 'FakeData/plantData';
import Header from 'components/Header/Header';
import HerosDeatail from 'components/HerosDeatail/HerosDeatail';
import InforDetail from 'components/InforDetail/InforDetail';
import SlideDetail from 'components/SlideDetail/SlideDetail';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailPage() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = Number(searchParams.get('id'))
  const data = getIdPlant(id)

  useEffect(() => {
    // khi navigate sang trang khác phải sử dụng cái này để cho nó up to đầu trang 
    window.scrollTo(0, 0);
  }, [searchParams])


  return (
    <Box component="section" sx={{ width: "90rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <HerosDeatail />
      <Stack direction="row" width="90rem" height="56.0625rem" mt="3rem" sx={{ backgroundColor: "#F4FFEB" }}>
        <SlideDetail data={data} />
        <InforDetail />
      </Stack>
    </Box>
  )
}
