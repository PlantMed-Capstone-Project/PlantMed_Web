import { CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import * as muiStyle from './MoreBlog.styled'

const itemWithStagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    hover: {
        y: -11, // Scale up the card on hover
        transition: {
            duration: 0.2, // Adjust the duration as needed
        },
    },
}

export default function MoreBlog({ data }) {
    const navigate = useNavigate()

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
                {data.slice(0, 4).map((vl, idx) => (
                    <muiStyle.cardBox
                        key={data}
                        component={motion.div}
                        variants={itemWithStagger}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="134"
                            image={vl.image}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                sx={{ fontSize: '1.1rem' }}
                            >
                                {vl.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontSize: '0.6rem' }}
                            >
                                {vl.des.length <= 120
                                    ? vl.des
                                    : vl.des.slice(0, 120) + '...'}
                            </Typography>
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
