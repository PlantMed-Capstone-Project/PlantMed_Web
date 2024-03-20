import {
    CardContent,
    CardMedia,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useNavigate } from 'react-router-dom'
import { convertString, parseImg } from 'utils'
import * as muiStyle from './MoreBlog.styled'

export default function MoreBlog({ namePlant }) {
    const navigate = useNavigate()
    const { blogActive, loading } = useShallowEqualSelector(
        (state) => state.blog
    )
    let activeBlog = blogActive.filter((item) => {
        return item.tags.some((tag) => tag.name === namePlant)
    })

    return (
        <Stack
            direction="column"
            alignItems="center"
            pt="2.94rem"
            width="90rem"
            spacing="2.38rem"
        >
            <muiStyle.text>XEM THÊM CÁC BÀI VIẾT TƯƠNG TỰ</muiStyle.text>
            <Stack
                direction="row"
                width="73rem"
                flexWrap="wrap"
                sx={{ columnGap: '0.6rem', rowGap: '1.3rem' }}
            >
                {/* Start mapping the data  */}
                {loading ? (
                    Array.from(new Array(4)).map((_, idx) => (
                        <muiStyle.cardBox key={idx}>
                            <Skeleton
                                variant="rectangular"
                                animation="wave"
                                sx={{ height: '8.375rem', width: '100%' }}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    <Skeleton animation="wave" />
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: '0.6rem' }}
                                >
                                    <Skeleton animation="wave" />
                                </Typography>
                            </CardContent>
                        </muiStyle.cardBox>
                    ))
                ) : activeBlog?.length > 0 ? (
                    activeBlog.map((vl) => (
                        <muiStyle.cardBox
                            key={activeBlog}
                            component={motion.div}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => navigate(`/blog/${vl.id}`)}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="134"
                                image={parseImg(vl.thumbnail)}
                            />

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    {convertString(vl?.title, 22)}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: '0.6rem' }}
                                    dangerouslySetInnerHTML={{
                                        __html: convertString(vl?.content, 100),
                                    }}
                                />
                            </CardContent>
                        </muiStyle.cardBox>
                    ))
                ) : (
                    <muiStyle.textNull>
                        Không có bài viết Liên quan
                    </muiStyle.textNull>
                )}
                {/* End mapping the data */}
            </Stack>
            {/* chuyen den trang bai viet */}
            <muiStyle.Button onClick={() => navigate('/bloglist')}>
                Xem các bài viết khác
            </muiStyle.Button>
        </Stack>
    )
}
