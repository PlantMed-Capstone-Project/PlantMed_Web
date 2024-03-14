import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup'
import groupImage from 'Images/groupImage.png'

export default function Quantity() {
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
                height: '56rem',
                width: '90rem',
                backgroundColor: 'FFF',
                paddingBottom: '5rem',
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
                    spacing="2.81rem"
                >
                    <Typography
                        component="p"
                        sx={{
                            color: '#214400',
                            fontSize: '2.2rem',
                            fontWeight: '500',
                        }}
                    >
                        CHÚNG TÔI CÓ GÌ
                    </Typography>
                    <Box sx={{ color: '#69AD28', width: '36.875rem' }}>
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
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing="8.14rem"
                sx={{
                    width: '100%',
                    padding: '4.5rem 0 0 8rem',
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
                        <Stack direction="row">
                            <CountUp
                                start={0}
                                end={obj.quantity}
                                duration={7}
                                delay={0}
                            />
                            <Typography
                                component="p"
                                sx={{ fontSize: '4.375rem', fontWeight: '700' }}
                            >
                                {obj.typeQuntity}
                            </Typography>
                        </Stack>
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
        </Stack>
    )
}
