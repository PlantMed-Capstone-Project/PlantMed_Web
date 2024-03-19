import * as styleMui from './StatusBlogCardList.styled'
import { useEffect, useRef, useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import SkeletonLoading from 'components/approvalCard/skeletonLoading'
import { Skeleton } from '@mui/material'

function StatusBlogCardList({ setIndexData }) {
    const [item, setItem] = useState([])
    const [dataSlice, setDataSlice] = useState(2)
    const maxRecordsReturned = 3
    const blogCardListRef = useRef(null)

    const fetchMoreData = () => {
        setTimeout(() => {
            setItem(data.slice(0, dataSlice + maxRecordsReturned))
            setDataSlice(dataSlice + maxRecordsReturned)
        }, 1000)
    }

    const handleMouseEnter = () => {
        disableScroll()
    }

    const handleMouseLeave = () => {
        enableScroll()
    }

    // Hủy scroll khi mở popup
    const disableScroll = () => {
        const scrollTop =
            window.scrollY || document.documentElement.scrollTop
        const scrollLeft =
            window.scrollX || document.documentElement.scrollLeft

        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    // mở scroll khi đóng popup
    const enableScroll = () => {
        window.onscroll = () => {}
    }

    useEffect(() => {
        const blogCardList = blogCardListRef.current
        if (blogCardList) {
            blogCardList.addEventListener('mouseenter', handleMouseEnter)
            blogCardList.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                blogCardList.removeEventListener('mouseenter', handleMouseEnter)
                blogCardList.removeEventListener('mouseleave', handleMouseLeave)
                enableScroll()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogCardListRef])

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={item.length < data.length}
            loader={<SkeletonLoading />}
        >
            <styleMui.blogCardList
                ref={blogCardListRef}
                direction="column"
                alignItems="center"
                spacing="5rem"
            >
                {data.length > 0 ? (
                    (loading ? Array.from(new Array(2)) : item).map((vl, idx) =>
                        vl ? (
                            <StatusBlogCard idx={idx} item={item}/>
                        ) : (
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
                        )
                    )
                ) : (
                    <styleMui.loadingText>
                        Hiện giờ không có blog nào tồn tại
                    </styleMui.loadingText>
                )}
            </styleMui.blogCardList>
        </InfiniteScroll>
    )
}

export default StatusBlogCardList
