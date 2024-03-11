import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogCardData } from 'FakeData/plantData'

function MyBlog() {
    const [blogStatus, setblogStatus] = useState('Chờ phê duyệt')
    const [data, setData] = useState(blogCardData.slice(0, 3))
    const [lengData, setLengthData] = useState(2)
    const returnData = 3
    const [hasMore, setHasMore] = useState(true)

    const handleChange = (event, newValue) => {
        setblogStatus(newValue)
    }

    //Khai báo array các tab
    const nabItem = [
        {
            id: 1,
            label: 'Chờ phê duyệt',
            link: '',
        },
        {
            id: 2,
            label: 'Đã đăng',
            link: '',
        },
    ]

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
                <styleMui.tabContainer
                    value={blogStatus}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {nabItem?.map((item) => (
                        <styleMui.statusTab
                            component={Link}
                            to={item.link}
                            key={item.id}
                            label={item.label}
                            value={item.label}
                        />
                    ))}
                </styleMui.tabContainer>
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

export default MyBlog