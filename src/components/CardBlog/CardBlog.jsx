import { Skeleton } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './CardBlog.styled'
import CardBlogList from './CardBlogList/CardBlogList'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'

function CardBlog({ valueSearch, positions }) {
    const { blogActive, loading } = useShallowEqualSelector(
        (state) => state.blog
    )
    const [dataBlog, setDataBlog] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    let itemsPerPage = 6
    const topQuantity = 272

    const getPosition = useRef()

    // hàm nhận giá trị thừ tags để render ra bài viết
    const searchSting = () => {
        if (valueSearch !== '' || valueSearch.length > 0) {
            const filteredData = blogActive.filter((item) => {
                return item.tags.some((tag) =>
                    tag.tagName.includes(valueSearch)
                )
            })
            setCurrentPage(1)
            setDataBlog(filteredData)
        } else {
            setDataBlog(blogActive)
        }
    }

    // kích hoạt việc click vào các tags
    useEffect(() => {
        let searching = true
        if (searching) {
            searchSting()
        }
        // clean up function
        return () => {
            searching = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSearch])

    useEffect(() => {
        setDataBlog(blogActive)
    }, [blogActive])

    // xử lý các giá trị scroll
    const handleScroll = () => {
        // đây là giá trị khi cuộn trang và có xu hướng tăng dần khi cuộn xuống
        positions.scroll = window.pageYOffset
        // đây là giá trị chiều cao của element đó
        positions.sectionHeight = getPosition.current.clientHeight
        // đây là giá trị tính từ đỉnh của element đến đầu trang
        positions.topContent = getPosition.current.offsetTop + topQuantity
    }

    // kích hoạt sự kiện scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // cleanup side effect
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // xac dinh so trang
    const pageCount = Math.ceil(dataBlog?.length / itemsPerPage)

    // xac dinh san pham nao se duoc render
    const displayedData = dataBlog?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }

    return (
        <styleMui.container ref={getPosition}>
            <styleMui.mainTitle>
                <styleMui.title>Bài viết nổi bật</styleMui.title>
                <styleMui.subTitle>
                    Tổng hợp các bài viết chia sẽ kinh nghiệm và kiến thức của
                    các loại cây thuốc nam
                </styleMui.subTitle>
            </styleMui.mainTitle>
            <styleMui.listBlog>
                {(loading ? Array.from(new Array(3)) : displayedData).map(
                    (vl, idx) =>
                        vl ? (
                            <CardBlogList
                                key={blogActive}
                                item={vl}
                                idx={idx}
                            />
                        ) : (
                            <Skeleton
                                animation="wave"
                                variant="rectangular"
                                sx={{
                                    width: '100%',
                                    height: '16rem',
                                    borderRadius: '1rem',
                                }}
                            />
                        )
                )}
                <styleMui.pagination
                    count={pageCount}
                    onChange={handlePagnating}
                />
            </styleMui.listBlog>
        </styleMui.container>
    )
}

export default CardBlog
