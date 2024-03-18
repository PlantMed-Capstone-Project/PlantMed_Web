import { Skeleton } from '@mui/material'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import * as styleMui from './approvalCard.styled'
import ApprovalCardList from './ApprovalCardList'
import SkeletonLoading from './SkeletonLoading'

function ApprovalCard({ setIndexData }) {
    const { data, loading } = useShallowEqualSelector((state) => state.blog)
    const [item, setItem] = useState([])
    const [dataSlice, setDataSlice] = useState(4)
    const maxRecordsReturned = 5
    useEffect(() => {
        setItem((state) => data.slice(0, 5))
    }, [data])

    // Hàm này sẽ kích hoạt mỗi khi thư viện cuộn đến thằng cuối cùng trong data
    const fetchMoreData = () => {
        setTimeout(() => {
            setItem(data.slice(0, dataSlice + maxRecordsReturned))
            setDataSlice(dataSlice + maxRecordsReturned)
        }, 1000)
    }

    return (
        <InfiniteScroll
            dataLength={item.length - 1}
            next={fetchMoreData}
            hasMore={item.length < data.length}
            loader={<SkeletonLoading />}
        >
            <styleMui.container
                direction="column"
                alignItems="center"
                spacing="3rem"
            >
                {loading ? (
                    Array.from(new Array(2)).map((vl, idx) => (
                        <Skeleton
                            key={idx}
                            variant="rectangular"
                            animation="wave"
                            sx={{
                                height: '18rem',
                                width: '100%',
                                borderRadius: '0.625rem',
                            }}
                        />
                    ))
                ) : item.length > 0 ? (
                    item.map((vl, idx) => (
                        <ApprovalCardList
                            key={vl.id}
                            item={vl}
                            idx={idx}
                            setIndexData={setIndexData}
                        />
                    ))
                ) : (
                    <styleMui.text>
                        Không có bài viết cần phê duyệt
                    </styleMui.text>
                )}
            </styleMui.container>
        </InfiniteScroll>
    )
}

export default ApprovalCard
