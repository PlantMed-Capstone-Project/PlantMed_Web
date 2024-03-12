import { Stack } from '@mui/material'
import { approvalAction } from 'app/reducers/blogApproval'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import PopupInfo from 'components/PopupInfo/PopupInfo'
import ApprovalCard from 'components/approvalCard'
import { AnimatePresence } from 'framer-motion'
import useActions from 'hooks/useActions'
import * as styleFromPlant from 'pages/Plant/PlantPage.styled'
import { useEffect, useRef, useState } from 'react'
import { getApproval } from 'rest/api/blog'

export default function ApprovalPage() {
    const [indexData, setIndexData] = useState(null)
    const { storeBlog, storeBlogSuccessfull } = useActions(approvalAction)
    const containerPopup = useRef()

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setIndexData(null)
        }
    }

    const getBlog = async () => {
        storeBlog()
        try {
            const response = await getApproval()
            storeBlogSuccessfull(response.data)
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
                <ApprovalCard setIndexData={setIndexData} />
            </Stack>
            <styleFromPlant.popupContainer
                isopen={indexData !== null ? true : undefined}
            >
                <styleFromPlant.activePopup
                    ref={containerPopup}
                    isopen={indexData !== null ? true : undefined}
                >
                    <AnimatePresence>
                        {indexData !== null && (
                            <PopupInfo
                                id={indexData}
                                approvalPage
                                setIndexData={setIndexData}
                            />
                        )}
                    </AnimatePresence>
                </styleFromPlant.activePopup>
            </styleFromPlant.popupContainer>
        </>
    )
}
