import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogCardData } from 'FakeData/plantData'

function LikedBlog() {
    const [data, setData] = useState(blogCardData.slice(0, 3))
    const [lengData, setLengthData] = useState(2)
    const returnData = 3
    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(blogCardData.slice(0, lengData + returnData))
            setLengthData(lengData + returnData)
            if (lengData + returnData >= blogCardData.length) {
                setHasMore(false)
            }
        }, 1000)
    }

    return (
        <styleMui.container>
            <styleMui.blogContainer>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<styleMui.loadingText>Loading...</styleMui.loadingText>}
                >
                    <styleMui.blogCardList>
                        {data.length &&
                            data.map((item) => (
                                <StatusBlogCard
                                    key={item.id}
                                    title={item.title}
                                    author={item.author}
                                    description={item.description}
                                />
                            ))}
                    </styleMui.blogCardList>
                </InfiniteScroll>
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default LikedBlog
