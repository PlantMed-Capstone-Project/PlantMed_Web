import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import * as styleMui from './SpecialThreeD.styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const iconStyle = {
    height: '4rem',
    width: '4rem',
    color: '#69AD28',
}

function SpecialThreeD({ showArrows, width, height, cards }) {
    const checkX = useRef()

    const [goToSlide, setGoToSlide] = useState(null)
    const [btnHover, setBtnHover] = useState(null)
    // const [cards] = useState(table)

    const btnTriggerSlide = [
        {
            id: 1,
            icon: <KeyboardArrowLeftIcon sx={iconStyle} />,
        },
        {
            id: 2,
            icon: <KeyboardArrowRightIcon sx={iconStyle} />,
        },
    ]

    const nextSlide = () => {
        checkX.current.slickNext()
    }

    const prvSlide = () => {
        checkX.current.slickPrev()
    }

    const handleHoverBtn = (idx) => {
        setBtnHover(idx)
    }

    const settings = {
        dots: false,
        arrows: showArrows,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        slickNext: goToSlide,
        centerMode: true,
        afterChange: (index) => {
            setGoToSlide(index)
        },
    }

    return (
        <Box
            sx={{
                width: width,
                height: height,
                position: 'relative',
            }}
        >
            <Slider {...settings} ref={checkX} style={{ padding: '0 2rem' }}>
                {cards}
            </Slider>

            {btnTriggerSlide.map((vl, idx) => (
                <styleMui.ContainerIcon
                    key={vl.id}
                    id={vl.id}
                    ishover={btnHover}
                    onClick={vl.id === 1 ? prvSlide : nextSlide}
                    onMouseEnter={() => handleHoverBtn(idx)}
                    onMouseLeave={() => setBtnHover(null)}
                >
                    {vl.icon}
                </styleMui.ContainerIcon>
            ))}
        </Box>
    )
}

export default SpecialThreeD
