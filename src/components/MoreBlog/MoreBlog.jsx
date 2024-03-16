import {
    CardContent,
    CardMedia,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import * as muiStyle from './MoreBlog.styled'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { convertString, parseImg } from 'utils'
import { useEffect, useState } from 'react'

export default function MoreBlog() {
    const navigate = useNavigate()
    const [dataActive, setDatatActive] = useState([])
    const { blogActive, loading } = useShallowEqualSelector(
        (state) => state.blog
    )
    let newArray = [...blogActive]

    // Hàm xáo trộn mãng hiện tại thành mãng mới
    const shuffle = (array) => {
        let currentIndex = array.length,
            randomIndex
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            ;[array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ]
        }

        return array
    }

    useEffect(() => {
        console.log(blogActive)
        setDatatActive(shuffle(newArray))
    }, [blogActive])

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
                {(loading ? Array.from(new Array(4)) : dataActive)
                    .slice(0, 4)
                    .map((vl) => (
                        <muiStyle.cardBox
                            key={dataActive}
                            component={motion.div}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                        >
                            {vl ? (
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="134"
                                    image={parseImg(vl.images[0].data)}
                                />
                            ) : (
                                <Skeleton
                                    variant="rectangular"
                                    animation="wave"
                                    sx={{
                                        width: '100%',
                                        height: '134px',
                                    }}
                                />
                            )}
                            <CardContent>
                                {vl ? (
                                    <Typography
                                        gutterBottom
                                        sx={{ fontSize: '1.1rem' }}
                                    >
                                        {vl?.title.length > 30
                                            ? vl?.title.slice(0, 29) + '..'
                                            : vl?.title}
                                    </Typography>
                                ) : (
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: '1.1rem' }}
                                    />
                                )}
                                {vl ? (
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: '0.6rem' }}
                                        dangerouslySetInnerHTML={{
                                            __html: convertString(
                                                vl?.content,
                                                100
                                            ),
                                        }}
                                    />
                                ) : (
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: '0.6rem' }}
                                    />
                                )}
                            </CardContent>
                        </muiStyle.cardBox>
                    ))}
                {/* End mapping the data */}
            </Stack>
            {/* chuyen den trang bai viet */}
            <muiStyle.Button onClick={() => navigate('/bloglist')}>
                Xem thêm
            </muiStyle.Button>
        </Stack>
    )
}
