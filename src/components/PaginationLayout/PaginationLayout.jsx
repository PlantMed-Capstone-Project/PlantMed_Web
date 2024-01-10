import { Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import * as styleMui from './Pagination.styled'

function PaginationLayout({ data, serachText }) {
    const [isHover, setIshover] = useState(null)
    const [dataPlants, setDataPlants] = useState(data)
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 6

    // xóa bỏ các dấu câu và các space của chuỗi
    const formatText = (str) => {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\s/g, "");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }



    useEffect(() => {
        if (serachText.length > 0) {
            const searchAll = data?.filter(value => {
                return formatText(value.title).includes(serachText)
            })
            setDataPlants(searchAll)
        }
        else setDataPlants(data)
    }, [serachText])


    const hoverEnter = (idx) => {
        setIshover(idx)
    }

    const hoverLeave = () => {
        setIshover(null)
    }

    // xac dinh so trang
    const pageCount = Math.ceil(dataPlants?.length / itemsPerPage);

    // xac dinh san pham nao se duoc render
    const displayedData = dataPlants?.slice(
        (currentPage - 1) * itemsPerPage,
        ((currentPage - 1) + 1) * itemsPerPage
    )

    const handlePagnating = (e, vl) => {
        setCurrentPage(vl)
    }

    return (
        <styleMui.container direction="row" justifyContent="flex-start  " alignItems="flex-start" >
            {
                displayedData.length && displayedData.map((vl, idx) => (
                    <styleMui.card component={motion.div} key={idx}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.2,
                        }}>

                        <styleMui.title sx={{ opacity: isHover === idx ? '0' : '1' }}>{vl.title}</styleMui.title>
                        <styleMui.boxImage component={motion.div} whileHover={{ y: "-16%" }} onMouseEnter={() => hoverEnter(idx)} onMouseLeave={hoverLeave}>
                            <img src={vl.image} alt="" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "0.625rem", objectPosition: "0 0" }} />

                            {/* Start opacity black background */}
                            {isHover === idx &&
                                <styleMui.BoxBlackHover
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <styleMui.subTitle>{vl.title}</styleMui.subTitle>
                                    <Stack
                                        direction="column"
                                        alignItems="center"
                                        sx={{
                                            p: "0 3rem",
                                            mt: "0.7rem",
                                            gap: "1.1rem"
                                        }}
                                    >
                                        <styleMui.subDes>
                                            {vl.description.length <= 100
                                                ? vl.description
                                                : vl.description.slice(0, 120) + '...'}
                                        </styleMui.subDes>

                                        <styleMui.btnMore color="inherit">
                                            Xem thêm
                                        </styleMui.btnMore>
                                    </Stack>
                                </styleMui.BoxBlackHover>
                            }
                            {/* End opacity black background */}

                        </styleMui.boxImage>

                    </styleMui.card>
                ))
            }
            <styleMui.pagination count={pageCount} onChange={handlePagnating} />
        </styleMui.container >
    )
}

export default PaginationLayout