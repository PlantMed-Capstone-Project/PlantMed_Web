import { Box, Button, Skeleton, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { convertString, parseImg } from 'utils'

const styles = {
    containerBlog: {
        marginTop: '2rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
    },
    myBlogTitle: {
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '800',
        color: '#214400',
        with: '100%',
    },
    subitle: {
        fontSize: '0.8rem',
        fontWeight: '400',
        wordBreak: 'break-word',
        lineHeight: '1.2',
        color: '#214400',
        with: '100%',
        textAlign: 'left',
    },
    card: {
        width: '22.063rem',
        height: '18.625rem',
        borderRadius: '0.625rem',
        boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
}

function BlogList({ blogData, loading }) {
    const navigate = useNavigate()
    const [hover, setHover] = useState(null)
    const handleClick = (id) => {
        navigate(`/blog/${id}`)
    }
    return (
        <Box sx={styles.containerBlog}>
            <Box
                sx={{
                    width: '72.685rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'center',
                }}
            >
                {loading ? (
                    Array.from(new Array(9)).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            animation="wave"
                            variant="rectangular"
                            sx={{
                                width: '22.063rem',
                                height: '18.625rem',
                                borderRadius: '2rem',
                            }}
                        />
                    ))
                ) : blogData.length > 0 ? (
                    blogData.map((vl, idx) => (
                        <Box
                            key={vl.id}
                            sx={styles.card}
                            onClick={() => handleClick(vl.id)}
                        >
                            <Box
                                sx={{
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '60%',
                                    borderTopLeftRadius: '0.625rem',
                                    borderTopRightRadius: '0.625rem',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={parseImg(vl.images[0].data)}
                                    alt={vl.title}
                                    onMouseEnter={() => setHover(idx)}
                                    onMouseLeave={() => setHover(null)}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        transition: 'all 0.2s ease',
                                        scale: hover === idx ? '1.2' : '1',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.2rem',
                                    padding: '0.5rem',
                                }}
                            >
                                <Typography sx={styles.myBlogTitle}>
                                    {convertString(vl.title, 40)}
                                </Typography>
                                <Typography sx={styles.subitle}>
                                    {convertString(vl.content, 150)}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                ) : (
                    <Typography
                        sx={{
                            fontWeight: '800',
                            color: '#214400',
                            fontSize: '2rem',
                        }}
                    >
                        Hiện không có bài viết nào
                    </Typography>
                )}
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: '3.125rem',
                }}
            >
                <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to="/bloglist"
                >
                    Xem thêm bài viết
                </Button>
            </Box>
        </Box>
    )
}

export default BlogList
