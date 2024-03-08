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
    const [search, setSearch] = useState('')
    const returnData = 3

    const filteredData = blogCardData.filter((item) =>
        formatText(item.title).includes(formatText(search))
    )

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(filteredData.slice(0, lengData + returnData))
            setLengthData(lengData + returnData)
            if (lengData + returnData >= filteredData.length) {
                setHasMore(false)
            }
        }, 1000)
    }

    const handleSearchChange = (value) => {
        setSearch(value)
        setData(filteredData.slice(0, 3))
        setLengthData(2)
        setHasMore(true)
    }

    return (
        <styleMui.container>
            <styleMui.likedBlogContainer>
                <Searching setSearch={handleSearchChange} />
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
