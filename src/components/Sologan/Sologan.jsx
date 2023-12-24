import { Box, Stack, Typography } from '@mui/material'


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
            <Box
                sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: "3.44rem",
                    transform: "translateX(-50%)",
                    zIndex: "1",
                    width: "72.6875rem",
                    height: "23.8125rem",
                    borderRadius: "0.625rem",
                    backgroundColor: "#FFF",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.44rem",
                    alignItems: "center",
                    p: "1.75rem 0 2.31rem 0"
                }}
            >
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <Typography variant="body1" sx={{
                        fontStyle: "italic", color: "#69AD28", fontWeight: "200", fontSize: "1.25rem",
                        position: "relative",
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            top: "50%",
                            transform: "translateY(-50%)",
                            height: '1px',
                            width: "4rem",
                            backgroundColor: '#69AD28', // Màu sắc của đường gạch ngang
                        },
                        '&::before': {
                            right: '12.5rem', // Khoảng cách giữa chữ và đường gạch ngang bên trái
                        },
                        '&::after': {
                            left: '12.5rem', // Khoảng cách giữa chữ và đường gạch ngang bên phải
                        },
                    }}>
                        Chào mừng bạn đến
                    </Typography>
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
                    <Box
                        sx={
                            {
                                textAlign: "justify",
                                width: "100%",
                                fontSize: "1.375rem",
                                fontWeight: "300",
                                lineHeight: "normal",
                                color: "#214400"
                            }
                        }
                    >
                        <Typography>
                            Bạn là một người có hứng thú với Đông Y? Bạn mong muốn hiểu thêm về các loại cây thuốc nam nhưng vẫn chưa tìm được ứng dụng nào phù hợp? Thấu hiểu nhu cầu đó của bạn, chúng tôi đã cho ra đời ứng dụng nhận diện cây thuốc nam – PLANTMED
                        </Typography>
                    </Box>


                    <Box
                        sx={
                            {
                                textAlign: "justify",
                                width: "100%",
                                fontSize: "1.375rem",
                                fontWeight: "300",
                                lineHeight: "normal",
                                color: "#214400"
                            }
                        }
                    >
                        <Typography> Với sức mạnh từ AI để phân tích từng chi tiết trong hình ảnh của thực vật thì việc giúp bạn tìm thấy giống cây bạn đang cần là không quá khó khăn. Vậy làm cách nào để bạn sử dụng PLANTMED và nó có dễ sử dụng không? Đừng quá lo lắng vì PLANTMED không hề khó sử dụng vì việc của bạn chỉ cần tải lên hình ảnh loài cây bạn muốn tìm hiểu, còn lại cứ để PLANTMED lo.</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
