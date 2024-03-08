import { Stack } from '@mui/material'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ApprovalCardList from './approvalCardList'
import SkeletonLoading from './skeletonLoading'

function ApprovalCard({ data, setIndexData }) {
    const [item, setItems] = useState(data?.slice(0, 5))
    const [dataSlice, setDataSlice] = useState(4)

    const maxRecordsReturned = 5

    // Hàm này sẽ kích hoạt mỗi khi thư viện cuộn đến thằng cuối cùng trong data
    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(data?.slice(0, dataSlice + maxRecordsReturned))
            setDataSlice(dataSlice + maxRecordsReturned)
        }, 500)
    }

    return (
        <InfiniteScroll
            dataLength={item.length - 1}
            // style={{ display: 'flex', flexDirection: 'column-reverse' }}
            next={fetchMoreData}
            hasMore={item.length < data.length}
            loader={<SkeletonLoading />}
        >
            <Stack
                direction="column"
                alignItems="center"
                spacing="3rem"
                sx={{
                    height: 'auto',
                    width: '90rem',
                    marginTop: '8rem',
                    padding: '1rem 8rem',
                }}
            >
                {item.length &&
                    item.map((vl, idx) => (
                        <ApprovalCardList
                            key={vl.id}
                            item={vl}
                            idx={idx}
                            setIndexData={setIndexData}
                        />
                    ))}
            </Stack>
        </InfiniteScroll>
    )
}

export default ApprovalCard
