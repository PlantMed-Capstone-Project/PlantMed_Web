import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AlertDialog from 'components/AlertDialog'
import ReportModal from 'components/ReportModal'
import UserComment from 'components/UserComment'
import { ACCESS_TOKEN } from 'constant'
import { useState } from 'react'
import { deleteComment, deleteReplyComment } from 'rest/api/comment'
import { parseImg, parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'

const styles = {
    reply: {
        fontSize: '0.625rem',
        color: '#69AD28',
        marginRight: '1.25rem',
        '&:hover': { color: 'blue', cursor: 'pointer' },
    },
}

function LoadComment({
    comment,
    type,
    activeComment,
    setActiveComment,
    handleReply,
    getComment,
    avatarUser,
}) {
    const user = parseJwt(readCookie(ACCESS_TOKEN))

    const [openDialog, setOpenDialog] = useState(false)
    const alert = {
        title: 'Xóa bình luận',
        content: 'Bạn có chắc chắn muốn xóa bình luận của mình?',
    }
    const isReply =
        activeComment &&
        activeComment.type === type &&
        activeComment.id === comment.id

    const isDelete = user.Email === comment.user.email

    const id = type === 'comment' ? comment.id : comment.commentParentId

    const checkBoxLabel = [
        {
            label: 'Ngôn từ không phù hợp',
        },
        {
            label: 'Chủ đề không liên quan',
        },
        {
            label: 'Thông tin sai sự thật',
        },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleReport = (value) => {
        console.log(value)
        //hanlde send report label later
    }

    const handleDeleteComment = async () => {
        try {
            if (type === 'comment') {
                await deleteComment(comment.id)
            } else {
                await deleteReplyComment(comment.id)
            }
            getComment()
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            {openDialog && (
                <AlertDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    title={alert.title}
                    content={alert.content}
                    callBack={handleDeleteComment}
                    cancelButton={true}
                    cancelTitle="Xóa"
                    closeTitle="Hủy bỏ"
                />
            )}
            <Box sx={{ marginTop: '1.125rem', width: '50%' }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar src={parseImg(comment.user.image)} />
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
                        <Typography
                            sx={{ fontWeight: '700', color: '#214400' }}
                        >
                            {comment.user.fullName}
                        </Typography>
                        <Typography sx={{ fontWeight: '300' }}>
                            {comment.content}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        marginRight: '2.688rem',
                        marginTop: '0.325rem',
                        fontSize: '0.625rem',
                    }}
                >
                    <Typography
                        onClick={() =>
                            setActiveComment({
                                id: comment.id,
                                type: type === 'comment' ? 'comment' : 'reply',
                            })
                        }
                        sx={styles.reply}
                    >
                        Trả lời
                    </Typography>
                    {user.Email !== comment.user.email && (
                        <Typography sx={styles.reply} onClick={handleOpen}>
                            Báo cáo
                        </Typography>
                    )}
                    {isDelete && (
                        <Typography
                            onClick={() => setOpenDialog(true)}
                            sx={styles.reply}
                        >
                            Xóa
                        </Typography>
                    )}
                    <ReportModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        handleReport={handleReport}
                        checkBoxLabel={checkBoxLabel}
                    />
                </Box>
            </Box>
            {isReply && (
                <Box sx={{ marginLeft: '3.125rem', width: '92%' }}>
                    <UserComment
                        name={user.FullName}
                        onSendClick={(text) => handleReply(text, id)}
                        avatar={avatarUser}
                    />
                </Box>
            )}
            {type === 'comment' && (
                <Box>
                    {comment.replyComments.length > 0 && (
                        <Box sx={{ marginLeft: '3.7rem', width: '90.5%' }}>
                            {comment.replyComments?.map((data) => (
                                <LoadComment
                                    comment={data}
                                    type="reply"
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                    handleReply={handleReply}
                                    getComment={getComment}
                                    avatarUser={avatarUser}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            )}
        </>
    )
}

export default LoadComment
