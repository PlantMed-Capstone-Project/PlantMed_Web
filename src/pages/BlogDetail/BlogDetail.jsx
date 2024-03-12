import { Box, Typography } from '@mui/material'
import { createReply } from 'FakeData/plantData'
import imgDemo from 'Images/heroSen.jpg'
import LoadComment from 'components/LoadComment'
import UserComment from 'components/UserComment'
import { ACCESS_TOKEN } from 'constant'
import useScrollTo from 'hooks/useScrollTo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdBlog } from 'rest/api/blog'
import { createComment, getCommentByBlog } from 'rest/api/comment'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'
function BlogDetail() {
    useScrollTo(0, 0)
    const user = parseJwt(readCookie(ACCESS_TOKEN))
    console.log(user)
    const params = useParams()
    const [blog, setBlog] = useState()
    const [commentList, setCommentList] = useState()
    const getBlogById = async () => {
        try {
            const res = await getIdBlog(params.id)
            setBlog(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getComment = async () => {
        try {
            const res = await getCommentByBlog(params.id)
            setCommentList(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBlogById()
        getComment()
    }, [])

    const [activeComment, setActiveComment] = useState(null)

    const handleSend = async (value) => {
        try {
            //Đợi id user in ACCESS_TOKEN
        } catch (e) {
            console.log(e)
        }
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
                {blog && blog.title}
            </Typography>
            <Typography
                sx={{
                    color: '#69AD28',
                    fontWeight: '300',
                    fontSize: '1.25rem',
                }}
            >
                Tác giả: {blog && blog.user.fullName}
            </Typography>

            <Box sx={{ padding: '3.125rem 6.25rem', width: '100%' }}>
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '1.25rem',
                    }}
                    dangerouslySetInnerHTML={{
                        __html: blog && blog.content,
                    }}
                ></Typography>
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
                <UserComment name={user.FullName} onSendClick={handleSend} />
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
