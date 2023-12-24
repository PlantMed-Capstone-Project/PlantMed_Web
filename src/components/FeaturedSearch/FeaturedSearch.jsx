import { Box, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import imageDayLeo from '../../Images/heroSen.jpg'
import imageBachBo from '../../Images/heroSi.jpg'

function FeaturedSearch() {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [hoverBg, setHoverBg] = useState(null)

    // dưới này test thử cái đã
    const [hoverIndexNew, setHoverIndexNew] = useState(null);
    const [hoverBgNew, setHoverBgNew] = useState(null)


    const handleHover = (idx) => {
        setHoverIndex(idx);
        setHoverBg(true)
    };

    const handleHovernew = (idx) => {
        setHoverIndexNew(idx)
        setHoverBgNew(true)
    }

    const handleLeaveNew = () => {
        setHoverIndexNew(null)
        setHoverBgNew(null)
    }

    const handleLeave = () => {
        setHoverIndex(null);
        setHoverBg(null)
    };


    const dataTop = [
        {
            name: 'CÀ DÂY LEO',
            IMAGE: imageDayLeo
        },
        {
            name: 'BÁCH BỘ',
            IMAGE: imageBachBo
        }
    ]

    const dataBot = [
        {
            name: 'BẠCH HỒNG NỮ',
            IMAGE: imageDayLeo
        },
        {
            name: 'BỒ CHÍNH SÂM',
            IMAGE: imageBachBo
        },
        {
            name: 'BỒ CÔNG ANH',
            IMAGE: imageBachBo
        }
    ]

// component này mang tính chất đang test thử 
    return (
        <Stack direction="column" alignItems="center" spacing="2.81rem" sx={{ width: "100%", height: "auto", mt: "2.75rem" }}>
            <Typography sx={{ fontSize: "2.1875rem", color: "#214400", fontWeight: "500" }}>TÌM KIẾM NỔI BẬT</Typography>
            <Stack
                direction="column"
                sx={{
                    width: "72.69rem",
                    rowGap: "3.7rem",
                    columnGap: "1.69rem"
                }}
            >
                <Stack direction="row" spacing="1.69rem" sx={{ width: "100%" }}>
                    {
                        dataTop.map((vl, idx) => (
                            <Box
                                key={idx}
                                sx={
                                    {
                                        backgroundColor: "#F4FFEB",
                                        borderRadius: "0.625rem",
                                        width: "35.5rem",
                                        height: "22.5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        pt: "1.31rem",
                                        position: "relative"
                                    }
                                }
                            >
                                <motion.p
                                    style={
                                        {
                                            color: "#214400",
                                            fontSize: "1.5625rem",
                                            fontWeight: "500",
                                            fontFamily: " Roboto Serif",
                                            opacity: hoverIndex === idx ? '0' : '1',
                                            transition: "all 0.2s"
                                        }
                                    }

                                >
                                    {vl.name}
                                </motion.p>
                                <motion.div
                                    style={
                                        {
                                            width: "32.875rem",
                                            height: "19.5625rem",
                                            boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
                                            borderRadius: "10px",
                                            position: "absolute",
                                            bottom: "-1.38rem",
                                            overflow: "hidden"
                                        }
                                    }
                                    whileHover={{ y: "-14%" }}
                                    onMouseOver={() => handleHover(idx)}
                                    onMouseLeave={handleLeave}
                                >
                                    <img src={vl.IMAGE} alt="" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px" }} />
                                    {
                                        hoverBg && hoverIndex === idx &&
                                        <motion.div
                                            style={
                                                {
                                                    height: "100%",
                                                    width: "100%",
                                                    backgroundColor: "rgba(0, 0, 0, 0.46)",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    paddingTop: "3.12rem"
                                                }
                                            }
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Typography sx={{ color: "#FFF", fontSize: "1.5625rem", fontWeight: "500" }}>{vl.name}</Typography>
                                            <Stack
                                                direction="column"
                                                alignItems="center"
                                                spacing="2.44rem"
                                                sx={
                                                    {
                                                        p: "0 5.12rem",
                                                        mt: "1.5rem"
                                                    }
                                                }
                                            >
                                                <Typography
                                                    sx={{
                                                        color: "#FFF",
                                                        fontSize: "1.25rem",
                                                        fontWeight: "300",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Tác dụng diệt ký sinh trùng: Dịch cồn hoặc nước ngâm kiệt của rễ cây bách bộ có tác dụng diệt ký sinh trùng như là chấy rận, bọ chét, ấu trùng ruồi, muỗi...
                                                </Typography>

                                                <Link
                                                    sx={{
                                                        color: "#FFF",
                                                        fontSize: "1.25rem",
                                                        fontWeight: "300",
                                                        textAlign: "center",
                                                        cursor: "pointer"
                                                    }}
                                                    color="inherit"
                                                >
                                                    Xem thêm
                                                </Link>
                                            </Stack>
                                        </motion.div>
                                    }
                                </motion.div>
                            </Box>
                        ))
                    }
                </Stack>
                <Stack direction="row" spacing="1.69rem" sx={{ width: "100%" }}>
                    {
                        dataBot.map((vl, idx) => (
                            <Box
                                key={idx}
                                sx={
                                    {
                                        backgroundColor: "#F4FFEB",
                                        borderRadius: "0.625rem",
                                        width: "23.1875rem",
                                        height: "14.875rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        pt: "0.75rem",
                                        position: "relative"
                                    }
                                }
                            >
                                <motion.p
                                    style={
                                        {
                                            color: "#214400",
                                            fontSize: "1.5625rem",
                                            fontWeight: "500",
                                            fontFamily: " Roboto Serif",
                                            opacity: hoverIndexNew === idx ? '0' : '1',
                                            transition: "all 0.2s"
                                        }
                                    }

                                >
                                    {vl.name}
                                </motion.p>
                                <motion.div
                                    style={
                                        {
                                            width: "21.4375rem",
                                            height: "12.9375rem",
                                            boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
                                            borderRadius: "10px",
                                            position: "absolute",
                                            bottom: "-1.12rem",
                                            overflow: "hidden"
                                        }
                                    }
                                    whileHover={{ y: "-14%" }}
                                    onMouseOver={() => handleHovernew(idx)}
                                    onMouseLeave={handleLeaveNew}
                                >
                                    <img src={vl.IMAGE} alt="" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px" }} />
                                    {
                                        hoverBgNew && hoverIndexNew === idx &&
                                        <motion.div
                                            style={
                                                {
                                                    height: "100%",
                                                    width: "100%",
                                                    backgroundColor: "rgba(0, 0, 0, 0.46)",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    paddingTop: "1.94rem"
                                                }
                                            }
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Typography sx={{ color: "#FFF", fontSize: "1.25rem", fontWeight: "500" }}>{vl.name}</Typography>
                                            <Stack
                                                direction="column"
                                                alignItems="center"
                                                spacing="1.1rem"
                                                sx={
                                                    {
                                                        p: "0 3rem",
                                                        mt: "0.7rem"
                                                    }
                                                }
                                            >
                                                <Typography
                                                    sx={{
                                                        color: "#FFF",
                                                        fontSize: "0.7rem",
                                                        fontWeight: "300",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Tác dụng diệt ký sinh trùng: Dịch cồn hoặc nước ngâm kiệt của rễ cây bách bộ có ...
                                                </Typography>

                                                <Link
                                                    sx={{
                                                        color: "#FFF",
                                                        fontSize: "1.25rem",
                                                        fontWeight: "300",
                                                        textAlign: "center",
                                                        cursor: "pointer"
                                                    }}
                                                    color="inherit"
                                                >
                                                    Xem thêm
                                                </Link>
                                            </Stack>
                                        </motion.div>
                                    }
                                </motion.div>
                            </Box>
                        ))
                    }
                </Stack>
            </Stack>

        </Stack>

    )
}

export default FeaturedSearch