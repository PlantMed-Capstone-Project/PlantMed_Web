import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogCardData } from 'FakeData/plantData'
import { getActiveByUser, getPendingByUser } from 'rest/api/blog'

function MyBlog() {
    const [blogStatus, setblogStatus] = useState('Chờ phê duyệt')
    const [allBlogActive, setAllBlogActive] = useState()
    const [allBlogPeding, setAllBlogPeding] = useState()
    const [data, setData] = useState([])
    const [lengData, setLengthData] = useState(2)
    const returnData = 3
    const [hasMore, setHasMore] = useState(true)
    const blogCardListRef = useRef(null)

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

    const getActiveBlog = async () => {
        try {
            const res = await getActiveByUser()
            setAllBlogActive(res.data)
            setData(res.data.slice(0, 3))
        } catch (e) {
            console.log(e)
        }
    }

    const getPedingBlog = async () => {
        try {
            const res = await getPendingByUser()
            setAllBlogPeding(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getActiveBlog()
        getPedingBlog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = () => {
        setTimeout(() => {
            setData(allBlogActive.slice(0, lengData + returnData))
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogCardListRef])

    return (
        <styleMui.container>
            <styleMui.blogContainer>
                <styleMui.tabContainer
                    value={blogStatus}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="#214400"
                    variant="fullWidth"
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
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
