import { Skeleton } from '@mui/material'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect, useState } from 'react'
import { CardList } from '.'
import * as styleMui from './BlogApproval.styled'
import { blogDetail } from 'FakeData/plantData'

export function BlogApprovalCard({ setIndexData }) {
    const { data, loading } = useShallowEqualSelector((state) => state.blog)
    const [item, setItem] = useState([])
    const fakeData = blogDetail
    // useEffect(() => {
    //     setItem(data.slice(0, 6))
    // }, [data])

    // Hàm này sẽ kích hoạt mỗi khi thư viện cuộn đến thằng cuối cùng trong data
    // const fetchMoreData = () => {
    //     setTimeout(() => {
    //         setItem(data.slice(0, dataSlice + maxRecordsReturned))
    //         setDataSlice(dataSlice + maxRecordsReturned)
    //     }, 1000)
    // }

    return (
        <styleMui.container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
        >
            {/* {loading ? (
                Array.from(new Array(2)).map((_, idx) => (
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
                    <CardList
                        key={vl.id}
                        item={vl}
                        idx={idx}
                        setIndexData={setIndexData}
                    />
                ))
            ) : (
                <styleMui.text>Không có bài viết cần phê duyệt</styleMui.text>
            )} */}
            {fakeData.map((vl, idx) => (
                <CardList
                    key={vl.id}
                    item={vl}
                    idx={idx}
                    setIndexData={setIndexData}
                />
            ))}
        </styleMui.container>
    )
}
