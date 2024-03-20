import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { useEffect, useRef, useState } from 'react'
import StatusBlogCardList from 'components/StatusBlogCard/StatusBlogCardList'

function LikedBlog() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [indexData, setIndexData] = useState(null)
    const containerPopup = useRef()

    /*
    const getLikedBlog = async () => {
        setLoading(true)
        try {
            const res = await getPendingByUser()
            setData(res.data.slice(0, 3))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    */

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setIndexData(null)
        }
    }
    
    // Hủy scroll khi mở popup
    const disableScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft

        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    // mở scroll khi đóng popup
    const enableScroll = () => {
        window.onscroll = () => {}
    }

    useEffect(() => {
        if (data) {
            document.addEventListener('mousedown', handler)
            return () => {
                document.removeEventListener('mousedown', handler)
                enableScroll()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    useEffect(() => {
        if (indexData !== null) disableScroll()
        return () => enableScroll()
    }, [indexData])

    return (
        <styleMui.container>
            <styleMui.likedBlogContainer>
                <StatusBlogCardList
                    data={data}
                    setIndexData={setIndexData}
                    loading={loading}
                />
            </styleMui.likedBlogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default LikedBlog
