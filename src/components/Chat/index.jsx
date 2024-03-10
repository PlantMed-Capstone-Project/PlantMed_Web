import React, { useEffect, useRef, useState } from 'react'
import { Button, TextField, Box, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { db } from 'firebase.js'
import {
    addDoc,
    collection,
    serverTimestamp,
    query,
    onSnapshot,
    where,
    orderBy,
    deleteDoc,
    doc,
    updateDoc,
} from 'firebase/firestore'
import { Paper } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send'
import { MessageLeft, MessageRight } from 'components/Message'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Avatar from '@mui/material/Avatar'
import AlertDialog from 'components/AlertDialog'
import { useFirestoreQuery } from 'utils'

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            borderTopRightRadius: '0.625rem',
            borderTopLeftRadius: '0.625rem',
        },
        messagesBody: {
            width: 'calc( 100% - 20px )',
            margin: 10,
            overflowY: 'auto',
            height: 'calc( 100% - 80px )',
        },
    })
)
const styles = {
    container: {
        bottom: 20,
        right: 20,
        position: 'fixed',
        zIndex: 1001,
        width: '21.875rem',
        height: '28.125rem',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.625rem',
    },
}

function Chat({ room, user, closeChat, userStatus }) {
    const alert = {
        title: 'Kết thúc phiên trò chuyện',
        content:
            'Thoát ra đồng nghĩa với việc kết thúc trò chuyện với người dùng hiện tại, bạn có muốn tiếp tục?',
    }

    // eslint-disable-next-line no-unused-vars
    const [checkEndChat, setCheckEndChat] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const [showChat, setShowChat] = useState(true)
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const requestRef = collection(db, 'requests')
    const messageRef = collection(db, 'messages')
    const messagesBodyRef = useRef(null)
    const userChat = userStatus.find(({ status }) => status === 'active')
    useEffect(() => {
        const queryMessage = query(
            messageRef,
            where('room', '==', room),
            orderBy('createAt')
        )

        const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
            let messages = []
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const type = user.Role === 'user' ? 'userRequest.Email' : 'expertEmail'
    useFirestoreQuery(
        requestRef,
        [where(type, '==', user.Email)],
        setCheckEndChat
    )

    useEffect(() => {
        // Scroll to the bottom when messages change
        if (messagesBodyRef.current) {
            messagesBodyRef.current.scrollTop =
                messagesBodyRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (newMessage === '') return

        await addDoc(messageRef, {
            text: newMessage,
            createAt: serverTimestamp(),
            email: user.Email,
            role: user.Role,
            room,
        })
        setNewMessage('')
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSend()
            e.preventDefault()
        }
    }

    const handleShowChat = () => {
        setShowChat((prevState) => !prevState)
    }

    // eslint-disable-next-line no-unused-vars
    const endChat = async () => {
        closeChat()
        //gửi mail cái rồi làm gì làm\
        //Xóa request giữa expert với user
        try {
            await updateDoc(doc(requestRef, userChat.id), {
                status: 'done',
            })
        } catch (e) {
            console.log(e)
        }

        //Xóa hết quá khứ
        for (const data of messages) {
            await deleteDoc(doc(messageRef, data.id))
        }
    }

    const handleDialog = () => {
        setOpenDialog(true)
    }

    const classes = useStyles()
    // eslint-disable-next-line no-lone-blocks

    return (
        <>
            {showChat ? (
                <>
                    {openDialog && (
                        <AlertDialog
                            openDialog={openDialog}
                            setOpenDialog={setOpenDialog}
                            callBack={endChat}
                            title={alert.title}
                            content={alert.content}
                            cancelButton={true}
                        />
                    )}
                    <Box sx={styles.container}>
                        <Paper className={classes.paper} elevation={2}>
                            <Box
                                sx={{
                                    height: '3.125rem',
                                    backgroundColor: '#69AD28',
                                    textAlign: 'end',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderTopRightRadius: '0.625rem',
                                    borderTopLeftRadius: '0.625rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        marginLeft: '0.625rem',
                                        color: 'white',
                                    }}
                                >
                                    {user.Role === 'user' ? (
                                        <Typography>
                                            {userStatus[0].expertEmail}
                                        </Typography>
                                    ) : (
                                        <>
                                            {userChat && (
                                                <Typography>
                                                    {
                                                        userChat.userRequest
                                                            .FullName
                                                    }
                                                </Typography>
                                            )}
                                        </>
                                    )}
                                </Box>
                                <Box>
                                    <IconButton onClick={handleShowChat}>
                                        <HorizontalRuleIcon
                                            sx={{ color: 'white' }}
                                        />
                                    </IconButton>
                                    <IconButton
                                        sx={{ height: '100%' }}
                                        onClick={handleDialog}
                                    >
                                        <CloseIcon sx={{ color: 'white' }} />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Paper
                                className={classes.messagesBody}
                                ref={messagesBodyRef}
                            >
                                {messages.map((data) =>
                                    data.role !== user.Role ? (
                                        <MessageLeft
                                            message={data.text}
                                            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                                            displayName={data.email}
                                            avatarDisp={true}
                                        />
                                    ) : (
                                        <MessageRight
                                            message={data.text}
                                            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                                            avatarDisp={true}
                                        />
                                    )
                                )}
                            </Paper>
                            <Box sx={{ display: 'flex', width: '100%' }}>
                                <TextField
                                    onChange={(e) =>
                                        setNewMessage(e.target.value)
                                    }
                                    fullWidth
                                    value={newMessage}
                                    size="small"
                                    onKeyDown={handleEnter}
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleSend}
                                    endIcon={<SendIcon />}
                                    sx={{
                                        backgroundColor: '#69AD28',
                                    }}
                                >
                                    Gửi
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </>
            ) : (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        zIndex: 10001,
                    }}
                >
                    <Avatar
                        onClick={handleShowChat}
                        alt="Remy Sharp"
                        src="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                        sx={{
                            width: 56,
                            height: 56,
                            cursor: 'pointer',
                        }}
                    />
                </Box>
            )}
        </>
    )
}

export default Chat
