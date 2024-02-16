import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, CardActionArea, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import plant from 'Images/heroSen.jpg'

const styles = {
    card: {
        boxShadow: '0 0.25rem 0.25rem 0 rgba(33, 68, 0, 0.50)',
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    containerBlog: {
        flexGrow: 1,
        marginTop: '6.25rem',
        width: '100%',
        padding: '0 6.25rem',
    },
    myBlogTitle: {
        fontSize: '2.188rem',
        textAlign: 'center',
        marginBottom: '1.875rem',
        fontWeight: '500',
        color: '#214400',
    },
}

function BlogList({ blogData }) {
    return (
        <Box sx={styles.containerBlog}>
            <Grid container spacing={5}>
                {blogData?.map((data) => (
                    <Grid
                        key={data}
                        item
                        xs={4}
                        sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}
                    >
                        <Card sx={styles.card}>
                            <CardActionArea
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'start',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={plant}
                                    alt="plant"
                                />
                                <CardContent
                                    sx={{
                                        padding: '0.625rem 1.563rem 1.25rem',
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {data.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Stack
                spacing={2}
                sx={{ margin: '3rem 0 6.25rem 0', alignItems: 'center' }}
            >
                <Pagination
                    count={10}
                    color="success"
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                            }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </Box>
    )
}

export default BlogList
