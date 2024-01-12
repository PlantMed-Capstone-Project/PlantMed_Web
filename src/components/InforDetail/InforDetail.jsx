import { List, Stack } from '@mui/material'
import * as styleMui from './InforDetail.styled'
import InfoList from './infoList/InfoList'

function InforDetail({ textData, screenSlide = false }) {
    return (
        <styleMui.container
            direction="column"
            alignItems="center"
            justifyContent={screenSlide ? 'center' : 'flex-start'}
            screen={screenSlide}
            spacing={2}
        >
            <styleMui.TxtListHead>
                ĐINH LĂNG – CÂY SÂM CỦA NGƯỜI NGHÈO
            </styleMui.TxtListHead>
            <List
                component="nav"
                sx={{ width: '100%', p: screenSlide ? '0 0 0 2.37rem' : '0' }}
            >
                {/* Hứng danh mục list và dữ liệu data trả về vào một mãng object sau đó pass đi vào component khác */}
                {textData.map((item, idx) => (
                    <InfoList
                        key={idx}
                        label={item.label}
                        value={item.value}
                        screenSlide={screenSlide}
                    />
                ))}
                {/* End list */}
            </List>
        </styleMui.container>
    )
}

export default InforDetail
