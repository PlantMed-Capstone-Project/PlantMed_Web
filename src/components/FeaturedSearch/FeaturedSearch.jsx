import { Box, Grid, Link, Skeleton, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { parseImg } from 'utils'
import * as styleMui from './FeatureSearch.styled'

function FeaturedSearch({ title, data, loading }) {
    const [hoverIndex, setHoverIndex] = useState(null)
    const plantData = [...data].sort((a, b) => b.totalSearch - a.totalSearch)

    const varianAnimation = {
        initial: { opacity: 0, y: 100 },
        animate: (idx) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * idx,
                duration: 0.2,
            },
        }),
    }

    const navigate = useNavigate()

    const handleHover = (idx) => {
        setHoverIndex(idx)
    }

    const handleLeave = () => {
        setHoverIndex(null)
    }

    const goDetail = (id) => {
        navigate(`/plants/${id}`)
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{ width: '100%', mt: '2.75rem' }}
        >
            <Typography
                sx={{
                    fontSize: '2.1875rem',
                    color: '#214400',
                    fontWeight: '500',
                }}
            >
                {title}
            </Typography>
            <Grid
                container
                rowSpacing="3rem"
                columnSpacing="1.69rem"
                width="72.69rem"
            >
                {(loading
                    ? Array.from(new Array(5))
                    : plantData.slice(0, 5)
                ).map((product, idx) =>
                    product ? (
                        // Bắt đâu render ra sản phẩm nếu có data
                        <Grid
                            item
                            xs={idx + 1 <= 2 ? 6 : 4}
                            key={product.id}
                            component={motion.div}
                            variants={varianAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false }}
                            custom={idx}
                        >
                            <styleMui.BoxAllGrid
                                pt="1.31rem"
                                product={idx + 1}
                                onClick={() => goDetail(product.id)}
                            >
                                <styleMui.NameOfProduct
                                    component={motion.p}
                                    product={idx + 1}
                                    hoverIndex={hoverIndex}
                                    idx={idx}
                                >
                                    {product.name}
                                </styleMui.NameOfProduct>

                                <styleMui.BoxImage
                                    component={motion.div}
                                    product={idx + 1}
                                    whileHover={{ y: '-14%' }}
                                    onMouseOver={() => handleHover(idx)}
                                    onMouseLeave={handleLeave}
                                >
                                    <img
                                        src={parseImg(product.images[0].data)}
                                        alt={product.name}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '10px',
                                        }}
                                    />

                                    {hoverIndex === idx && (
                                        <styleMui.BoxBlackHover
                                            component={motion.div}
                                            product={idx + 1}
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#FFF',
                                                    fontSize:
                                                        idx + 1 <= 2
                                                            ? '1.5625rem'
                                                            : '1.25rem',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {product.name}
                                            </Typography>
                                            <Stack
                                                direction="column"
                                                alignItems="center"
                                                spacing={
                                                    idx + 1 <= 2
                                                        ? '2.44rem'
                                                        : '1.1rem'
                                                }
                                                sx={{
                                                    p:
                                                        idx + 1 <= 2
                                                            ? '0 5.12rem'
                                                            : '0 3rem',
                                                    mt:
                                                        idx + 1 <= 2
                                                            ? '1.5rem'
                                                            : '0.7rem',
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#FFF',
                                                        fontSize:
                                                            idx + 1 <= 2
                                                                ? '1.25rem'
                                                                : '0.7rem',
                                                        fontWeight: '300',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {product.usage.length <= 100
                                                        ? product.usage
                                                        : product.usage.slice(
                                                              0,
                                                              100
                                                          ) + '...'}
                                                </Typography>

                                                <Link
                                                    color="inherit"
                                                    sx={{
                                                        color: '#FFF',
                                                        fontSize: '1.25rem',
                                                        fontWeight: '300',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Xem thêm
                                                </Link>
                                            </Stack>
                                        </styleMui.BoxBlackHover>
                                    )}
                                </styleMui.BoxImage>
                            </styleMui.BoxAllGrid>
                        </Grid> // Kết thúc render sản phẩm
                    ) : (
                        // Bắt đầu skeleton loading
                        <Grid item xs={idx + 1 <= 2 ? 6 : 4} key={idx}>
                            <styleMui.containerSkeleton
                                variant="rectangular"
                                product={idx + 1}
                            >
                                <styleMui.nameSkeleton>
                                    <Skeleton
                                        variant="text"
                                        sx={{
                                            fontSize:
                                                idx + 1 <= 2
                                                    ? '1.5625rem'
                                                    : '1.25rem',
                                            width: '20%',
                                        }}
                                    />
                                </styleMui.nameSkeleton>
                                <Box width="100%" height="80%">
                                    <Skeleton
                                        variant="rectangular"
                                        animation="wave"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '0.625rem',
                                        }}
                                    />
                                </Box>
                            </styleMui.containerSkeleton>
                        </Grid>
                        // Kết thúc skeleton loading
                    )
                )}
            </Grid>
        </Stack>
    )
}

export default FeaturedSearch
