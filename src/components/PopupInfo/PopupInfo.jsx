import InforDetail from 'components/InforDetail/InforDetail'
import { motion } from 'framer-motion'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useState } from 'react'
import * as styleMui from './PopupInfo.styled'

function PopupInfo({ id }) {
    const [isHover, setIsHover] = useState(false)
    const { data } = useShallowEqualSelector((state) => state.plant)

    const textData = {
        images: data.filter((vl) => vl.id === id)[0]?.images[0].data,
        valueList: [
            {
                label: 'Tên quốc tế',
                value: data.filter((vl) => vl.id === id)[0]?.internationalName,
            },
            {
                label: 'Tên thường gọi',
                value: data.filter((vl) => vl.id === id)[0]?.name,
            },
            {
                label: 'Họ của cây',
                value: data.filter((vl) => vl.id === id)[0]?.surName,
            },
            {
                label: 'Nguồn gốc',
                value: data.filter((vl) => vl.id === id)[0]?.origin,
            },
            {
                label: 'Nơi sinh trưởng',
                value: data.filter((vl) => vl.id === id)[0]?.placeOfBirth,
            },
        ],
    }

    return (
        <>
            {data && (
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
                            image={`data:image/png;base64,${textData.images}`}
                            title="hien nhan cay"
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        />
                    </styleMui.boxImage>
                    <InforDetail
                        textData={textData}
                        screenSlide="popupscreen"
                    />
                    <styleMui.linkBtn color="inherit" to={`/plants/${id}`}>
                        Xem thêm thông tin chi tiết về cây
                    </styleMui.linkBtn>
                </styleMui.container>
            )}
        </>
    )
}

export default PopupInfo
