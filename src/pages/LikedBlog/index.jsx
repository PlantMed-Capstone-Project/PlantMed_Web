import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { useEffect, useRef, useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogCardData } from 'FakeData/plantData'

function LikedBlog() {
    const [data, setData] = useState(blogCardData.slice(0, 3))
    const [lengData, setLengthData] = useState(2)
    const [hasMore, setHasMore] = useState(true)
    const returnData = 3
    const blogCardListRef = useRef(null)

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(blogCardData.slice(0, lengData + returnData))
            setLengthData(lengData + returnData)
            if (lengData + returnData >= blogCardData.length) {
                setHasMore(false)
            }
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
            window.pageYOffset || document.documentElement.scrollTop
        const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft

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
    }, [blogCardListRef])

    return (
        <styleMui.container>
            <styleMui.likedBlogContainer>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <styleMui.loadingText>Loading...</styleMui.loadingText>
                    }
                >
                    <styleMui.blogCardList ref={blogCardListRef}>
                        {data.length &&
                            data.map((item, idx) => (
                                <StatusBlogCard
                                    idx={idx}
                                    key={item.id}
                                    title={item.title}
                                    author={item.author}
                                    description={item.description}
                                />
                            ))}
                    </styleMui.blogCardList>
                </InfiniteScroll>
            </styleMui.likedBlogContainer>
            <ProfileSidebar height={'calc(100vh - 8rem)'} />
        </styleMui.container>
    )
}

export default LikedBlog
