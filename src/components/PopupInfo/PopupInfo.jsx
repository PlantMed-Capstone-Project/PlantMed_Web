import InforDetail from 'components/InforDetail/InforDetail'
import { motion } from 'framer-motion'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useState } from 'react'
import * as styleMui from './PopupInfo.styled'

function PopupInfo({ id }) {
    const [isHover, setIsHover] = useState(false)
    const { data } = useShallowEqualSelector((state) => state.plant)
    const dataFilter = data.filter((vl) => vl.id === id)[0]
    const textData = {
        images: dataFilter?.images[0].data,
        valueList: [
            {
                label: 'Tên quốc tế',
                value: dataFilter?.internationalName,
            },
            {
                label: 'Tên thường gọi',
                value: dataFilter?.name,
            },
            {
                label: 'Họ của cây',
                value: dataFilter?.surName,
            },
            {
                label: 'Nguồn gốc',
                value: dataFilter?.origin,
            },
            {
                label: 'Nơi sinh trưởng',
                value: dataFilter?.placeOfBirth,
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
                            title={textData.valueList[1].value}
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
