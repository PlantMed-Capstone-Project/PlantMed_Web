import { List, Skeleton } from '@mui/material'
import * as styleMui from './InforDetail.styled'
import InfoList from './infoList/InfoList'

function InforDetail({ textData, screenSlide, loading }) {
    return (
        <styleMui.container
            direction="column"
            alignItems="center"
            justifyContent={
                screenSlide === 'topscreen' ? 'center' : 'flex-start'
            }
            screen={screenSlide}
            spacing={2}
        >
            <styleMui.TxtListHead screen={screenSlide}>
                {loading ? (
                    <Skeleton />
                ) : screenSlide === 'topscreen' ||
                  screenSlide === 'popupscreen' ? (
                    textData.valueList[1].value
                ) : (
                    `Một số thông tin thêm về ${textData.name}`
                )}
            </styleMui.TxtListHead>
            <List
                component="nav"
                sx={{
                    width: '100%',
                    p: screenSlide === 'topscreen' ? '0 0 0 2.37rem' : '0',
                }}
            >
                {/* Hứng danh mục list và dữ liệu data trả về vào một mãng object sau đó pass đi vào component khác */}
                {textData.valueList.length
                    ? textData.valueList.map((item, idx) => (
                          <InfoList
                              key={idx}
                              label={item.label}
                              value={item.value}
                              screenSlide={screenSlide}
                              loading={loading}
                          />
                      ))
                    : 'no data here'}
                {/* End list */}
            </List>
        </styleMui.container>
    )
}

export default InforDetail
