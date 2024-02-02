import { Pagination } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './CardBlog.styled'
import CardBlogList from './CardBlogList/CardBlogList'

function CardBlog({ data, valueSearch, positions }) {
    const [dataBlog, setDataBlog] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    let itemsPerPage = 3

    const getPosition = useRef()

    // hàm nhận giá trị thừ tags để render ra bài viết
    const searchSting = () => {
        if (valueSearch !== '' || valueSearch.length > 0) {
            const filteredData = data.filter((item) => {
                return item.tags.some((tag) =>
                    tag.tagName.includes(valueSearch)
                )
            })
            setCurrentPage(1)
            setDataBlog(filteredData)
        } else {
            setDataBlog(data)
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
    }, [valueSearch])

    // xử lý các giá trị scroll
    const handleScroll = () => {
        positions.scroll = window.pageYOffset
        positions.sectionHeight = getPosition.current.clientHeight
        positions.topContent = getPosition.current.offsetTop + 272
    }

    // kích hoạt sự kiện scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // cleanup side effect
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
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
                {displayedData.length &&
                    displayedData.map((vl, idx) => (
                        <CardBlogList key={data} item={vl} />
                    ))}
                <Pagination
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiPaginationItem-page': {
                            color: 'black', // Màu chữ của từng trang
                        },
                        '& .MuiPaginationItem-page.Mui-selected': {
                            color: '#69AD28',
                            backgroundColor: '#F4FFEB',
                            borderColor: '#69AD28',
                        },
                    }}
                    count={pageCount}
                    onChange={handlePagnating}
                />
            </styleMui.listBlog>
        </styleMui.container>
    )
}

export default CardBlog
