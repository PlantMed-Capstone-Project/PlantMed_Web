import { CardContent, CardMedia, Stack, Typography } from '@mui/material';
import demoImage from 'Images/herogreen.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as muiStyle from './MoreBlog.styled';


const itemWithStagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    },
    hover: {
        y: -11, // Scale up the card on hover
        transition: {
            duration: 0.2// Adjust the duration as needed
        }
    }
};


export default function MoreBlog() {

    const [visible, setVisible] = useState(4)

    const inCrease = () => {
        setVisible((prevVisible) => prevVisible + 4)
    }

    useEffect(() => {

    }, [visible])



    return (
        <Stack direction="column" alignItems="center" pt="2.94rem" width="90rem" spacing="2.38rem">
            <muiStyle.text>
                XEM THÊM CÁC BÀI VIẾT TƯƠNG TỰ
            </muiStyle.text>
            <Stack direction="row" width="73rem" flexWrap="wrap" sx={{ columnGap: "0.6rem", rowGap: "1.3rem" }}>
                {/* Sử dụng phương thức ...Array để tạo 1 mãng có 10 phần tử */}
                {
                    [...Array(10)].slice(0, visible).map((_, idx) => (
                        <muiStyle.cardBox
                            key={idx}
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
                                image={demoImage}
                            />
                            <CardContent>
                                <Typography gutterBottom sx={{ fontSize: "1.1rem" }}>
                                    Lizard
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: "0.6rem" }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </muiStyle.cardBox>
                    ))
                }
                {/* End card */}
            </Stack>
            {
                visible < 10 &&
                <muiStyle.Button onClick={() => inCrease()}>Xem thêm</muiStyle.Button>
            }
        </Stack>
    )
}
