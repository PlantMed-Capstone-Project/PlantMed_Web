import { Box, Stack } from '@mui/material'
import imgDemo from 'Images/heroSen.jpg'
import BlogList from 'components/BlogList/BlogList'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import MyBlog from 'components/MyBlog/MyBlog'
import { useEffect, useState } from 'react'
import { getByUser } from 'rest/api/blog'

function BlogPage() {
    const [userBlog, setUserBlog] = useState()
    const getUserBlog = async () => {
        try {
            const res = await getByUser()
            setUserBlog(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUserBlog()
    }, [])
    const blogData = [
        {
            id: 1,
            name: 'Câu kỷ tử',
            description:
                'Ago sign pot cool exactly dull pilot feathers anyway art pitch earn tax throw meant those missing instrument property',
            image: imgDemo,
        },
        {
            id: 2,
            name: 'Câu kỷ tử',
            description: 'Mot cây gì đó',
            image: imgDemo,
        },
        {
            id: 3,
            name: 'Câu kỷ tử',
            description: 'la cay gi do',
            image: imgDemo,
        },
        {
            id: 4,
            name: 'Câu kỷ tử',
            description: 'la cay gi do',
            image: imgDemo,
        },
    ]

    const blogList = [
        {
            id: 1,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 2,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 3,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 4,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 5,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 6,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 7,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 8,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
    ]

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
            >
                <DiversityPlant title="BÀI VIẾT NỔI BẬT" data={blogData} />
            </Stack>
            <BlogList blogData={blogList} />
        </Box>
    )
}

export default BlogPage
