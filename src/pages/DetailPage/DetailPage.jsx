import { Box, Stack } from '@mui/material'
import { getIdPlant } from 'FakeData/plantData'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import InforDetail from 'components/InforDetail/InforDetail'
import MapLayout from 'components/MapLayout/MapLayout'
import MoreBlog from 'components/MoreBlog/MoreBlog'
import SlideDetail from 'components/SlideDetail/SlideDetail'
import useScrollTo from 'hooks/useScrollTo'
import { useParams } from 'react-router-dom'
import fakeImage from 'Images/heroSen.jpg'

export default function DetailPage() {
    const params = useParams()
    const data = getIdPlant(Number(params.id))
    const slideNav = 'topscreen'
    const slideBottom = 'bottomscreen'

    // scroll to top based on data
    useScrollTo(0, 0, data)

    const fakeData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 9,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
        {
            id: 10,
            image: 'https://images.unsplash.com/photo-1704303928271-775bb222ab46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cay Phuc Linh',
            des: 'There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.There are many things we can learn about the youth of today from this excellent video.',
        },
    ]

    const textData = {
        images: fakeImage,
        valueList: [
            { label: 'Tên quốc tế', value: data[0].title },
            { label: 'Tên thường gọi', value: data[0].nameEx },
            { label: 'Họ của cây', value: data[0].hoCay },
            { label: 'Nơi sinh trưởng', value: data[0].origin },
            { label: 'Cơ sở bán', value: data[0].shopSell },
        ],
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
            <HerosDeatail />
            <Stack
                direction="row"
                width="90rem"
                height="56.0625rem"
                mt="3rem"
                sx={{ backgroundColor: '#F4FFEB' }}
            >
                <SlideDetail data={data} />
                <InforDetail textData={textData} screenSlide={slideNav} />
            </Stack>
            <InforDetail textData={textData} screenSlide={slideBottom} />
            <MapLayout data={data} />
            <MoreBlog data={fakeData} />
        </Box>
    )
}
