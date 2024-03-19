import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getActiveByUser, getPendingByUser } from 'rest/api/blog'

function MyBlog() {
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
    const [blogStatus, setBlogStatus] = useState(nabItem[0].label)
    const [allBlogActive, setAllBlogActive] = useState([])
    const [allBlogPending, setAllBlogPending] = useState([])
    const [data, setData] = useState([])
    const [lengData, setLengthData] = useState(2)
    const returnData = 3
    const [hasMore, setHasMore] = useState(true)
    const blogCardListRef = useRef(null)

    const handleChange = (event, newValue) => {
        setBlogStatus(newValue)
        if (newValue === 'Chờ phê duyệt') {
            getActiveBlog()
        } else {
            getPendingBlog()
        }
    }

    const getActiveBlog = async () => {
        try {
            const res = await getActiveByUser()
            setAllBlogActive(res.data)
            setData(allBlogActive.slice(0, 3))
        } catch (e) {
            console.log(e)
        }
    }

    const getPendingBlog = async () => {
        try {
            const res = await getPendingByUser()
            setAllBlogPending(res.data)
            setData(allBlogPending.slice(0, 3))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getActiveBlog()
        getPendingBlog()        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = () => {
        setTimeout(() => {
            setLengthData(lengData + returnData)
            if (lengData + returnData >= data.length) {
                setHasMore(false)
            }
        }, 500)
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
                    loader={<styleMui.loadingText>
                        Loading
                    </styleMui.loadingText>}
                >
                    <styleMui.blogCardList ref={blogCardListRef}>
                        {data.length > 0 ? (
                            data.map((item, idx) => (
                                <StatusBlogCard idx={idx} item={item} />
                            ))
                        ) : (
                            <styleMui.loadingText>
                                Hiện tại không có blog nào tồn tại
                            </styleMui.loadingText>
                        )}
                    </styleMui.blogCardList>
                </InfiniteScroll>
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
