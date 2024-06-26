import { Box, Stack } from '@mui/material'
import HerosDeatail from 'components/HerosDeatail/HerosDeatail'
import InforDetail from 'components/InforDetail/InforDetail'
import MapLayout from 'components/MapLayout/MapLayout'
import MoreBlog from 'components/MoreBlog/MoreBlog'
import SlideDetail from 'components/SlideDetail/SlideDetail'
import useScrollTo from 'hooks/useScrollTo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { countSearch, getById } from 'rest/api/plant'

export default function DetailPage() {
    const [loading, setloading] = useState()
    const params = useParams()
    const [data, setData] = useState()
    const slideNav = 'topscreen'
    const slideBottom = 'bottomscreen'
    // scroll to top based on data
    useScrollTo(0, 0, data)

    // Lấy dữ liệu cây theo ID
    const fetchPlantByID = async (id) => {
        setloading(true)
        try {
            const response = await getById(id)
            let dataRsp = response.data
            setData(dataRsp)
            //count here
            await countSearch(id)
        } catch (error) {
            console.log(error)
        } finally {
            setloading(false)
        }
    }

    const textData = {
        valueList: [
            { label: 'Tên quốc tế', value: data?.internationalName },
            { label: 'Họ của cây', value: data?.surName },
            { label: 'Tên thường gọi', value: data?.name },
            { label: 'Nguồn gốc', value: data?.origin },
            { label: 'Đặc điểm sinh sống', value: data?.placeOfBirth },
        ],
    }

    const useSageData = {
        name: data?.name,
        valueList: [{ label: 'Cách sử dụng', value: data?.usage }],
    }

    useEffect(() => {
        fetchPlantByID(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <HerosDeatail />
            <Stack
                direction="row"
                width="90rem"
                height="56.0625rem"
                mt="3rem"
                sx={{ backgroundColor: '#F4FFEB' }}
            >
                <SlideDetail data={data} loading={loading} />
                <InforDetail
                    textData={textData}
                    screenSlide={slideNav}
                    loading={loading}
                />
            </Stack>
            <InforDetail
                textData={useSageData}
                screenSlide={slideBottom}
                loading={loading}
            />
            <MapLayout data={data} loading={loading} />
            <MoreBlog namePlant={data?.name} />
        </Box>
    )
}
