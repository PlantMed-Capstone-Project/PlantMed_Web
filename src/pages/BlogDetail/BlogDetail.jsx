import { Box, Typography } from '@mui/material'
import imgDemo from 'Images/heroSen.jpg'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import LoadComment from 'components/LoadComment'
import UserComment from 'components/UserComment'
import { ACCESS_TOKEN } from 'constant'
import useActions from 'hooks/useActions'
import useScrollTo from 'hooks/useScrollTo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdBlog } from 'rest/api/blog'
import { createComment, getCommentByBlog, replyComment } from 'rest/api/comment'
import { parseImg, parseJwt, sortComment } from 'utils'
import { readCookie } from 'utils/cookie'
function BlogDetail() {
    useScrollTo(0, 0)

    const user = parseJwt(readCookie(ACCESS_TOKEN))
    const params = useParams()
    const [blog, setBlog] = useState()
    const [commentList, setCommentList] = useState()
    const { show } = useActions(snackbarAction)
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
            sortComment(res.data)
            setCommentList(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBlogById()
        getComment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [activeComment, setActiveComment] = useState(null)

    const handleSend = async (value) => {
        try {
            await createComment(params.id, { content: value })
            getComment()
            setActiveComment(null)
        } catch (e) {
            show({
                message: e.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
        }
    }

    const handleReply = async (text, commentId) => {
        try {
            await replyComment({
                content: text,
                commentId: commentId,
            })
            getComment()
            setActiveComment(null)
        } catch (e) {
            show({
                message: e.response.data.message,
                severity: SNACKBAR_SEVERITY.ERROR,
                autoHideDuration: 2000,
            })
        }
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
                src={blog ? parseImg(blog.thumbnail) : imgDemo}
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
                Tác giả: {blog && blog.user.name}
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
                />
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
                        getComment={getComment}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default BlogDetail
