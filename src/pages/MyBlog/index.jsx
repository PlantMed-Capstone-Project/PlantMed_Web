import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getActiveByUser, getPendingByUser } from 'rest/api/blog'
import StatusBlogCardList from 'components/StatusBlogCard/StatusBlogCardList'

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
    const [data, setData] = useState([])
    const [blogStatus, setBlogStatus] = useState(nabItem[0].label)

    const handleChange = async (event, newValue) => {
        setBlogStatus(newValue)
        newValue === nabItem[0].label
            ? await getPendingBlog()
            : await getActiveBlog()
    }

    const getActiveBlog = async () => {
        try {
            const res = await getActiveByUser()
            setData(res.data.slice(0, 3))
            console.log('Active blog data:', res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getPendingBlog = async () => {
        try {
            const res = await getPendingByUser()
            setData(res.data.slice(0, 3))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        blogStatus === nabItem[0].label ? getPendingBlog() : getActiveBlog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                <StatusBlogCardList data={data} loading={false} />
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
