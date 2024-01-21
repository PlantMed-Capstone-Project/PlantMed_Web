import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'

function SpecialThreeD(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) }
    })

    const [offsetRadius, setOffsetRadius] = useState(2)
    const [showArrows, setShowArrows] = useState(false)
    const [goToSlide, setGoToSlide] = useState(null)
    const [cards] = useState(table)

    useEffect(() => {
        setOffsetRadius(props.offset)
        setShowArrows(props.showArrows)
    }, [props.offset, props.showArrows])

    return (
        <Box
            sx={{
                width: props.width,
                height: props.height,
                margin: props.margin,
            }}
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </Box>
    )
}

export default SpecialThreeD
