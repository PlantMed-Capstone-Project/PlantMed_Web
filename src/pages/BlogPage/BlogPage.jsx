import { Box, Stack, Typography } from '@mui/material'
import BlogList from 'components/BlogList/BlogList'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import MyBlog from 'components/MyBlog/MyBlog'
import { useEffect, useState } from 'react'
import { getActiveByUser, getTop } from 'rest/api/blog'

function BlogPage() {
    const [userBlog, setUserBlog] = useState()
    const [blogList, setBlogList] = useState()
    const getUserBlog = async () => {
        try {
            const res = await getActiveByUser()
            setUserBlog(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getTopBlog = async () => {
        try {
            const res = await getTop('6')
            console.log(res.data)
            setBlogList(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUserBlog()
        getTopBlog()
    }, [])

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
            <HeroBlog />
            {userBlog && <MyBlog userBlog={userBlog} />}
            <JoinBlog />
            <Stack
                direction="column"
                alignItems="center"
                width="100%"
                mt="3.75rem"
                sx={{ backgroundColor: '#F4FFEB' }}
            ></Stack>
            <Typography
                sx={{
                    fontSize: '2.188rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                }}
            >
                Các bài viết mới nhất
            </Typography>
            <BlogList blogData={blogList} />
        </Box>
    )
}

export default BlogPage
