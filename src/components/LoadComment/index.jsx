import { Box, Typography } from '@mui/material'
import imgDemo from 'Images/avatar.jpg'
import Avatar from '@mui/material/Avatar'
import { getUserId } from 'FakeData/plantData'
import UserComment from 'components/UserComment'
import ReportModal from 'components/ReportModal'
import { useState } from 'react'

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
}) {
    const user = getUserId(comment.userId)

    const isReply =
        activeComment &&
        activeComment.type == type &&
        activeComment.id === comment.id

    const id = type === 'comment' ? comment.id : comment.commentId

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
    return (
        <>
            <Box sx={{ marginTop: '1.125rem', width: '50%' }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar src={imgDemo} />
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
                            {user.userName}
                        </Typography>
                        <Typography sx={{ fontWeight: '300' }}>
                            {comment.comment_content}
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
                                type: type == 'comment' ? 'comment' : 'reply',
                            })
                        }
                        sx={styles.reply}
                    >
                        Trả lời
                    </Typography>
                    <Typography sx={styles.reply} onClick={handleOpen}>
                        Báo cáo
                    </Typography>
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
                        name="Phuong"
                        onSendClick={(text) => handleReply(text, id)}
                    />
                </Box>
            )}
            {type == 'comment' && (
                <Box>
                    {comment.reply_comment.length > 0 && (
                        <Box sx={{ marginLeft: '3.7rem', width: '90.5%' }}>
                            {comment.reply_comment?.map((data) => (
                                <LoadComment
                                    comment={data}
                                    type="reply"
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                    handleReply={handleReply}
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