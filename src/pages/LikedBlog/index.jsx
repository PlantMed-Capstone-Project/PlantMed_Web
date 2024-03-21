import { ProfileSidebar } from 'components/Profile'
import StatusBlogCardList from 'components/StatusBlogCard/StatusBlogCardList'
import { ACCESS_TOKEN } from 'constant'
import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { useEffect, useState } from 'react'
import { getActiveBlog } from 'rest/api/blog'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'

function LikedBlog() {
    const [loading, setLoading] = useState(true)
    const [dataValue, setDataValue] = useState(null)
    const [userInfo] = useState(parseJwt(readCookie(ACCESS_TOKEN)))
    const [dataBlog, setdataBlog] = useState([])

    // gọi api của blog active và sau đó add vào redux
    const getLikedBlog = async () => {
        setLoading(true)
        try {
            const response = await getActiveBlog()
            setdataBlog(() =>
                response.data.filter((vl) => {
                    return vl.userLike.some(
                        (vl) => vl.email === userInfo?.Email
                    )
                })
            )
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLikedBlog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <styleMui.container>
            <styleMui.likedBlogContainer>
                <StatusBlogCardList
                    setDataValue={setDataValue}
                    loading={loading}
                    data={dataBlog}
                    likeBlog
                />
            </styleMui.likedBlogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default LikedBlog
