import { blogDetail } from 'FakeData/plantData'
import CardBlog from 'components/CardBlog/CardBlog'
import TagSearch from 'components/TagSearch/TagSearch'
import { useState } from 'react'
import * as styleMui from './BlogListPage.styled'
import { useEffect } from 'react'

function BlogListPage() {
    const [tagSearch, setTagSearch] = useState('')
    const [positions, setPosition] = useState({
        scroll: null,
        topContent: null,
        sectionHeight: null,
    })
    const [rightHeight, setRightHeight] = useState({
        height: null,
    })
    const [isFixed, setIsFixed] = useState(false)
    const [isAbs, setIsAbs] = useState(false)

    const data = blogDetail

    const scrollValue = () => {
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
                    data={data}
                    valueSearch={tagSearch}
                    positions={positions}
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
