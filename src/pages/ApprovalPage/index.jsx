import { Stack } from '@mui/material'
import { blogDetail } from 'FakeData/plantData'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import ApprovalCard from 'components/approvalCard'
import React, { useEffect, useRef, useState } from 'react'
import * as styleFromPlant from 'pages/Plant/PlantPage.styled'
import { AnimatePresence } from 'framer-motion'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import { getApproval } from 'rest/api/blog'

export default function ApprovalPage() {
    const [indexData, setIndexData] = useState()

    let data

    const containerPopup = useRef()

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setIndexData(null)
        }
    }

    const getBlog = async () => {
        try {
            const response = await getApproval()
            console.log('blog pending:', response.data)
            data = response
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)
        getBlog()

        return () => document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <>
            <Stack
                direction="column"
                alignItems="center"
                sx={{ width: '100%' }}
            >
                <HeroBlog approvalPage />
                <ApprovalCard data={data} setIndexData={setIndexData} />
            </Stack>
            <styleFromPlant.popupContainer isopen={indexData}>
                <styleFromPlant.activePopup
                    ref={containerPopup}
                    isopen={indexData}
                >
                    <AnimatePresence>
                        {indexData && <PopupInfo id={indexData} approvalPage />}
                    </AnimatePresence>
                </styleFromPlant.activePopup>
            </styleFromPlant.popupContainer>
        </>
    )
}
