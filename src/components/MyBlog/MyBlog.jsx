import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import plant from "../../Images/heroSen.jpg"

const styles = {
    card: {
        boxShadow: "0px 4px 5px 0px rgba(33, 68, 0, 0.50)",
        width: 400,
        display: "flex",
        flexDirection: "column",
        flex: 1
    },
    containerBlog: {
        flexGrow: 1,
        marginTop: "100px",
        width: "100%",
        padding: "0px 200px"
    },
    myBlogTitle: {
        fontSize: "35px",
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "500",
        color: "#214400"
    }
}

function MyBlog({ data }) {
    return (
        <Box sx={styles.containerBlog}>
            <Typography sx={styles.myBlogTitle}>Bài viết của bạn</Typography>
            <Grid container spacing={2}>
                {data.map((data, index) => (
                    <Grid item xs={4} sx={{ display: "flex", flexDirection: "row", flex: 1 }}>
                        <Card sx={styles.card}>
                            <CardActionArea sx={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "flex-start", alignItems: "start" }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={plant}
                                    alt="plant"
                                />
                                <CardContent sx={{ padding: "10px 25px 20px" }}>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                        {data.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default MyBlog;