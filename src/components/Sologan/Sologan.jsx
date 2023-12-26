import { Box, Stack, Typography } from '@mui/material'
import * as styleMui from './Sologan.styled'


export default function Sologan() {

    return (
        <Box
            sx={
                {
                    height: "23.8125rem",
                    width: "100%",
                    backgroundColor: "#F4FFEB",
                    position: "relative",
                    zIndex: "0",

                }
            }
        >
            <styleMui.BoxContainer>
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <styleMui.TitleBox variant="body1">
                        Chào mừng bạn đến
                    </styleMui.TitleBox>
                    <Typography variant='h5' sx={{ fontSize: "2.5rem", fontWeight: "400", color: "#214400", fontFamily: 'FS PF BeauSans Pro, sans-serif' }}>PLANTMED</Typography>
                </Stack>
                <Stack
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    sx={
                        {
                            width: "58.0625rem"
                        }
                    }
                >
                    <styleMui.BoxDescription>
                        <Typography>
                            Bạn là một người có hứng thú với Đông Y? Bạn mong muốn hiểu thêm về các loại cây thuốc nam nhưng vẫn chưa tìm được ứng dụng nào phù hợp? Thấu hiểu nhu cầu đó của bạn, chúng tôi đã cho ra đời ứng dụng nhận diện cây thuốc nam – PLANTMED
                        </Typography>
                    </styleMui.BoxDescription>

                    <styleMui.BoxDescription>
                        <Typography> Với sức mạnh từ AI để phân tích từng chi tiết trong hình ảnh của thực vật thì việc giúp bạn tìm thấy giống cây bạn đang cần là không quá khó khăn. Vậy làm cách nào để bạn sử dụng PLANTMED và nó có dễ sử dụng không? Đừng quá lo lắng vì PLANTMED không hề khó sử dụng vì việc của bạn chỉ cần tải lên hình ảnh loài cây bạn muốn tìm hiểu, còn lại cứ để PLANTMED lo.</Typography>
                    </styleMui.BoxDescription>
                </Stack>
            </styleMui.BoxContainer>
        </Box>
    )
}
