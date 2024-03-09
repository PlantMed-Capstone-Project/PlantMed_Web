import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogCardData } from 'FakeData/plantData'
import Searching from 'components/Searching/Searching'
import { formatText } from 'utils'

function LikedBlog() {
    const [data, setData] = useState(blogCardData.slice(0, 3))
    const [lengData, setLengthData] = useState(2)    
    const [hasMore, setHasMore] = useState(true)
    const returnData = 3

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
            <styleMui.likedBlogContainer>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <styleMui.loadingText>Loading...</styleMui.loadingText>
                    }
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
            </styleMui.likedBlogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default LikedBlog
