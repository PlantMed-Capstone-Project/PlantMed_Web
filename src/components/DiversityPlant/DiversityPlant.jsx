import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import Slider from "react-slick"
import './DiversityPlant.css'

export default function DiversityPlant({ title, data }) {

    // do cần custom lại thư viện nên cần sử dụng css

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0",
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            width="100%"
            mt="8.19rem"
        >
            <Typography sx={{ color: "#214400", fontSize: "2.1875rem", fontWeight: "500" }}>
                {title}
            </Typography>
            <Box mt="3rem" sx={{ height: "500px", width: "100%" }}>
                <Slider {...settings}>
                    {data?.map((obj, idx) => (
                        <Card
                            className='card_feature'
                            key={idx}
                            sx={{
                                height: "18.48163rem",
                                width: "18.98344rem",
                                boxShadow: "3",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        >
                            <CardMedia
                                sx={{ height: 160 }}
                                image={obj.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ fontSize: "1.1rem", fontWeight: "600" }}>
                                    {obj.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {obj.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Box>
        </Stack>
    )
}
