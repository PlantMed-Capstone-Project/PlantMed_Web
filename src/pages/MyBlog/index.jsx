import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getActiveByUser, getPendingByUser } from 'rest/api/blog'
import StatusBlogCardList from 'components/StatusBlogCard/StatusBlogCardList'

function MyBlog() {
    const [indexData, setIndexData] = useState(null)
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
                <StatusBlogCardList setIndexData={setIndexData}/>                
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
