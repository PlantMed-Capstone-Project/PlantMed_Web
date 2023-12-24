import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import herosFImage from '../../Images/herogreen.jpg'
import herosSImage from '../../Images/heroSi.jpg'
import herosThImage from '../../Images/heroSen.jpg'
import { Box } from '@mui/material'

export default function Heros() {

    const sliderImage = [herosFImage, herosSImage, herosThImage]

    // vi ly do su dung thu vien nen se phai su dung class
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <Box ref={sliderRef} className='keen-slider' sx={{ height: '37.5rem', width: "100%", position: "relative", zIndex: "0" }}>
            {
                sliderImage.map((vl, idx) => (
                    <Box key={idx} className={`keen-slider__slide number-slide${idx + 1}`} sx={{ width: "100%", height: "100%" }} >
                        <img key={idx} src={vl} alt="picture" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                    </Box>
                ))
            }
        </Box>
    )
}
