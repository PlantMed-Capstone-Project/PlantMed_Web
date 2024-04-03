import { Box, Skeleton, Stack, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { convertString, parseImg } from 'utils'
const styles = {
    card: {
        boxShadow: '0 0.25rem 0.25rem 0 rgba(33, 68, 0, 0.50)',
        width: 400,
        height: 340,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderRadius: '1rem',
    },
    containerBlog: {
        marginTop: '6.25rem',
        width: '100%',
        display: 'Flex',
        gap: '1rem',
        alignItems: 'center',
        flexDirection: 'column',
    },
    myBlogTitle: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontWeight: '800',
        color: '#214400',
    },
    subitle: {
        fontSize: '1rem',
        fontWeight: '400',
        wordBreak: 'break-word',
        lineHeight: '1.2',
        color: '#214400',
        with: '100%',
        textAlign: 'left',
    },
    title: {
        fontSize: '2.188rem',
        textAlign: 'center',
        fontWeight: '800',
        color: '#214400',
    },
}

function MyBlog({ userBlog, loading }) {
    const [hover, setHover] = useState()
    let dataBlog = [...userBlog].sort((a, b) => b.totalLike - a.totalLike)
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/blog/${id}`)
    }

    return (
        <Box sx={styles.containerBlog}>
            <Typography sx={styles.title}>BÀI VIẾT NỔI BẬT CỦA BẠN</Typography>
            {/* bắt đầu tạo container chứa 3 card của người dùng */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    height: '30rem',
                    cursor: 'pointer',
                }}
            >
                {loading ? (
                    Array.from(new Array(3)).map((_, idx) => (
                        <Skeleton
                            key={idx}
                            animation="wave"
                            variant="rectangular"
                            sx={{
                                height: '100%',
                                width: '24rem',
                                borderRadius: '2rem',
                            }}
                        />
                    ))
                ) : dataBlog?.length > 0 ? (
                    dataBlog.slice(0, 3).map((vl, idx) => (
                        <Stack
                            key={vl.id}
                            direction="column"
                            alignItems="center"
                            spacing="1rem"
                            p="1rem"
                            height="100%"
                            width="24rem"
                            onClick={() => handleClick(vl.id)}
                            sx={{
                                borderRadius: '2rem',
                                boxShadow:
                                    '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
                                backgroundColor: '#F4FFEB',
                            }}
                        >
                            <Box
                                sx={{
                                    overflow: 'hidden',
                                    borderRadius: '2rem',
                                    width: '100%',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={parseImg(vl.thumbnail)}
                                    alt={vl.title}
                                    onMouseEnter={() => setHover(idx)}
                                    onMouseLeave={() => setHover(null)}
                                    sx={{
                                        borderRadius: '2rem',
                                        scale: hover === idx ? ' 1.2' : '1',
                                        transition: 'all 0.2s ease',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                }}
                            >
                                <Typography sx={styles.myBlogTitle}>
                                    {convertString(vl.title, 20)}
                                </Typography>
                                <Typography sx={styles.subitle}>
                                    {convertString(vl.content, 200)}
                                </Typography>
                            </Box>
                        </Stack>
                    ))
                ) : (
                    <Typography
                        sx={{
                            fontWeight: '800',
                            color: '#214400',
                            fontSize: '2rem',
                        }}
                    >
                        Bạn chưa có bài viết nào
                    </Typography>
                )}
            </Box>
            {/* Kết thúc tạo container chứa 3 card của người dùng */}
        </Box>
    )
}

export default MyBlog
