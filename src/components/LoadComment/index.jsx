import { Box, Typography } from '@mui/material'
import imgDemo from 'Images/avatar.jpg'
import Avatar from '@mui/material/Avatar'

const styles = {
    reply: {
        fontSize: '0.625rem',
        color: '#69AD28',
        marginRight: '1.25rem',
        '&:hover': { color: 'blue', cursor: 'pointer' },
    },
}

function index(props) {
    return (
        <Box sx={{ marginTop: '2.125rem', width: '50%' }}>
            <Box sx={{ display: 'flex' }}>
                <Avatar src={imgDemo} />
                <Box
                    sx={{
                        width: '31.25rem',
                        height: 'auto',
                        border: '2px solid #69AD28',
                        borderRadius: 2,
                        marginLeft: '1.25rem',
                        padding: '0.625rem',
                    }}
                >
                    <Typography sx={{ fontWeight: '700', color: '#214400' }}>
                        {props.data.name}
                    </Typography>
                    <Typography sx={{ fontWeight: '300' }}>
                        {props.data.content}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    marginRight: '4.688rem',
                    marginTop: '0.625rem',
                    fontSize: '0.625rem',
                }}
            >
                <Typography sx={styles.reply}>Trả lời</Typography>
                <Typography sx={styles.reply}>Báo cáo</Typography>
            </Box>
        </Box>
    )
}

export default index
