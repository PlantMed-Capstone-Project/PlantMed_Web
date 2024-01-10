import { Box, Stack } from '@mui/material'
import { getIdPlant } from 'FakeData/plantData'
import Header from 'components/Header/Header'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import InforDetail from 'components/InforDetail/InforDetail'
import MoreBlog from 'components/MoreBlog/MoreBlog'
import SlideDetail from 'components/SlideDetail/SlideDetail'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function DetailPage() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const id = Number(searchParams.get('id'))
    const data = getIdPlant(id)

    useEffect(() => {
        // khi navigate sang trang khác phải sử dụng cái này để cho nó up to đầu trang
        window.scrollTo(0, 0)
    }, [searchParams])

    const fakeData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 9,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 10,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
    ]

    const textData = [
        { label: 'Tên quốc tế', value: data[0].name },
        { label: 'Tên thường gọi', value: data[0].nameEx },
        { label: 'Họ của cây', value: data[0].hoCay },
        { label: 'Nơi sinh trưởng', value: data[0].location },
        { label: 'Cơ sở bán', value: data[0].shopSell },
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
            <Header />
            <HerosDeatail />
            <Stack
                direction="row"
                width="90rem"
                height="56.0625rem"
                mt="3rem"
                sx={{ backgroundColor: '#F4FFEB' }}
            >
                <SlideDetail data={data} />
                <InforDetail textData={textData} screenSlide={true} />
            </Stack>
            <InforDetail textData={textData} screenSlide={false} />
            <MoreBlog data={fakeData} />
        </Box>
    )
}
