import { Box, Stack } from '@mui/material'
import imgDemo from 'Images/heroSen.jpg'
import BlogList from 'components/BlogList/BlogList'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import MyBlog from 'components/MyBlog/MyBlog'

function BlogPage() {
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

    const blogs = [
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
        {
            id: 9,
            title: 'Cầu Kỳ Tử',
            image: imgDemo,
            description:
                'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        },
        {
            id: 10,
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
            <MyBlog blogData={blogData} />
            <JoinBlog />
            <Stack
                direction="column"
                alignItems="center"
                width="100%"
                mt="3.75rem"
                sx={{ backgroundColor: '#F4FFEB' }}
            >
                <DiversityPlant title="BÀI VIẾT NỔI BẬT" data={blogs} />
            </Stack>
            <BlogList blogData={blogData} />
        </Box>
    )
}

export default BlogPage
