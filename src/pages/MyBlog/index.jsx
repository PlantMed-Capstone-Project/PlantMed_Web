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
    // Dưới đây là các state sẽ được sử dụng trong quá trình remake
    const [loadingActive, setloadingActive] = useState(null)
    const [loaidngApproval, setLoadingApproval] = useState(null)
    const [dataActive, setDataActive] = useState([])
    const [dataApproval, setdDataApproval] = useState([])

    const [dataValue, setDataValue] = useState(null)
    const [blogStatus, setBlogStatus] = useState(nabItem[0].label)

    const containerPopup = useRef()

    const handleChange = (_, newValue) => {
        setBlogStatus(newValue)
    }

    const getActiveBlog = async () => {
        setloadingActive(true)
        try {
            const res = await getActiveByUser()
            setDataActive(res.data)
        } catch (e) {
            console.log(e)
        } finally {
            setloadingActive(false)
        }
    }

    const getPendingBlog = async () => {
        setLoadingApproval(true)
        try {
            const res = await getPendingByUser()
            setdDataApproval(res.data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingApproval(false)
        }
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

    useEffect(() => {
        getPendingBlog()
        getActiveBlog()
    }, [])

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
                    data={
                        blogStatus === nabItem[0].label
                            ? dataApproval
                            : dataActive
                    }
                    setDataValue={setDataValue}
                    loading={
                        blogStatus === nabItem[0].label
                            ? loaidngApproval
                            : loadingActive
                    }
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
