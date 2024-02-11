import { getIdPlant } from 'FakeData/plantData'
import imgFake from 'Images/hiền nhân.jpg'
import InforDetail from 'components/InforDetail/InforDetail'
import { useState } from 'react'
import * as styleMui from './PopupInfo.styled'
import { motion } from 'framer-motion'

function PopupInfo({ id }) {
    const [isHover, setIsHover] = useState(false)
    const data = getIdPlant(id)
    const textData = [
        { label: 'Tên quốc tế', value: data[0].name },
        { label: 'Tên thường gọi', value: data[0].nameEx },
        { label: 'Họ của cây', value: data[0].hoCay },
        { label: 'Nơi sinh trưởng', value: data[0].origin },
        { label: 'Cơ sở bán', value: data[0].shopSell },
    ]

    return (
        <styleMui.container
            key="modal"
            component={motion.div}
            initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
        >
            <styleMui.boxImage>
                <styleMui.image
                    ishover={isHover}
                    image={imgFake}
                    title="hien nhan cay"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                />
            </styleMui.boxImage>
            <InforDetail textData={textData} screenSlide="popupscreen" />
            <styleMui.linkBtn color="inherit" to={`/plants/${id}`}>
                Xem thêm thông tin chi tiết về cây
            </styleMui.linkBtn>
        </styleMui.container>
    )
}

export default PopupInfo
