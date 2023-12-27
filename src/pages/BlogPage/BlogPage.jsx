import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Header from 'components/Header/Header'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import MyBlog from 'components/MyBlog/MyBlog'
import JoinBlog from 'components/JoinBlog/JoinBlog'
import BlogList from 'components/BlogList/BlogList'
import DiversityPlant from 'components/DiversityPlant/DiversityPlant'
import Footer from 'components/Footer/Footer'

const blogData = [
    { id: 1, name: 'Câu kỷ tử', description: "Ago sign pot cool exactly dull pilot feathers anyway art pitch earn tax throw meant those missing instrument property", image: '../../Images/heroSen.jpg' },
    { id: 2, name: 'Câu kỷ tử', description: "Mot cây gì đó", image: "../../Images/heroSen.jpg" },
    { id: 3, name: 'Câu kỷ tử', description: "la cay gi do", image: "../../Images/heroSen.jpg" },
    { id: 4, name: 'Câu kỷ tử', description: "la cay gi do", image: "../../Images/heroSen.jpg" },
]

function BlogPage() {
    return (
        <Box component="section" sx={{
            width: "90rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Header />
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
                <DiversityPlant />
            </Stack>
            <BlogList blogData={blogData} />
            <Footer />
        </Box >
    )
}

export default BlogPage