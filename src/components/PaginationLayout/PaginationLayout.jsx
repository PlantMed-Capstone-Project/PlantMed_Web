import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import { Skeleton, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatText } from 'utils'
import * as styleMui from './Pagination.styled'

function PaginationLayout({
    data,
    serachText,
    setIndexData,
    topSearch = false,
    loading,
}) {
    const [isHover, setIshover] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [lazyLoadedData, setLazyLoadedData] = useState([])
    const [isSearching, setIsSearching] = useState(null)
    const navigate = useNavigate()
    let itemsPerPage = 6

    //Hàm chọn ra các phần tử cần được loading === lazyload
    const loadMoreData = () => {
        const startIndex = lazyLoadedData.length
        const newData = data.slice(startIndex, startIndex + itemsPerPage)
        setLazyLoadedData((prevData) => [...prevData, ...newData])
    }

    // Hàm mang chức năng tìm kiếm
    const searching = () => {
        if (serachText.length > 0) {
            const searchAll = data?.filter((value) => {
                return formatText(value.name).includes(serachText)
            })
            setCurrentPage(1)
            setLazyLoadedData(searchAll)
            setIsSearching(true)
        } else {
            setLazyLoadedData(data)
            setIsSearching(false)
        }
    }

    // Gọi và sử dụng các func
    useEffect(() => {
        loadMoreData()
        searching()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serachText, data.length, currentPage])

    const hoverEnter = (idx) => {
        setIshover(idx)
    }

    const hoverLeave = () => {
        setIshover(null)
    }

    const handleClick = (id) => {
        if (!setIndexData) {
            navigate(`/plants/${id}`)
        } else {
            setIndexData(id)
        }
    }

    // xac dinh so trang
    const pageCount = Math.ceil(data?.length / itemsPerPage)

    // xac dinh san pham nao se duoc render
    const displayedData = lazyLoadedData?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }
    return (
        <styleMui.container
            direction="row"
            justifyContent="flex-start  "
            alignItems="flex-start"
        >
            {(loading ? Array.from(new Array(6)) : displayedData).map(
                (vl, idx) => (
                    <styleMui.card
                        component={motion.div}
                        key={vl?.id || idx}
                        isskeleton={vl}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.2,
                        }}
                        onClick={() => handleClick(vl.id)}
                    >
                        <styleMui.title
                            sx={{ opacity: isHover === idx ? '0' : '1' }}
                        >
                            {vl ? vl.name : <Skeleton animation="wave" />}
                        </styleMui.title>
                        {vl ? (
                            <styleMui.boxImage
                                component={motion.div}
                                whileHover={{ y: '-16%' }}
                                onMouseEnter={() => hoverEnter(idx)}
                                onMouseLeave={hoverLeave}
                            >
                                <img
                                    src={`data:image/png;base64,${vl.images[0].data}`}
                                    alt=""
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '0.625rem',
                                        objectPosition: '0 0',
                                    }}
                                />

                                {/* Start opacity black background */}
                                {isHover === idx && (
                                    <styleMui.BoxBlackHover
                                        component={motion.div}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <styleMui.subTitle>
                                            {vl.name}
                                        </styleMui.subTitle>
                                        <Stack
                                            direction="column"
                                            alignItems="center"
                                            sx={{
                                                p: '0 3rem',
                                                mt: '0.7rem',
                                                gap: '1.1rem',
                                            }}
                                        >
                                            <styleMui.subDes>
                                                {vl.usage.length <= 100
                                                    ? vl.usage
                                                    : vl.usage.slice(0, 120) +
                                                      '...'}
                                            </styleMui.subDes>

                                            <styleMui.btnMore color="inherit">
                                                Xem thêm
                                            </styleMui.btnMore>
                                        </Stack>
                                    </styleMui.BoxBlackHover>
                                )}
                                {/* End opacity black background */}
                            </styleMui.boxImage>
                        ) : (
                            <Skeleton
                                variant="rounded"
                                animate="wave"
                                sx={{
                                    position: 'absolute',
                                    bottom: '-1.12rem',
                                    width: topSearch
                                        ? '15.9925rem'
                                        : '21.43rem',
                                    height: topSearch
                                        ? '12.375rem'
                                        : '12.9375rem',
                                    borderRadius: '0.625rem',
                                }}
                            />
                        )}
                    </styleMui.card>
                )
            )}
            {isSearching && !loading && lazyLoadedData.length === 0 && (
                <styleMui.containerNotfound>
                    <styleMui.boxNotFound>
                        <SentimentVeryDissatisfiedIcon
                            sx={{ color: '#69AD28', fontSize: '8rem' }}
                        />
                        <styleMui.titleNotfound>
                            Không tìm thấy cây
                        </styleMui.titleNotfound>
                    </styleMui.boxNotFound>
                </styleMui.containerNotfound>
            )}
            {!topSearch && (
                <styleMui.pagination
                    count={pageCount}
                    onChange={handlePagnating}
                />
            )}
        </styleMui.container>
    )
}

export default PaginationLayout
