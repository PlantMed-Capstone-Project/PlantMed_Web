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
} from 'firebase/firestore'
import { Paper } from '@material-ui/core'
import SendIcon from '@mui/icons-material/Send'
import { MessageLeft, MessageRight } from 'components/Message'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

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

function Chat({ room, user, removeRequest, userStatus }) {
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const messageRef = collection(db, 'messages')
    const messagesBodyRef = useRef(null)
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

    const endChat = async () => {
        //gửi mail cái rồi làm gì làm
        for (const data of messages) {
            await deleteDoc(doc(messageRef, data.id))
        }
        removeRequest()
    }

    const classes = useStyles()
    return (
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
                            <Typography>{userStatus[0].expertEmail}</Typography>
                        ) : (
                            <Typography>
                                {userStatus[0].userRequest.Email}
                            </Typography>
                        )}
                    </Box>
                    <IconButton
                        sx={{ height: '100%' }}
                        //onClick={handleCloseChat}
                    >
                        <CloseIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>
                <Paper className={classes.messagesBody} ref={messagesBodyRef}>
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
                        label="Enter chat"
                        onChange={(e) => setNewMessage(e.target.value)}
                        fullWidth
                        value={newMessage}
                        size="small"
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
    )
}

export default Chat
