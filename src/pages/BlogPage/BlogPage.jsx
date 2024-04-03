import { Box, Stack, Typography } from '@mui/material'
import BlogList from 'components/BlogList/BlogList'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import MyBlog from 'components/MyBlog/MyBlog'
import { useEffect, useState } from 'react'
import { getActiveByUser, getTop } from 'rest/api/blog'

function BlogPage() {
    const [userBlog, setUserBlog] = useState([])
    const [blogList, setBlogList] = useState([])
    const [loadingByUser, setLoadingByUser] = useState()
    const [loadingAllBlog, setLoadingAllBlog] = useState()

    const getUserBlog = async () => {
        setLoadingByUser(true)
        try {
            const res = await getActiveByUser()
            setUserBlog(res.data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingByUser(false)
        }
    }

    const getTopBlog = async () => {
        setLoadingAllBlog(true)
        try {
            const res = await getTop('9')
            setBlogList(res.data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingAllBlog(false)
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
            <MyBlog userBlog={userBlog} loading={loadingByUser} />
            <JoinBlog />
            <Stack
                direction="column"
                alignItems="center"
                width="90%"
                mt="3.75rem"
            >
                <Typography
                    sx={{
                        fontSize: '2.188rem',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        fontWeight: '800',
                        color: '#214400',
                    }}
                >
                    Bài viết nổi bật
                </Typography>
                <BlogList blogData={blogList} loading={loadingAllBlog} />
            </Stack>
        </Box>
    )
}

export default BlogPage
