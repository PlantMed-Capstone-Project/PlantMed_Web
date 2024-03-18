import { Box } from '@mui/material'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
import CardThreeD from './CardThreeDList/CardThreeDList'

function SpecialThreeD({}) {
    const { data, loading } = useShallowEqualSelector((state) => state.plant)
    let dataPlant = data.slice(0, 8)

    useEffect(() => {
        dataPlant = data.slice(0, 8)
    }, [data])

    return (
        <Box
            sx={{
                position: 'relative',
                overflowX: 'hidden',
                width: '100%',
            }}
        >
            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                freeMode={true}
                centeredSlides={false}
                loop={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {(loading ? Array.from(new Array(8)) : dataPlant).map(
                    (vl, idx) => (
                        <SwiperSlide key={idx}>
                            <CardThreeD data={vl} />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </Box>
    )
}

export default SpecialThreeD
