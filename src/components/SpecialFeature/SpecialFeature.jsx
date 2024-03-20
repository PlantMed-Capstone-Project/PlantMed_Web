import lapImage from 'Images/lap.png'
import * as styleMui from './SpecialFeature.styled'
import { Box } from '@mui/material'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function SpecialFeature() {
    return (
        <Box>
            <styleMui.BoxContainer
                direction="column"
                alignItems="flex-end"
                p="5rem 4.81rem 0 0"
            >
                <styleMui.Boxtitle
                    component={motion.p}
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.2,
                        x: {
                            type: 'spring',
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    TÍNH NĂNG NỔI BẬT
                </styleMui.Boxtitle>
                <styleMui.BoxDes
                    variant="body1"
                    component={motion.p}
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.2,
                        x: {
                            type: 'spring',
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    TÌM KIẾM THÔNG TIN BẰNG HÌNH ẢNH NHANH CHÓNG <br /> HIỆU QUẢ
                </styleMui.BoxDes>
                <styleMui.ButtonCustom
                    component={motion.button}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.2,
                        scale: {
                            type: 'spring',
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    Xem thêm
                </styleMui.ButtonCustom>
                <styleMui.BoxImage
                    component={motion.image}
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: [0, 0.71, 0.2, 1.01],
                        duration: 0.2,
                        x: {
                            type: 'spring',
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <img
                        src={lapImage}
                        alt="lap top"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: '0 0',
                        }}
                    />
                </styleMui.BoxImage>
            </styleMui.BoxContainer>
        </Box>
    )
}
