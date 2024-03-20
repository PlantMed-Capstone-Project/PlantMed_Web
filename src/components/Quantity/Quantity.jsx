import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import groupImage from 'Images/groupImage.png'
import { motion } from 'framer-motion'
import ScrollTrigger from 'react-scroll-trigger'

export default function Quantity() {
    const [counterUp, setCounterUp] = useState(false)

    // dữ liệu giả
    const dataQuntity = [
        {
            quantity: 30,
            typeQuntity: 'K+',
            typeName: 'Cây thực vật làm thuốc',
        },
        {
            quantity: 20,
            typeQuntity: 'M+',
            typeName: 'Người dùng PLANTMED',
        },
    ]

    return (
        <Stack
            direction="column"
            sx={{
                height: '52rem',
                width: '90rem',
                backgroundColor: 'FFF',
                paddingBottom: '3rem',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '32,3125rem',
                    padding: '4.5rem 0 0 8.63rem',
                }}
            >
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    spacing="2rem"
                >
                    <Typography
                        component={motion.p}
                        initial={{ opacity: 0, x: 200 }}
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
                        sx={{
                            color: '#214400',
                            fontSize: '2.2rem',
                            fontWeight: '500',
                        }}
                    >
                        CHÚNG TÔI CÓ GÌ
                    </Typography>
                    <Box
                        sx={{ color: '#69AD28', width: '36.875rem' }}
                        component={motion.div}
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
                        <Typography
                            component="p"
                            sx={{
                                fontSize: '4.375rem',
                                fontWeight: '500',
                                lineHeight: 'normal',
                            }}
                        >
                            Nhờ sự tín nhiệm của hàng triệu người dùng
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '31.5625rem',
                            color: '#214400',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, x: 200 }}
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
                        <Typography
                            component="p"
                            sx={{
                                fontSize: '1.875rem',
                                fontWeight: '300',
                                lineHeight: 'normal',
                                textAlign: 'justify',
                            }}
                        >
                            PLANTMED hiện đang được sử dụng phổ biến hơn. Với
                            những con số không bao giờ biết “nói dối” đã được
                            chúng tôi thống kê như sau:
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    sx={{
                        width: '40.625rem',
                        height: '32.875rem',
                        position: 'absolute',
                        right: '8.63rem',
                        top: '7.75rem',
                        zIndex: '1',
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, x: 200 }}
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
                        src={groupImage}
                        alt="Biểu tượng nhóm"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Box>
            <ScrollTrigger
                onEnter={() => setCounterUp(true)}
                onExit={() => setCounterUp(false)}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing="8.14rem"
                    sx={{
                        width: '100%',
                        padding: '3rem 0 0 8rem',
                        justifyContent: 'flex-start',
                    }}
                >
                    {dataQuntity.map((obj) => (
                        <Stack
                            key={obj.quantity}
                            direction="column"
                            alignItems="flex-start"
                            sx={{
                                color: '#C9914D',
                                fontSize: '4.375rem',
                                fontWeight: '700',
                                lineHeight: 'normal',
                            }}
                        >
                            {counterUp && (
                                <Stack direction="row">
                                    <CountUp
                                        start={0}
                                        end={obj.quantity}
                                        duration={7}
                                        delay={0}
                                    />
                                    <Typography
                                        component="p"
                                        sx={{
                                            fontSize: '4.375rem',
                                            fontWeight: '700',
                                        }}
                                    >
                                        {obj.typeQuntity}
                                    </Typography>
                                </Stack>
                            )}

                            <Typography
                                component="p"
                                sx={{
                                    color: '#69AD28',
                                    fontSize: '1.5625rem',
                                    fontWeight: '500',
                                    lineHeight: 'normal',
                                }}
                            >
                                {obj.typeName}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </ScrollTrigger>
        </Stack>
    )
}
