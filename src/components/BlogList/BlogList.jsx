import { Box, CardActionArea, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import plant from 'Images/heroSen.jpg'
import { Link } from 'react-router-dom'
import { convertString, parseImg } from 'utils'

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
        marginTop: '2.125rem',
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
                            <Link
                                to={`${data.id}`}
                                style={{
                                    textDecoration: 'none',
                                    height: '100%',
                                }}
                            >
                                <CardActionArea
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'start',
                                        height: '100%',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={
                                            data.images[0] === undefined
                                                ? plant
                                                : parseImg(data.images[0].data)
                                        }
                                        alt="plant"
                                    />
                                    <CardContent
                                        sx={{
                                            padding:
                                                '0.625rem 1.563rem 1.25rem',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: 'black',
                                            }}
                                        >
                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {convertString(data.content, 150)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '3.125rem' }}>
                <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to="/bloglist"
                >
                    Xem thêm bài viết
                </Button>
            </Box>
        </Box>
    )
}

export default BlogList
