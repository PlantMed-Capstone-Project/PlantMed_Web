import { Skeleton, Stack } from '@mui/material'

function SkeletonLoading() {
    return (
        <Stack
            direction="column"
            alignItems="center"
            spacing="3rem"
            sx={{
                height: 'auto',
                width: '90rem',
                marginTop: '2rem',
                padding: '1rem 8rem',
            }}
        >
            {Array.from(new Array(2)).map((vl, idx) => (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    key={idx}
                    sx={{
                        width: '100%',
                        height: '18rem',
                        borderRadius: '0.625rem',
                    }}
                />
            ))}
        </Stack>
    )
}

export default SkeletonLoading
