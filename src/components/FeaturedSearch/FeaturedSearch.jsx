import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import imageDayLeo from '../../Images/heroSen.jpg'
import imageBachBo from '../../Images/heroSi.jpg'

function FeaturedSearch() {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [hoverBg, setHoverBg] = useState(null)

    const handleHover = (idx) => {
        setHoverIndex(idx);
        setHoverBg(true)
    };

    const handleLeave = () => {
        setHoverIndex(null);
        setHoverBg(null)
    };

    const products = [
        { id: 1, name: 'Product 1', IMAGE: imageBachBo },
        { id: 2, name: 'Product 2', IMAGE: imageDayLeo },
        { id: 3, name: 'Product 3', IMAGE: imageBachBo },
        { id: 4, name: 'Product 4', IMAGE: imageDayLeo },
        { id: 5, name: 'Product 5', IMAGE: imageBachBo },
    ];

    return (
        <Stack direction="column" alignItems="center" spacing={2} sx={{ width: "100%", mt: "2.75rem" }}>
            <Typography sx={{ fontSize: "2.1875rem", color: "#214400", fontWeight: "500" }}>TÌM KIẾM NỔI BẬT</Typography>
            <Grid container rowSpacing="3rem" columnSpacing="1.69rem" width="72.69rem">
                {products.map((product, idx) => (
                    <Grid item xs={product.id <= 2 ? 6 : 4} key={product.id}>
                        <Box pt="1.31rem" sx={{ position: "relative", height: product.id <= 2 ? '22.5rem' : '14.875rem', backgroundColor: "#F4FFEB", borderRadius: "0.625rem", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <motion.p
                                style={
                                    {
                                        color: "#214400",
                                        fontSize: product.id <= 2 ? "1.5625rem" : '1.25rem',
                                        fontWeight: "500",
                                        fontFamily: " Roboto Serif",
                                        transition: "all 0.1s",
                                        opacity: hoverIndex == idx ? "0" : "1"
                                    }
                                }

                            >
                                {product.name}
                            </motion.p>
                            <motion.div
                                style={
                                    {
                                        width: product.id <= 2 ? "32.875rem" : "21.4375rem",
                                        height: product.id <= 2 ? "19.5625rem" : "12.9375rem",
                                        boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
                                        borderRadius: "10px",
                                        position: "absolute",
                                        bottom: product.id <= 2 ? "-1.38rem" : "-1.12rem",
                                        overflow: "hidden"
                                    }
                                }
                                whileHover={{ y: "-14%" }}
                                onMouseOver={() => handleHover(idx)}
                                onMouseLeave={handleLeave}
                            >

                                <img src={product.IMAGE} alt="" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px" }} />

                                {/* set hover and show text background black */}
                                {hoverIndex === idx &&
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
                                                paddingTop: product.id <= 2 ? "3.12rem" : "1.94rem"
                                            }
                                        }
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Typography sx={{ color: "#FFF", fontSize: product.id <= 2 ? "1.5625rem" : "1.25rem", fontWeight: "500" }}>{product.name}</Typography>
                                        <Stack
                                            direction="column"
                                            alignItems="center"
                                            spacing={product.id <= 2 ? "2.44rem" : "1.1rem"}
                                            sx={
                                                {
                                                    p: product.id <= 2 ? "0 5.12rem" : "0 3rem",
                                                    mt: product.id <= 2 ? "1.5rem" : "0.7rem"
                                                }
                                            }
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#FFF",
                                                    fontSize: product.id <= 2 ? "1.25rem" : "0.7rem",
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
                    </Grid>
                ))}
            </Grid>
        </Stack>

    )
}

export default FeaturedSearch