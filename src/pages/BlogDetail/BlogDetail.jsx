import { Box, Typography } from '@mui/material'
import { getIdBlog } from 'FakeData/plantData'
import imgDemo from 'Images/heroSen.jpg'
import LoadComment from 'components/LoadComment'
import UserComment from 'components/UserComment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    useEffect(() => {
        // khi navigate sang trang khác phải sử dụng cái này để cho nó up to đầu trang
        window.scrollTo(0, 0)
    }, [])

    const params = useParams()
    const data = getIdBlog(parseInt(params.id))
    const commnetList = [
        { id: '1', name: 'Phương', content: 'Hello mấy cưng' },
        { id: '2', name: 'Huy', content: 'Lô *** ***' },
    ]
    const [comment, setComment] = useState('')
    const handleChangeComment = (event) => {
        setComment(event.target.value)
    }
    const handleSend = () => {
        console.log(comment)
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
                <UserComment
                    name="Phuong"
                    onInputChange={handleChangeComment}
                    onSendClick={handleSend}
                />
                {commnetList?.map((data) => (
                    <LoadComment data={data} />
                ))}
                <Typography
                    sx={{
                        textDecoration: 'underline',
                        color: '#69AD28',
                        '&:hover': { color: 'blue', cursor: 'pointer' },
                    }}
                >
                    Xem thêm câu trả lời
                </Typography>
            </Box>
        </Box>
    )
}

export default BlogDetail
