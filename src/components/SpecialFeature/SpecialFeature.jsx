import lapImage from 'Images/lap.png'
import * as styleMui from './SpecialFeature.styled'

export default function SpecialFeature() {
    return (
        <>
            <styleMui.BoxContainer
                direction="column"
                alignItems="flex-end"
                p="5rem 4.81rem 0 0"
            >
                <styleMui.Boxtitle>TÍNH NĂNG NỔI BẬT</styleMui.Boxtitle>
                <styleMui.BoxDes variant="body1" component="p">
                    TÌM KIẾM THÔNG TIN BẰNG HÌNH ẢNH NHANH CHÓNG <br /> HIỆU QUẢ
                </styleMui.BoxDes>
                <styleMui.ButtonCustom>
                    Xem thêm
                </styleMui.ButtonCustom>
                <styleMui.BoxImage>
                    <img src={lapImage} alt="lap top" style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "0 0" }} />
                </styleMui.BoxImage>
            </styleMui.BoxContainer>
        </>

    )
}
