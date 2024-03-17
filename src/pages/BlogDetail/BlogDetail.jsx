import { Box, Typography } from '@mui/material'
import {
    createComment,
    createReply,
    getCommentByIdBlog,
    getIdBlog,
} from 'FakeData/plantData'
import imgDemo from 'Images/heroSen.jpg'
import { LikeButton } from 'components/LikeButton'
import LoadComment from 'components/LoadComment'
import UserComment from 'components/UserComment'
import useScrollTo from 'hooks/useScrollTo'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    useScrollTo(0, 0)

    const params = useParams()
    const data = getIdBlog(parseInt(params.id))
    const [commentList, setCommentList] = useState(
        getCommentByIdBlog(params.id)
    )

    const [activeComment, setActiveComment] = useState(null)

    const handleSend = (value) => {
        setCommentList([createComment(value), ...commentList])
        setActiveComment(null)
    }

    const handleReply = (text, commentId) => {
        setCommentList((prevComments) => {
            return prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          reply_comment: [
                              ...comment.reply_comment,
                              createReply(text, commentId),
                          ],
                      }
                    : comment
            )
        })
        setActiveComment(null)
    }

    return (
        <Box
            component="section"
            sx={{
                width: '90rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                component="img"
                sx={{
                    height: '18.75rem',
                    width: '100%',
                    objectFit: 'cover',
                }}
                src={imgDemo}
            />

            <Typography
                sx={{
                    fontWeight: '700',
                    fontSize: '2.188rem',
                    color: '#69AD28',
                    marginTop: '3.125rem',
                }}
            >
                {data.title}
            </Typography>
            <Typography
                sx={{
                    color: '#69AD28',
                    fontWeight: '300',
                    fontSize: '1.25rem',
                }}
            >
                {data.user}
            </Typography>

            <Box sx={{ margin: '3.125rem 6.25rem' }}>
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '1.25rem',
                    }}
                >
                    {data.description}
                </Typography>
                <LikeButton likeQuantity={5} />
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '1.25rem',
                        margin: '3.125rem 0',
                        fontWeight: '700',
                    }}
                >
                    Nhận xét của bạn:
                </Typography>
                <UserComment name="Phuong" onSendClick={handleSend} />
                {commentList?.map((data) => (
                    <LoadComment
                        comment={data}
                        type="comment"
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        handleReply={handleReply}
                    />
                ))}
                <Typography
                    sx={{
                        textDecoration: 'underline',
                        color: '#69AD28',
                        '&:hover': { color: 'blue', cursor: 'pointer' },
                        marginTop: '3.125rem',
                    }}
                >
                    Xem thêm câu trả lời
                </Typography>
            </Box>
        </Box>
    )
}

export default BlogDetail
