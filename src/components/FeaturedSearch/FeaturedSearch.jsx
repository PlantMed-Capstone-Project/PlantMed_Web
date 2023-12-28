import { Grid, Link, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import * as styleMui from './FeatureSearch.styled'

function FeaturedSearch({ title, data }) {

    const [hoverIndex, setHoverIndex] = useState(null)
    const [hoverBg, setHoverBg] = useState(null)

    const handleHover = (idx) => {
        setHoverIndex(idx)
        setHoverBg(true)
    }

    const handleLeave = () => {
        setHoverIndex(null)
        setHoverBg(null)
    }

    return (
        <Stack direction="column" alignItems="center" spacing={2} sx={{ width: "100%", mt: "2.75rem" }}>
            <Typography sx={{ fontSize: "2.1875rem", color: "#214400", fontWeight: "500" }}>
                {title}
            </Typography>
            <Grid container rowSpacing="3rem" columnSpacing="1.69rem" width="72.69rem">
                {data.map((product, idx) => (
                    <Grid item xs={product.id <= 2 ? 6 : 4} key={product.id}>
                        <styleMui.BoxAllGrid pt="1.31rem" product={product.id}>
                            <styleMui.NameOfProduct
                                component={motion.p}
                                product={product.id}
                                hoverIndex={hoverIndex}
                                idx={idx}
                            >
                                {product.name}
                            </styleMui.NameOfProduct>

                            <styleMui.BoxImage
                                component={motion.div}
                                product={product.id}
                                whileHover={{ y: "-14%" }}
                                onMouseOver={() => handleHover(idx)}
                                onMouseLeave={handleLeave}
                            >
                                <img src={product.image} alt="" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px" }} />

                                {/* set hover and show text background black */}
                                {hoverIndex === idx &&
                                    <styleMui.BoxBlackHover
                                        component={motion.div}
                                        product={product.id}
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
                                            sx={{
                                                p: product.id <= 2 ? "0 5.12rem" : "0 3rem",
                                                mt: product.id <= 2 ? "1.5rem" : "0.7rem"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#FFF",
                                                    fontSize: product.id <= 2 ? "1.25rem" : "0.7rem",
                                                    fontWeight: "300",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {product.description.length <= 100
                                                ? product.description
                                                : product.description.slice(0, 100) + '...'}
                                            </Typography>

                                            <Link color="inherit"
                                                sx={{
                                                    color: "#FFF",
                                                    fontSize: "1.25rem",
                                                    fontWeight: "300",
                                                    textAlign: "center",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Xem thêm
                                            </Link>
                                        </Stack>
                                    </styleMui.BoxBlackHover>
                                }
                            </styleMui.BoxImage>
                        </styleMui.BoxAllGrid>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default FeaturedSearch