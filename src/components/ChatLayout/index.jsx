import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Paper, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import AvatarUser from 'Images/avatar.jpg'
import AlertDialog from 'components/AlertDialog'
import Chat from 'components/Chat'
import { ACCESS_TOKEN } from 'constant'
import { db } from 'firebase.js'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    updateDoc,
    where,
} from 'firebase/firestore'
import { useFirestoreQuery } from 'hooks/useFirestoreQuery'
import { useEffect, useState } from 'react'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'

function ChatLayout({ handleCloseChat }) {
    const alert = {
        title: 'Kết thúc phiên trò chuyện',
        content: 'Đã kết thúc phiên trò chuyện',
    }
    const [openDialog, setOpenDialog] = useState(false)
    //phòng chat
    const [room, setRoom] = useState(null)
    const [isSelect, setIsSelect] = useState(false)
    const [isRequest, setIsRequest] = useState(false)
    const [emailExpert, setEmailExpert] = useState('')
    const [expertIsDone, setExpertIsDone] = useState([])
    const user = parseJwt(readCookie(ACCESS_TOKEN))
    const requestRef = collection(db, 'requests')
    const expertRef = collection(db, 'expertOnline')
    //list yêu cầu trò chuyện
    const [requestList, setRequestList] = useState([])
    //check status người dùng đã vào chat hay chưa
    const [userStatus, setUserStatus] = useState([])
    //list expert đang onl
    const [expertList, setExpertList] = useState([])
    const handleChange = (email) => {
        setEmailExpert(email)
    }

    useFirestoreQuery(
        requestRef,
        [
            where('expertEmail', '==', user.Email),
            where('status', '==', 'pending'),
        ],
        setRequestList
    )

    useFirestoreQuery(
        expertRef,
        [where('status', '==', 'isOnline')],
        setExpertList
    )

    const type = user.Role === 'user' ? 'userRequest.Email' : 'expertEmail'
    useFirestoreQuery(
        requestRef,
        [where(type, '==', user.Email)],
        setUserStatus
    )

    useFirestoreQuery(
        expertRef,
        [where('status', '==', 'isChatting')],
        setExpertIsDone
    )

    useEffect(() => {
        const userChat = userStatus.find(({ status }) => status === 'active')

        if (
            userStatus.length !== 0 &&
            user.Role === 'user' &&
            userStatus[0].status === 'active'
        ) {
            setIsSelect(true)
            setRoom(userStatus[0].room)
        } else if (
            userStatus.length !== 0 &&
            user.Role === 'expert' &&
            userChat !== undefined
        ) {
            setIsSelect(true)
            setRoom(userChat.room)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStatus])
    const addRequest = async () => {
        if (!isRequest) {
            await addDoc(requestRef, {
                userRequest: user,
                expertEmail: emailExpert,
                status: 'pending',
                room: '',
            })
        }
    }

    useEffect(() => {
        const chatDone = userStatus.find(({ status }) => status === 'done')
        if (chatDone !== undefined) {
            setIsSelect(false)
            setIsRequest(false)
            setOpenDialog(true)
            console.log(isRequest)
            setTimeout(() => {
                handleCloseChat()
            }, 2000)
            if (user.Role === 'expert') {
                handleDeleChatDone(chatDone.id)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStatus])

    const removeRequest = async () => {
        await deleteDoc(doc(requestRef, userStatus[0].id))
        setIsRequest(false)
        setEmailExpert('')
    }

    const closeChat = () => {
        setIsSelect(false)
        if (user.Role === 'user') {
            setIsRequest(false)
            setEmailExpert('')
        }
    }
    const updateRequest = async (id) => {
        //tạo phòng để chat
        const randomRoom = Math.random().toString(36).substring(2, 8)
        //set trạng thái expert thành đang chat
        const expertStatus = expertList.find(
            ({ expert }) => expert.Email === user.Email
        )
        await updateDoc(doc(requestRef, id), {
            status: 'active',
            room: randomRoom,
        })

        await updateDoc(doc(expertRef, expertStatus.id), {
            status: 'isChatting',
        })
        setRoom(randomRoom)
        setIsSelect(true)
    }

    const handleDeleChatDone = async (id) => {
        await deleteDoc(doc(requestRef, id))
        const expertStatus = expertIsDone.find(
            ({ expert }) => expert.Email === user.Email
        )

        if (expertStatus) {
            await updateDoc(doc(expertRef, expertStatus.id), {
                status: 'isOnline',
            })
        }
    }

    useEffect(() => {
        if (emailExpert !== '') {
            addRequest()
            setIsRequest(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emailExpert])

    // eslint-disable-next-line no-lone-blocks
    {
        if (!isSelect) {
            return (
                <>
                    {openDialog && (
                        <AlertDialog
                            openDialog={openDialog}
                            setOpenDialog={setOpenDialog}
                            title={alert.title}
                            content={alert.content}
                            cancelButton={false}
                            cancelTitle="Kết thúc"
                            closeTitle="Đồng ý"
                        />
                    )}
                    <Paper
                        sx={{
                            bottom: 20,
                            right: 20,
                            position: 'fixed',
                            zIndex: 1001,
                            width: '21.875rem',
                            height: '15.625rem',
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '0.625rem',
                        }}
                        elevation={3}
                    >
                        <Box
                            sx={{
                                height: '3.125rem',
                                backgroundColor: '#69AD28',
                                textAlign: 'end',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderTopRightRadius: '0.625rem',
                                borderTopLeftRadius: '0.625rem',
                            }}
                        >
                            {user.Role === 'user' ? (
                                <Typography
                                    sx={{
                                        marginLeft: '1.7rem',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    Danh sách chuyên gia
                                </Typography>
                            ) : (
                                <Typography
                                    sx={{
                                        marginLeft: '1.7rem',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >
                                    Yêu cầu trò chuyện
                                </Typography>
                            )}
                            <IconButton
                                sx={{ height: '100%' }}
                                onClick={handleCloseChat}
                            >
                                <CloseIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                        {user.Role === 'user' ? (
                            <Box
                                sx={{
                                    overflowY: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    padding: '0.625rem',
                                }}
                            >
                                {isRequest ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            flex: 1,
                                        }}
                                    >
                                        <Box>
                                            <CircularProgress color="success" />
                                            <Typography>
                                                Vui lòng đợi chuyên gia
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                onClick={removeRequest}
                                                sx={{
                                                    backgroundColor: '#69AD28',
                                                    marginTop: '0.625rem',
                                                }}
                                            >
                                                Hủy
                                            </Button>
                                        </Box>
                                    </Box>
                                ) : (
                                    // eslint-disable-next-line array-callback-return
                                    expertList.map((data) => {
                                        if (data.status === 'isOnline') {
                                            return (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        marginBottom:
                                                            '0.625rem',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                        }}
                                                    >
                                                        <Avatar
                                                            src={AvatarUser}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                marginLeft:
                                                                    '0.625rem',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        >
                                                            {
                                                                data.expert
                                                                    .FullName
                                                            }
                                                        </Typography>
                                                    </Box>
                                                    <Button
                                                        color="success"
                                                        sx={{
                                                            '& .css-1lg55su-MuiButtonBase-root-MuiButton-root':
                                                                {
                                                                    lineHeight: 0,
                                                                },
                                                        }}
                                                        onClick={() =>
                                                            handleChange(
                                                                data.expert
                                                                    .Email
                                                            )
                                                        }
                                                    >
                                                        Yêu cầu
                                                    </Button>
                                                </Box>
                                            )
                                        }
                                    })
                                )}
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    paddingTop: '0.625rem',
                                    textAlign: 'center',
                                    height: '100%',
                                    overflowY: 'scroll',
                                }}
                            >
                                <Typography sx={{ marginBottom: '0.625rem' }}>
                                    Bạn có {requestList.length} yêu cầu trò
                                    chuyện
                                </Typography>
                                {requestList.map((data) => (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '0.625rem',
                                            padding: '0 1.25rem',
                                        }}
                                    >
                                        <Typography>
                                            {data.userRequest.FullName}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                updateRequest(data.id)
                                            }
                                            sx={{
                                                marginLeft: '1.25rem',
                                                backgroundColor: '#69AD28',
                                                '&:hover': {
                                                    backgroundColor: '#69AD28',
                                                },
                                            }}
                                        >
                                            Chấp nhận
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Paper>
                </>
            )
        }
    }
    return (
        <>
            {room && (
                <Chat
                    room={room}
                    user={user}
                    closeChat={closeChat}
                    userStatus={userStatus}
                />
            )}
        </>
    )
}

export default ChatLayout
