import { Box, Button, Typography } from '@mui/material'
import girlComputer from 'Images/girl-computer.png'

function HeroBlog() {
    return (
        <Box
            sx={{
                backgroundColor: '#F4FFEB',
                width: '100%',
                marginTop: '0.938rem',
                position: 'relative',
                height: '28.125rem',
            }}
        >
            <Box sx={{ padding: '3.75rem 0 0 8.75rem' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '3.125rem',
                        fontWeight: '500',
                        color: '#69AD28',
                        fontFamily: 'Roboto Serif',
                    }}
                >
                    TẠO BÀI VIẾT CỦA BẠN
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1.5rem',
                        width: '35.875rem',
                        fontWeight: '700',
                        color: '#214400',
                        marginTop: '1.25rem',
                    }}
                >
                    Với sự hiểu biết của bạn về các loại thực vật, hãy chia sẻ
                    những kiến thức đó với mọi người thông qua bài viết của
                    riêng mình.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#69AD28',
                        marginTop: '6.25rem',
                        padding: '0.375rem 1.875rem !important',
                        fontSize: '1rem',
                        ':hover': { bgcolor: 'success.main' },
                    }}
                >
                    Viết bài
                </Button>
            </Box>
            <Box
                component="img"
                alt="girl-computer"
                src={girlComputer}
                sx={{
                    height: 450,
                    width: 690,
                    position: 'absolute',
                    right: 0,
                    bottom: '-3.125rem',
                }}
            ></Box>
        </Box>
    )
}

export default HeroBlog
