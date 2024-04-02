import { Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@mui/icons-material/Close'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import SendIcon from '@mui/icons-material/Send'
import { Box, Button, TextField, Typography } from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import IconButton from '@mui/material/IconButton'
import AlertDialog from 'components/AlertDialog'
import { MessageLeft, MessageRight } from 'components/Message'
import { db, imgDb } from 'firebase.js'
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage'
import { v4 } from 'uuid'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    orderBy,
    serverTimestamp,
    updateDoc,
    where,
} from 'firebase/firestore'
import { useFirestoreQuery } from 'hooks/useFirestoreQuery'
import { useEffect, useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import * as S from './Chat.styled'
import useActions from 'hooks/useActions'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import { convertChatToString } from 'utils'

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
    const { show } = useActions(snackbarAction)
    const alert = {
        title: 'Kết thúc phiên trò chuyện',
        content:
            'Thoát ra đồng nghĩa với việc kết thúc trò chuyện với người dùng hiện tại, bạn có muốn tiếp tục?',
    }

    const [openDialog, setOpenDialog] = useState(false)
    const [showChat, setShowChat] = useState(true)
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const requestRef = collection(db, 'requests')
    const messageRef = collection(db, 'messages')
    const messagesBodyRef = useRef(null)
    const userChat = userStatus.find(({ status }) => status === 'active')

    useFirestoreQuery(
        messageRef,
        [where('room', '==', room), orderBy('createAt')],
        setMessages
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

    const handleUploadImage = (e) => {
        const files = e.target.files
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
        try {
            const isInclude = allowedTypes.includes(files[0].type)
            if (files.length > 0 && isInclude) {
                const imgs = ref(imgDb, `Imgs/${v4()}`)
                uploadBytes(imgs, files[0]).then((data) => {
                    getDownloadURL(data.ref).then((val) => {
                        uploadImg(val)
                    })
                })
            } else {
                show({
                    message: 'Sai định dạng hình ảnh!',
                    severity: SNACKBAR_SEVERITY.ERROR,
                    autoHideDuration: 2000,
                })
            }
        } catch (e) {
            //console.log(e)
        }
    }

    const uploadImg = async (val) => {
        await addDoc(messageRef, {
            text: val,
            createAt: serverTimestamp(),
            email: user.Email,
            role: user.Role,
            room,
        })
    }

    const handleShowChat = () => {
        setShowChat((prevState) => !prevState)
    }

    // eslint-disable-next-line no-unused-vars
    const endChat = async () => {
        handleSendMail()
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
            //Xóa hình ảnh
            if (data.text.startsWith('https://firebasestorage')) {
                // Create a reference to the file to delete
                const desertRef = ref(imgDb, data.text)
                // Delete the file
                deleteObject(desertRef)
            }
            //xóa text
            await deleteDoc(doc(messageRef, data.id))
        }
    }

    const handleSendMail = async () => {
        const userName = userStatus[0].userRequest.FullName
        const expertName = userStatus[0].expertName
        let html = ''

        for (const mess of messages) {
            html +=
                mess.role === 'expert'
                    ? convertChatToString(expertName, mess.text)
                    : convertChatToString(userName, mess.text)
        }
        const obj = { email: userStatus[0].userRequest.Email, content: html }
        try {
            //put obj here when have api chat
            console.log(html)
        } catch (e) {
            console.log(e)
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
                            cancelTitle="Kết thúc"
                            closeTitle="Tiếp tục"
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
                                            {userStatus[0] &&
                                                userStatus[0].expertName}
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
                                        <MessageLeft message={data.text} />
                                    ) : (
                                        <MessageRight message={data.text} />
                                    )
                                )}
                            </Paper>
                            <Box sx={{ display: 'flex', width: '100%' }}>
                                <Button
                                    component="label"
                                    tabIndex={-1}
                                    onChange={(e) => handleUploadImage(e)}
                                >
                                    <ImageIcon color="success" />
                                    <S.VisuallyHiddenInput type="file" />
                                </Button>
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
                    <IconButton
                        sx={{
                            width: '3.75rem',
                            height: '3.75rem',
                            backgroundColor: '#69AD28',
                            '&:hover': {
                                backgroundColor: '#69AD28',
                            },
                        }}
                        onClick={handleShowChat}
                    >
                        <ChatBubbleIcon
                            sx={{
                                color: 'white',
                                width: '100%',
                            }}
                        />
                    </IconButton>
                </Box>
            )}
        </>
    )
}

export default Chat
