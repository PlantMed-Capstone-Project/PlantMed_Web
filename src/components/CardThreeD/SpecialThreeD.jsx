import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box } from '@mui/material'
import { useState } from 'react'
import * as styleMui from './SpecialThreeD.styled'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import CardThreeD from './CardThreeDList/CardThreeDList'

function SpecialThreeD({ width, height, cards }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [btnHover, setBtnHover] = useState(null)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: 'free-snap',
        dragSpeed: 0.5,
        slides: {
            origin: 'center',
            perView: 4,
            spacing: 10,
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })
    // const [cards] = useState(table)

    const btnTriggerSlide = [
        {
            id: 1,
            icon: <KeyboardArrowLeftIcon sx={styleMui.iconStyle} />,
        },
        {
            id: 2,
            icon: <KeyboardArrowRightIcon sx={styleMui.iconStyle} />,
        },
    ]

    const nextSlide = () => {
        instanceRef.current?.next()
    }

    const prevSlide = () => {
        instanceRef.current?.prev()
    }

    const handleHoverBtn = (id) => {
        setBtnHover(id)
    }

    return (
        <Box
            sx={{
                width: width,
                height: height,
                position: 'relative',
            }}
        >
            <Box ref={sliderRef} className="keen-slider">
                {cards.map((cardData, index) => (
                    <Box key={index} className="keen-slider__slide">
                        {currentSlide !== index ? (
                            <CardThreeD data={cardData} opacity={'0.8'} />
                        ) : (
                            <CardThreeD data={cardData} scale={'1.05'} />
                        )}
                    </Box>
                ))}
            </Box>

            {instanceRef.current &&
                btnTriggerSlide.map((vl, idx) => (
                    <styleMui.ContainerIcon
                        key={vl.id}
                        id={vl.id}
                        isHover={btnHover}
                        onClick={vl.id === 1 ? prevSlide : nextSlide}
                        onMouseEnter={() => handleHoverBtn(vl.id)}
                        onMouseLeave={() => setBtnHover(null)}
                    >
                        {vl.icon}
                    </styleMui.ContainerIcon>
                ))}
        </Box>
    )
}

export default SpecialThreeD
