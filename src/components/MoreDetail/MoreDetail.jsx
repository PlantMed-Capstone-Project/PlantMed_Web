import { List } from '@mui/material'
import * as styleMui from './MoreDetail.styled'
import MoreDetailList from './MoreDetailList/MoreDetailList'

export default function MoreDetail({data}) {
    return (
        <styleMui.container direction="column" alignItems="center">
            <styleMui.TxtListHead>ĐINH LĂNG – CÂY SÂM CỦA NGƯỜI NGHÈO</styleMui.TxtListHead>
            <List component="nav" sx={{ width: "100%" }}>
                {/* Theo dự tính sẽ làm theo data là: render ra các bài thuốc dựa vào cây đó "Nhưng chưa có data nên dưới đây là mẫu" */}
                    {[
                        { label: 'Tên quốc tế', value: data[0].name },
                        { label: 'Tên thường gọi', value: data[0].nameEx },
                        { label: 'Họ của cây', value: data[0].hoCay },
                        { label: 'Nơi sinh trưởng', value: data[0].location },
                        { label: 'Cơ sở bán', value: data[0].shopSell },
                    ].map((item, idx) => (<MoreDetailList key={idx} label={item.label} value={item.value} />))}
                    {/* End list */}
            </List>
        </styleMui.container>
    )
}
