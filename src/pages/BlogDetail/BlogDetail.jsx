import { blogDetail } from 'FakeData/plantData'
import CardBlog from 'components/CardBlog/CardBlog'
import TagSearch from 'components/TagSearch/TagSearch'
import { useState } from 'react'
import * as styleMui from './BlogDetail.styled'
import { useEffect } from 'react'

function BlogDetail() {
    const [tagSearch, setTagSearch] = useState('')
    const [positions, setPosition] = useState({
        scroll: null,
        topContent: null,
        sectionHeight: null,
    })
    const [rightHeight, setRightHeight] = useState({
        height: null,
    })

    const data = blogDetail

    const scrollValue = () => {
        const bottomStop =
            positions.topContent +
            positions.sectionHeight -
            rightHeight.height -
            45

        if (
            positions.scroll > positions.topContent &&
            positions.scroll < bottomStop
        ) {
            console.log('đã scroll đến phần cần')
        } else if (positions.scroll > bottomStop) {
            console.log('scroll tới cuối mất rồi')
        } else if (positions.scroll < positions.topContent) {
            console.log('chua bắt đầu scroll')
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
                />
            </styleMui.ctnComponent>
        </styleMui.container>
    )
}

export default BlogDetail
