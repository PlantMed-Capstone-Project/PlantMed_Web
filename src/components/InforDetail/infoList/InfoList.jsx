/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import * as styleMui from '../InforDetail.styled'
import { Skeleton } from '@mui/material'

function InfoList({ label, value, screenSlide, loading }) {
    const [desText, setDesText] = useState('')

    // Kiểm tra xem component đang hoạt động trong root nào
    const checkTypeDes = () => {
        if (screenSlide === 'popupscreen') {
            setDesText(() =>
                value?.length > 60 ? value.slice(0, 59) + '...' : value
            )
        } else {
            setDesText(value)
        }
    }

    useEffect(() => {
        checkTypeDes()
    }, [value])

    return (
        <styleMui.liContainer screen={screenSlide}>
            {loading ? (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ width: '100%' }}
                />
            ) : (
                <>
                    <styleMui.Dot screen={screenSlide}>•</styleMui.Dot>
                    <styleMui.TextList screen={screenSlide}>
                        {label}: {desText}
                    </styleMui.TextList>
                </>
            )}
        </styleMui.liContainer>
    )
}

export default InfoList
