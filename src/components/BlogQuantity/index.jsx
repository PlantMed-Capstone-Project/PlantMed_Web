import { Link } from 'react-router-dom'
import * as styleMui from './BlogQuantity.styled'
import CountUp from 'react-countup'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function BlogQuantity() {
    // dữ liệu giả
    const dataQuantity = [
        {
            quantity: 5,
            typeQuantity: 'K+',
            typeName: 'Bài Viết Được Thẩm Định',
        },
        {
            quantity: 20,
            typeQuantity: 'K+',
            typeName: 'Lượt Truy Cập Và Tin Cậy',
        },
    ]

    return (
        <styleMui.container direction="row">
            <styleMui.blogQuantityContainer>
                <styleMui.imagePlace
                    direction="column"
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
                    <styleMui.studyImage />
                    <styleMui.boxContainer>
                        <styleMui.ipadImage />
                    </styleMui.boxContainer>
                </styleMui.imagePlace>
                <styleMui.infoPlace
                    direction="column"
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
                    <styleMui.Title>
                        Những Bài Viết Đã Được Các Chuyên <br /> Gia Thẩm Định
                    </styleMui.Title>
                    <styleMui.Info>
                        PLANTMED đáp ứng được thông tin chính xác, xác định giá
                        trị của cây thực vật và hiệu quả sử dụng của cây thực
                        vật thông qua các bài viết được nghiên cứu kỹ lưỡng và
                        tính xác thực.
                    </styleMui.Info>
                    <styleMui.staticContainer>
                        {dataQuantity.map((obj) => (
                            <styleMui.quantityBox>
                                <styleMui.quantityNumber>
                                    <CountUp
                                        enableScrollSpy={true}
                                        start={0}
                                        end={obj.quantity}
                                        duration={7}
                                        delay={0}
                                    />
                                    {obj.typeQuantity}
                                </styleMui.quantityNumber>
                                <styleMui.quantityTitle>
                                    {obj.typeName}
                                </styleMui.quantityTitle>
                            </styleMui.quantityBox>
                        ))}
                    </styleMui.staticContainer>
                    <styleMui.boxButton>
                        <styleMui.button component={Link} to="/bloglist">
                            Xem thêm
                        </styleMui.button>
                    </styleMui.boxButton>
                </styleMui.infoPlace>
            </styleMui.blogQuantityContainer>
        </styleMui.container>
    )
}
