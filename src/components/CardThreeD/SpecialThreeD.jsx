import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import { config } from 'react-spring'
import Carousel from 'react-spring-3d-carousel'
import * as styleMui from './SpecialThreeD.styled'

const iconStyle = {
    height: '4rem',
    width: '4rem',
    color: '#69AD28',
}

function SpecialThreeD(props) {
    const checkX = useRef()

    // const table = props.cards.map((element, index) => {
    //     return { ...element, onClick: () => setGoToSlide(index) }
    // })

    const [offsetRadius, setOffsetRadius] = useState(props.offset)
    const [showArrows, setShowArrows] = useState(props.showArrows)
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
        setGoToSlide((state) => state + 1)
    }

    const prvSlide = () => {
        setGoToSlide((state) => state - 1)
    }

    const handleHoverBtn = (idx) => {
        setBtnHover(idx)
    }

    return (
        <Box
            sx={{
                width: props.width,
                height: props.height,
                margin: props.margin,
                position: 'relative',
            }}
        >
            <Carousel
                slides={props.cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
                ref={checkX}
            />

            {btnTriggerSlide.map((vl, idx) => (
                <styleMui.ContainerIcon
                    id={vl.id}
                    ishover={btnHover}
                    onClick={vl.id === 1 ? prvSlide : nextSlide}
                    onMouseEnter={() => handleHoverBtn(idx + 1)}
                    onMouseLeave={() => setBtnHover(null)}
                >
                    {vl.icon}
                </styleMui.ContainerIcon>
            ))}
        </Box>
    )
}

export default SpecialThreeD
