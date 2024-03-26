import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Input from '@mui/material/Input'
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { parseImg } from 'utils'
const ariaLabel = { 'aria-label': 'description' }

function UserComment({ name, onSendClick, avatar }) {
    const [text, setText] = useState('')
    const isTextDisable = text.length === 0

    const handleSend = () => {
        onSendClick(text)
        setText('')
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSend()
            e.preventDefault()
        }
    }
    return (
        <Box sx={{ marginTop: '1.125rem', width: '50%' }}>
            <Box sx={{ display: 'flex' }}>
                <Avatar src={parseImg(avatar)} />
                <Box
                    sx={{
                        width: '100%',
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
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleEnter}
                        />
                        <IconButton
                            onClick={handleSend}
                            disabled={isTextDisable}
                        >
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
