import { List, Stack } from '@mui/material'
import * as styleMui from './InforDetail.styled'
import InfoList from './infoList/InfoList'


function InforDetail({ data }) {

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} width="50%" height="100%">
            <styleMui.TxtListHead>
                ĐINH LĂNG – CÂY SÂM CỦA NGƯỜI NGHÈO
            </styleMui.TxtListHead>
            <List component="nav" sx={{ width: "100%", p: "0 0 0 2.37rem" }}>
                {/* Hứng danh mục list và dữ liệu data trả về vào một mãng object sau đó pass đi vào component khác */}
                {[
                    { label: 'Tên quốc tế', value: data[0].name },
                    { label: 'Tên thường gọi', value: data[0].nameEx },
                    { label: 'Họ của cây', value: data[0].hoCay },
                    { label: 'Nơi sinh trưởng', value: data[0].location },
                    { label: 'Cơ sở bán', value: data[0].shopSell },
                ].map((item, idx) => (<InfoList key={idx} label={item.label} value={item.value} />))}
                {/* End list */}
            </List>
        </Stack>
    )
}

export default InforDetail