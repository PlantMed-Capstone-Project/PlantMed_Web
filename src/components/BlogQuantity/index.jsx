import { Link } from 'react-router-dom'
import * as styleMui from './BlogQuantity.styled'
import CountUp from 'react-countup'

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
                <styleMui.imagePlace direction="column">
                    <styleMui.studyImage />
                    <styleMui.boxContainer>
                        <styleMui.button component={Link} to="/bloglist">
                            Xem thêm
                        </styleMui.button>
                        <styleMui.ipadImage />
                    </styleMui.boxContainer>
                </styleMui.imagePlace>
                <styleMui.infoPlace direction="column">
                    <styleMui.Title>
                        Những Bài Viết Đã Được Các Chuyên Gia Thẩm Định
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
                </styleMui.infoPlace>
            </styleMui.blogQuantityContainer>
        </styleMui.container>
    )
}
