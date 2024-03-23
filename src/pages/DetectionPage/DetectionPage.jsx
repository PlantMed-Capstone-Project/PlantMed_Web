import { Box, Stack, Typography } from '@mui/material'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import UploadImage from 'components/UploadImage/UploadImage'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import * as styleFromPlant from 'pages/Plant/PlantPage.styled'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import { AnimatePresence } from 'framer-motion'

export default function DetectionPage() {
    const { data, loading } = useShallowEqualSelector((state) => state.plant)
    const [dataPredic, setDataPredic] = useState(null)
    const [open, setOpen] = useState()
    const search = ''
    const dataPlant = [...data].sort((a, b) => b.totalSearch - a.totalSearch)
    const containerPopup = useRef()
    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setDataPredic(null)
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Hủy scroll khi mở popup
    const disableScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
        const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft

        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    // mở scroll khi đóng popup
    const enableScroll = () => {
        window.onscroll = () => {}
    }

    useEffect(() => {
        if (dataPredic !== null) {
            disableScroll()
            setOpen(true)
        }
        return () => enableScroll()
    }, [dataPredic])

    const handle = (value) => {
        setOpen(value)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90rem',
            }}
        >
            <UploadImage setDataPredic={setDataPredic} handle={handle} />
            <Stack
                direction="column"
                alignItems="center"
                spacing="0.9rem"
                mt="5rem"
            >
                <Typography
                    sx={{
                        color: '#214400',
                        fontWeight: '500',
                        fontSize: '2.2rem',
                    }}
                >
                    Tìm kiếm nổi bật
                </Typography>
                <PaginationLayout
                    data={dataPlant}
                    serachText={search}
                    topSearch
                    loading={loading}
                />
            </Stack>
            <styleFromPlant.popupContainer
                isopen={dataPredic !== null || open || undefined}
            >
                <styleFromPlant.activePopup
                    ref={containerPopup}
                    isopen={dataPredic !== null || open || undefined}
                >
                    <AnimatePresence>
                        {(dataPredic !== null || open) && (
                            <PopupInfo
                                setIndexData={setDataPredic}
                                predicPage
                            />
                        )}
                    </AnimatePresence>
                </styleFromPlant.activePopup>
            </styleFromPlant.popupContainer>
        </Box>
    )
}
