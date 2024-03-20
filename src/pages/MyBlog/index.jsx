import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getActiveByUser, getPendingByUser } from 'rest/api/blog'
import StatusBlogCardList from 'components/StatusBlogCard/StatusBlogCardList'
import * as styleFromPlant from 'pages/Plant/PlantPage.styled'
import { AnimatePresence } from 'framer-motion'
import PopupInfo from 'components/PopupInfo/PopupInfo'

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
    const [loading, setLoading] = useState(true)
    const [indexData, setIndexData] = useState(null)
    const [blogStatus, setBlogStatus] = useState(nabItem[0].label)
    const containerPopup = useRef()

    const handleChange = (event, newValue) => {
        setBlogStatus(newValue)
    }

    const getActiveBlog = async () => {
        setLoading(true)
        try {
            const res = await getActiveByUser()
            setData(res.data.slice(0, 3))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    const getPendingBlog = async () => {
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
        blogStatus === nabItem[0].label ? getPendingBlog() : getActiveBlog()
        if (data) {
            document.addEventListener('mousedown', handler)
            return () => {
                document.removeEventListener('mousedown', handler)
                enableScroll()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogStatus])

    useEffect(() => {
        if (indexData !== null) disableScroll()
        return () => enableScroll()
    }, [indexData])

    return (
        <styleMui.container>
            <styleMui.blogContainer>
                <styleMui.tabContainer
                    value={blogStatus}
                    aria-label="basic tabs example"
                    textColor="#214400"
                    variant="fullWidth"
                    onChange={handleChange}
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
                <StatusBlogCardList
                    data={data}
                    setIndexData={setIndexData}
                    loading={loading}
                />
            </styleMui.blogContainer>
            <styleFromPlant.popupContainer
                isopen={indexData !== null ? true : undefined}
            >
                <styleFromPlant.activePopup
                    ref={containerPopup}
                    isopen={indexData !== null ? true : undefined}
                >
                    <AnimatePresence>
                        {indexData !== null && (
                            <PopupInfo
                                id={indexData}
                                approvalPage
                                setIndexData={setIndexData}
                            />
                        )}
                    </AnimatePresence>
                </styleFromPlant.activePopup>
            </styleFromPlant.popupContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
