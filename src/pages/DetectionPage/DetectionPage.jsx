import { Box, Stack, Typography } from '@mui/material'
import PaginationLayout from 'components/PaginationLayout/PaginationLayout'
import UploadImage from 'components/UploadImage/UploadImage'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'

export default function DetectionPage() {
    const { data } = useShallowEqualSelector((state) => state.plant)
    const search = ''

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90rem',
            }}
        >
            <UploadImage />
            <Stack
                direction="column"
                alignItems="center"
                spacing="0.9rem"
                mt="5rem"
            >
                <Typography
                    sx={{
                        color: '#214400',
                        fontWeight: '500',
                        fontSize: '2.2rem',
                    }}
                >
                    Tìm kiếm nổi bật
                </Typography>
                <PaginationLayout data={data} serachText={search} topsearch />
            </Stack>
        </Box>
    )
}
