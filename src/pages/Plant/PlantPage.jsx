import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import Searching from 'components/Searching/Searching'
import { AnimatePresence } from 'framer-motion'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './PlantPage.styled'

export default function PlantPage() {
    const { data, loading } = useShallowEqualSelector((state) => state.plant)
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

    return (
        <>
            <styleMui.container component="section">
                <HerosDeatail />
                <Searching setSearch={setSearch} />
                <PaginationLayout
                    data={data}
                    serachText={search}
                    setIndexData={setIndexData}
                    loading={loading}
                />
            </styleMui.container>
            <styleMui.popupContainer isopen={indexData}>
                <styleMui.activePopup ref={containerPopup} isopen={indexData}>
                    <AnimatePresence>
                        {indexData && <PopupInfo id={indexData} />}
                    </AnimatePresence>
                </styleMui.activePopup>
            </styleMui.popupContainer>
        </>
    )
}
