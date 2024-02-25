import imgDemo from 'Images/heroSen.jpg'
import immageBa from 'Images/heroSi.jpg'
import imgHai from 'Images/hiền nhân.jpg'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import Searching from 'components/Searching/Searching'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './PlantPage.styled'

export default function PlantPage() {
    const [search, setSearch] = useState('')
    const [indexData, setIndexData] = useState()

    const containerPopup = useRef()

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setIndexData(null)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const plants = [
        {
            id: 1,
            title: 'Cầu cổ Tử',
            image: immageBa,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 2,
            title: 'Cầu Kỳ Tử',
            image: imgHai,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 3,
            title: 'Cầu khỉ',
            image: imgHai,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 4,
            title: 'Cầu Kỳ Tử',
            image: immageBa,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 5,
            title: 'Cầu Kỳ Tử',
            image: imgHai,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 6,
            title: 'Cầu Mong',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 7,
            title: 'Cầu Được ước thấy',
            image: immageBa,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 8,
            title: 'Cầu Kỳ Tử',
            image: imgHai,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 9,
            title: 'Cầu cho siu',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 10,
            title: 'Cầu Kỳ Tử',
            image: imgHai,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
    ]

    return (
        <>
            <styleMui.container component="section">
                <HerosDeatail />
                <Searching setSearch={setSearch} />
                <PaginationLayout
                    data={plants}
                    serachText={search}
                    setIndexData={setIndexData}
                />
            </styleMui.container>
            <styleMui.popupContainer isopen={indexData != null}>
                <styleMui.activePopup
                    ref={containerPopup}
                    isopen={indexData != null}
                >
                    <AnimatePresence>
                        {indexData != null && <PopupInfo id={indexData} />}
                    </AnimatePresence>
                </styleMui.activePopup>
            </styleMui.popupContainer>
        </>
    )
}
