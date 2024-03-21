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
    const [dataValue, setDataValue] = useState(null)
    const [blogStatus, setBlogStatus] = useState(nabItem[0].label)
    const containerPopup = useRef()

    const handleChange = (_, newValue) => {
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

    useEffect(() => {
        blogStatus === nabItem[0].label ? getPendingBlog() : getActiveBlog()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blogStatus])

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

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!containerPopup.current?.contains(e.target)) {
            setDataValue(null)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (dataValue !== null) disableScroll()
        return () => enableScroll()
    }, [dataValue])

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
                    setDataValue={setDataValue}
                    loading={loading}
                />
            </styleMui.blogContainer>
            <styleFromPlant.popupContainer
                isopen={dataValue !== null || undefined}
            >
                <styleFromPlant.activePopup
                    ref={containerPopup}
                    isopen={dataValue !== null || undefined}
                >
                    <AnimatePresence>
                        {dataValue !== null && (
                            <PopupInfo approvalPage myBlogData={dataValue} />
                        )}
                    </AnimatePresence>
                </styleFromPlant.activePopup>
            </styleFromPlant.popupContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
