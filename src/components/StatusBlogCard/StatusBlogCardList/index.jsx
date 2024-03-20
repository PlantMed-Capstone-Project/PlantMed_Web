import * as styleMui from './StatusBlogCardList.styled'
import { useEffect, useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Skeleton } from '@mui/material'

function StatusBlogCardList({ data, loading, setIndexData }) {
    const [item, setItem] = useState([])
    const [dataSlice, setDataSlice] = useState(2)
    const maxRecordsReturned = 3
    useEffect(() => {
        setItem(() => data)
    }, [data])

    const fetchMoreData = () => {
        setTimeout(() => {
            setItem(data.slice(0, dataSlice + maxRecordsReturned))
            setDataSlice(dataSlice + maxRecordsReturned)
        }, 1000)
    }

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={item.length < data.length}
            loader={<styleMui.loadingText>Loading...</styleMui.loadingText>}
        >
            <styleMui.blogCardList
                direction="column"
                alignItems="flex-start"
                spacing="5rem"
            >
                {data.length > 0 ? (
                    (loading ? Array.from(new Array(2)) : item).map((vl, idx) =>
                        vl ? (
                            <StatusBlogCard
                                key={vl.id}
                                idx={idx}
                                item={vl}
                                setIndexData={setIndexData}
                            />
                        ) : (
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
                        )
                    )
                ) : (
                    <styleMui.loadingText>
                        Hiện không có blog nào tồn tại
                    </styleMui.loadingText>
                )}
            </styleMui.blogCardList>
        </InfiniteScroll>
    )
}

export default StatusBlogCardList
