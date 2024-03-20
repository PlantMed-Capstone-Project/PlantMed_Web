import { Box, CardMedia, Skeleton, Stack } from '@mui/material'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { parseImg } from 'utils'
import * as styleMui from './SlideDetail.styled'
import './SlideShowCustom.css'

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add('active')
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener('click', () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on('created', () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on('animationStarted', (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function SlideDetail({ data, loading }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <Stack
            width="50%"
            height="100%"
            justifyContent="center"
            alignItems="flex-end"
            spacing="0.2rem"
        >
            {!loading && data ? (
                <>
                    {/* start of slide show on top */}
                    <styleMui.BoxStackTop
                        ref={sliderRef}
                        className="keen-slider"
                    >
                        {data.images?.map((vl, idx) => (
                            <Box
                                key={vl.id}
                                className={`keen-slider__slide number-slide${
                                    idx + 1
                                }`}
                                p="0.5rem"
                            >
                                <CardMedia
                                    sx={{
                                        height: '100%',
                                        borderRadius: 'calc(0.625rem - 0.5rem)',
                                    }}
                                    image={parseImg(vl.data)}
                                    title="ảnh chi tiết cây"
                                />
                            </Box>
                        ))}
                    </styleMui.BoxStackTop>

                    {/* End of slide show on top */}

                    {/* Start of thumnail on bottom */}

                    <styleMui.BoxStackBot
                        direction="row"
                        justifyContent="space-between"
                        ref={thumbnailRef}
                        className="keen-slider thumbnail"
                    >
                        {data.images?.map((value, idx) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                key={value.id}
                                className={`keen-slider__slide number-slide${
                                    idx + 1
                                }`}
                            >
                                <Box
                                    className="thum_slide"
                                    width="8.25rem"
                                    height="8.25rem"
                                    sx={{
                                        borderRadius: '0.625rem',
                                        boxShadow:
                                            ' 0px 4px 5px 0px rgba(33, 68, 0, 0.30)',
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: '100%',
                                            borderRadius: '0.625rem',
                                        }}
                                        image={parseImg(value.data)}
                                        title="các ảnh khác của cây"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </styleMui.BoxStackBot>

                    {/* End of thumnail on bottom */}
                </>
            ) : (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{
                        width: '40rem',
                        height: '46.575rem',
                        borderRadius: '0.625rem',
                    }}
                />
            )}
        </Stack>
    )
}
