import { Skeleton } from '@mui/material'
import { StatusBlogCard } from 'components/StatusBlogCard'
import { useEffect, useState } from 'react'
import * as styleMui from './StatusBlogCardList.styled'

function StatusBlogCardList({ data, loading, setDataValue, likeBlog = false }) {
    const [item, setItem] = useState(data)

    useEffect(() => {
        setItem(data)
        console.log(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <styleMui.blogCardList direction="column" spacing="3rem">
            {loading ? (
                Array.from(new Array(2)).map((_, idx) => (
                    <Skeleton
                        key={idx}
                        variant="rectangular"
                        animation="wave"
                        sx={{
                            width: '64rem',
                            minHeight: '13.875rem',
                            borderRadius: '0.625rem',
                            alignItems: 'flex-start',
                        }}
                    />
                ))
            ) : item.length > 0 ? (
                item.map((vl, idx) => (
                    <StatusBlogCard
                        likeBlog={likeBlog}
                        key={vl.id}
                        idx={idx}
                        item={vl}
                        setDataValue={setDataValue}
                    />
                ))
            ) : (
                <styleMui.loadingText>
                    Hiện không có blog nào tồn tại
                </styleMui.loadingText>
            )}
        </styleMui.blogCardList>
    )
}

export default StatusBlogCardList
