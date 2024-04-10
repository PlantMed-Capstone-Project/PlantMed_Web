import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Logo from 'Images/logo.png'
import ChatLayout from 'components/ChatLayout'
import InfoIcon from '@mui/icons-material/Info'
import { useEffect, useState } from 'react'
import { useFirestoreQuery } from 'hooks/useFirestoreQuery'
import { collection, where } from 'firebase/firestore'
import { db } from 'firebase.js'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'
import { ACCESS_TOKEN } from 'constant'
function ChatBox() {
    const [isOpen, setIsOpen] = useState(true)
    const [isChat, setIsChat] = useState(false)
    const user = parseJwt(readCookie(ACCESS_TOKEN))
    const requestRef = collection(db, 'requests')
    //list yêu cầu trò chuyện
    const [requestList, setRequestList] = useState([])
    //
    const [activeChat, setActiveChat] = useState([])
    useFirestoreQuery(
        requestRef,
        [
            where('expertEmail', '==', user.Email),
            where('status', '==', 'pending'),
        ],
        setRequestList
    )

    const type = user.Role === 'expert' ? 'expertEmail' : 'userRequest.Email'

    useFirestoreQuery(
        requestRef,
        [where(type, '==', user.Email), where('status', '==', 'active')],
        setActiveChat
    )

    const handleOpen = () => {
        setIsOpen(false)
    }

    const handleChatLayout = () => {
        setIsChat(true)
    }

    const handleCloseChat = () => {
        setIsChat(false)
    }

    useEffect(() => {
        if (activeChat.length > 0) handleChatLayout()
    }, [activeChat])

    return (
        <>
            {!isChat ? (
                <Box
                    sx={{
                        bottom: 20,
                        right: 20,
                        position: 'fixed',
                        zIndex: 1001,
                    }}
                >
                    {isOpen && (
                        <Box
                            sx={{
                                width: '25rem',
                                height: '12.5rem',

                                backgroundColor: 'white',
                                borderRadius: 3,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    color: '#69AD28',
                                    right: 0,
                                    top: 0,
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={handleOpen}
                            >
                                <CloseIcon />
                            </IconButton>

                            <Box
                                sx={{
                                    padding: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: '5rem',
                                        height: '5rem',
                                        border: '0.063rem solid #E8E9E8',
                                        padding: '0.625rem',
                                        objectFit: 'contain',
                                        '& .css-1pqm26d-MuiAvatar-img': {
                                            objectFit: 'contain',
                                        },
                                    }}
                                    src={Logo}
                                />
                                <Box sx={{ marginLeft: '1.563rem' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1.25rem',
                                            color: '#214400',
                                        }}
                                    >
                                        Chuyên gia PLANTMED
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.938rem',
                                            color: '#214400',
                                        }}
                                    >
                                        Xin chào bạn! Chúng tôi ở đây và sẵn
                                        sàng tư vấn. Hãy cho chúng tôi biết câu
                                        hỏi của bạn!
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                color="success"
                                fullWidth
                                sx={{
                                    borderTop: '1px solid #E8E9E8',
                                    flex: 1,
                                }}
                                onClick={handleChatLayout}
                            >
                                Gửi tin nhắn
                            </Button>
                        </Box>
                    )}
                    <Box sx={{ marginTop: '0.625rem', textAlign: 'end' }}>
                        {requestList.length > 0 && (
                            <InfoIcon
                                color="warning"
                                sx={{
                                    position: 'absolute',
                                    zIndex: 10002,
                                    right: 46,
                                }}
                            />
                        )}
                        <IconButton
                            sx={{
                                width: '3.75rem',
                                height: '3.75rem',
                                backgroundColor: '#69AD28',
                                '&:hover': {
                                    backgroundColor: '#69AD28',
                                },
                            }}
                            onClick={handleChatLayout}
                        >
                            <ChatBubbleIcon
                                sx={{
                                    color: 'white',
                                    width: '100%',
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            ) : (
                <ChatLayout handleCloseChat={handleCloseChat} />
            )}
        </>
    )
}

export default ChatBox
