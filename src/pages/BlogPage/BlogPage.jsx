import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Header from 'components/Header/Header'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import MyBlog from 'components/MyBlog/MyBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import BlogList from 'components/BlogList/BlogList'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import Footer from 'components/Footer/Footer'

function BlogPage() {
    const nav = ['TRANG CHỦ', 'PHÁT HIỆN HÌNH ẢNH', 'BÀI VIẾT', 'THỰC VẬT', 'VỀ CHÚNG TÔI']

    const blogData = [
        { id: 1, name: 'Câu kỷ tử', description: "Ago sign pot cool exactly dull pilot feathers anyway art pitch earn tax throw meant those missing instrument property", image: '../../Images/heroSen.jpg' },
        { id: 2, name: 'Câu kỷ tử', description: "Mot cây gì đó", image: "../../Images/heroSen.jpg" },
        { id: 3, name: 'Câu kỷ tử', description: "la cay gi do", image: "../../Images/heroSen.jpg" },
        { id: 4, name: 'Câu kỷ tử', description: "la cay gi do", image: "../../Images/heroSen.jpg" },
    ]
    
    const blogs = [
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
        { title: 'Cầu Kỳ Tử', image: imgDemo, description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    ]

    return (
        <Box component="section" sx={{
            width: "90rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Header nav={nav} />
            <HeroBlog />
            <MyBlog blogData={blogData} />
            <JoinBlog />
            <Stack
                direction="column"
                alignItems="center"
                width="100%"
                mt="3.75rem"
                sx={{ backgroundColor: "#F4FFEB" }}
            >
                <DiversityPlant title='BÀI VIẾT NỔI BẬT' data={blogs} />
            </Stack>
            <BlogList blogData={blogData} />
            <Footer />
        </Box >
    )
}

export default BlogPage