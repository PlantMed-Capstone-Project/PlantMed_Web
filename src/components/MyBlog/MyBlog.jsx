import * as React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import { convertString, parseImg } from 'utils'
import heroSen from 'Images/heroSen.jpg'
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
        padding: '0 12.5rem',
    },
    myBlogTitle: {
        fontSize: '2.188rem',
        textAlign: 'center',
        marginBottom: '1.875rem',
        fontWeight: '500',
        color: '#214400',
    },
}

function MyBlog({ userBlog }) {
    return (
        <Box sx={styles.containerBlog}>
            <Typography sx={styles.myBlogTitle}>Bài viết của bạn</Typography>
            <Grid container spacing={2}>
                {userBlog?.map((data) => (
                    <Grid
                        item
                        xs={4}
                        sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}
                    >
                        <Card sx={styles.card} key={data.id}>
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
                                        height="150"
                                        alt="plant"
                                        image={parseImg(data.thumbnail)}
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
                                            sx={{ wordBreak: 'break-word' }}
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
        </Box>
    )
}

export default MyBlog
