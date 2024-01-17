import { Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import * as styleMui from './Pagination.styled'
import { formatText } from 'utils'

function PaginationLayout({ data, serachText, setIndexData }) {
    const [isHover, setIshover] = useState(null)
    const [dataPlants, setDataPlants] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    let itemsPerPage = 6

    useEffect(() => {
        if (serachText.length > 0) {
            const searchAll = data?.filter((value) => {
                return formatText(value.title).includes(serachText)
            })
            setCurrentPage(1)
            setDataPlants(searchAll)
        } else setDataPlants(data)
    }, [serachText])

    const hoverEnter = (idx) => {
        setIshover(idx)
    }

    const hoverLeave = () => {
        setIshover(null)
    }

    // xac dinh so trang
    const pageCount = Math.ceil(dataPlants?.length / itemsPerPage)

    // xac dinh san pham nao se duoc render
    const displayedData = dataPlants?.slice(
        (currentPage - 1) * itemsPerPage,
        (currentPage - 1 + 1) * itemsPerPage
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
            {displayedData.length &&
                displayedData.map((vl, idx) => (
                    <styleMui.card
                        component={motion.div}
                        key={idx}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.2,
                        }}
                        onClick={() => setIndexData(vl.id)}
                    >
                        <styleMui.title
                            sx={{ opacity: isHover === idx ? '0' : '1' }}
                        >
                            {vl.title}
                        </styleMui.title>
                        <styleMui.boxImage
                            component={motion.div}
                            whileHover={{ y: '-16%' }}
                            onMouseEnter={() => hoverEnter(idx)}
                            onMouseLeave={hoverLeave}
                        >
                            <img
                                src={vl.image}
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
                                        {vl.title}
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
                                            {vl.description.length <= 100
                                                ? vl.description
                                                : vl.description.slice(0, 120) +
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
                    </styleMui.card>
                ))}
            <styleMui.pagination count={pageCount} onChange={handlePagnating} />
        </styleMui.container>
    )
}

export default PaginationLayout
