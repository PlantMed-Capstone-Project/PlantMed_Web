import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import plant from "../../Images/heroSen.jpg"
import Footer from 'components/Footer/Footer';

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
        padding: "0px 100px"
    },
    myBlogTitle: {
        fontSize: "35px",
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "500",
        color: "#214400"
    }
}



function BlogList({ data }) {
    return (
        <Box sx={styles.containerBlog}>
            <Grid container spacing={5}>
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
            <Box sx={{ margin: "60px", display: "flex", justifyContent: "center" }}>
                <Button variant='contained' endIcon={<ArrowRightAltIcon />} sx={{
                    backgroundColor: "#69AD28", padding: "5px 35px !important", fontSize: "16px",
                    textTransform: "none", ":hover": { bgcolor: "success.main" }
                }}>
                    Trang kế tiếp
                </Button>

            </Box>

        </Box >
    );
}

export default BlogList;