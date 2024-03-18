import CardBlog from 'components/CardBlog/CardBlog'
import TagSearch from 'components/TagSearch/TagSearch'
import useScrollTo from 'hooks/useScrollTo'
import { useEffect, useState } from 'react'
import * as styleMui from './BlogListPage.styled'

function BlogListPage() {
    const [tagSearch, setTagSearch] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [positions] = useState({
        scroll: null,
        topContent: null,
        sectionHeight: null,
    })
    // eslint-disable-next-line no-unused-vars
    const [rightHeight] = useState({
        height: null,
    })
    const [isFixed, setIsFixed] = useState(false)
    const [isAbs, setIsAbs] = useState(false)

    useScrollTo(0, 0)

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

    useEffect(() => {
        window.addEventListener('scroll', scrollValue, { passive: true })
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
                <CardBlog valueSearch={tagSearch} positions={positions} />
                <TagSearch
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
