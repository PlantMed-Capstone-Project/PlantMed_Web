import { Box } from '@mui/material'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as styleMui from './SpecialThreeD.styled'
// icon MUI
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { motion } from 'framer-motion'
import { Navigation } from 'swiper/modules'
import CardThreeD from './CardThreeDList/CardThreeDList'

const iconStyle = {
    color: '#69AD28',
    height: '3rem',
    width: '3rem',
}

function SpecialThreeD({}) {
    const varianAnimation = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    }
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
            component={motion.div}
            variants={varianAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
        >
            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                freeMode={true}
                centeredSlides={false}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                grabCursor={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {(loading ? Array.from(new Array(8)) : dataPlant).map(
                    (vl, idx) => (
                        <SwiperSlide key={idx}>
                            <CardThreeD data={vl} idx={idx} />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
            <>
                <styleMui.btnPrv className="swiper-button-prev">
                    <KeyboardArrowLeftIcon sx={iconStyle} />
                </styleMui.btnPrv>
                <styleMui.btnNext className="swiper-button-next">
                    <KeyboardArrowRightIcon sx={iconStyle} />
                </styleMui.btnNext>
            </>
        </Box>
    )
}

export default SpecialThreeD
