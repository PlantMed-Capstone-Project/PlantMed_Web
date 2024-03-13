import { blogDetail } from 'FakeData/plantData'
import CardBlog from 'components/CardBlog/CardBlog'
import TagSearch from 'components/TagSearch/TagSearch'
import { useState } from 'react'
import * as styleMui from './BlogListPage.styled'
import { useEffect } from 'react'
import { getActiveBlog } from 'rest/api/blog'
import useScrollTo from 'hooks/useScrollTo'

function BlogListPage() {
    const [tagSearch, setTagSearch] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [positions, setPosition] = useState({
        scroll: null,
        topContent: null,
        sectionHeight: null,
    })
    // eslint-disable-next-line no-unused-vars
    const [rightHeight, setRightHeight] = useState({
        height: null,
    })
    const [isFixed, setIsFixed] = useState(false)
    const [isAbs, setIsAbs] = useState(false)
    const [dataBlog, setDataBlog] = useState([])
    const [loading, setLoading] = useState(false)
    useScrollTo(0, 0)
    const data = blogDetail

    const scrollValue = () => {
        // tính giá trị của cuối element, và trừ cho 320 để giảm giá trị, và kích hoạt animate sớm nhất
        const bottomStop =
            positions.topContent +
            positions.sectionHeight -
            rightHeight.height -
            320

        if (
            positions.scroll > positions.topContent &&
            positions.scroll < bottomStop
        ) {
            setIsFixed(true)
            setIsAbs(false)
        } else if (positions.scroll > bottomStop) {
            setIsFixed(false)
            setIsAbs(true)
        } else if (positions.scroll < positions.topContent) {
            setIsFixed(false)
            setIsAbs(false)
        }
    }

    const fetchBlog = async () => {
        setLoading(true)
        try {
            const response = await getActiveBlog()
            setDataBlog(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollValue, { passive: true })
        fetchBlog()
        // cleanup side effect
        return () => {
            window.removeEventListener('scroll', scrollValue)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <styleMui.container
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <styleMui.ctnComponent>
                <CardBlog
                    data={dataBlog}
                    valueSearch={tagSearch}
                    positions={positions}
                    loading={loading}
                />
                <TagSearch
                    data={data}
                    setTagSearch={setTagSearch}
                    rightHeight={rightHeight}
                    isFixed={isFixed}
                    isAbs={isAbs}
                />
            </styleMui.ctnComponent>
        </styleMui.container>
    )
}

export default BlogListPage
