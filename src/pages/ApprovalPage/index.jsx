import { Stack } from '@mui/material'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import ApprovalCard from 'components/approvalCard'
import { AnimatePresence } from 'framer-motion'
import * as styleFromPlant from 'pages/Plant/PlantPage.styled'
import { useEffect, useRef, useState } from 'react'
import { getApproval } from 'rest/api/blog'

export default function ApprovalPage() {
    const [indexData, setIndexData] = useState()
    const [data, setData] = useState([])

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
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)
        getBlog()
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
