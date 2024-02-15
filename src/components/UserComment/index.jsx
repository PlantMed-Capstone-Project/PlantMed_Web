import { Box, Typography } from '@mui/material'
import imgDemo from 'Images/avatar.jpg'
import Avatar from '@mui/material/Avatar'
import Input from '@mui/material/Input'
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton'
const ariaLabel = { 'aria-label': 'description' }

function UserComment({ name, onInputChange, onSendClick, ...props }) {
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
                        {name}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Input
                            placeholder="Nhận xét của bạn"
                            inputProps={ariaLabel}
                            color="success"
                            fullWidth
                            onChange={onInputChange}
                            {...props}
                        />
                        <IconButton onClick={onSendClick}>
                            <SendIcon
                                sx={{
                                    rotate: '-45deg',
                                    color: '#69AD28',
                                    '&:hover': { cursor: 'pointer' },
                                }}
                            />
                        </IconButton>
                    </Box>
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
            ></Box>
        </Box>
    )
}

export default UserComment
