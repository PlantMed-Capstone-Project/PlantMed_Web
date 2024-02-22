import ForestIcon from '@mui/icons-material/Forest'
import LanguageIcon from '@mui/icons-material/Language'
import StorefrontIcon from '@mui/icons-material/Storefront'
import plantsIcon from 'Images/cansaIcon.png'
import * as L from 'leaflet'
import { GestureHandling } from 'leaflet-gesture-handling'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'
import { useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as muiStyle from './MapLayout.styled'
import MarkMaps from './MarkMaps/MarkMaps'
import useCurrentLocation from 'hooks/useCurrentLocation'
import { Box, Stack, Typography } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import MopedIcon from '@mui/icons-material/Moped'
import { motion } from 'framer-motion'

export default function MapLayout({ data }) {
    const [showPlants, setShowPlant] = useState(false)
    const [distances, setDistances] = useState(null)
    const userLocation = useCurrentLocation()
    const [travelTimes, setTravelTimes] = useState({
        tralvelWalk: 0,
        tralvelMoto: 0,
        tralvelCar: 0,
    })
    const [showTime, setShowTime] = useState(false)
    // const [showShops, setShowShop] = useState(false)
    const ref = useRef()

    const list = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
        hidden: { opacity: 0 },
    }
    const item = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: -100,
        },
    }
    // Hàm tính khoảng cách từ trung tâm đến vị trí cây
    const calculateDistance = (markerLat, markerLng) => {
        const walk = 4.51
        const motoBike = 42
        const car = 60
        if (!userLocation) {
            return
        }
        const R = 6371e3 // bán kính trái đất trong mét
        const lat1 = userLocation.coordinate.lat * (Math.PI / 180)
        const lat2 = markerLat * (Math.PI / 180)
        const deltaLat =
            (markerLat - userLocation.coordinate.lat) * (Math.PI / 180)
        const deltaLng =
            (markerLng - userLocation.coordinate.lng) * (Math.PI / 180)

        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) *
                Math.cos(lat2) *
                Math.sin(deltaLng / 2) *
                Math.sin(deltaLng / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        const distance = (R * c) / 1000

        // tính thời gian di chuyển theo công thức t = s/v 'vật lý lớp 8, hỏi là ngu' note: chắc chắn sẽ có sai số, vì vận tốc chỉ tính theo tốc độ trung bình
        travelTimes.tralvelWalk = (distance / walk).toFixed(2)
        travelTimes.tralvelMoto = (distance / motoBike).toFixed(2)
        travelTimes.tralvelCar = (distance / car).toFixed(2)

        setShowTime(true)

        setDistances(distance.toFixed(2))
    }

    // Mãng chưa thời gian
    const timeData = [
        {
            id: 1,
            hour: Math.floor(travelTimes.tralvelWalk),
            minute: Math.round((travelTimes.tralvelWalk % 1) * 60),
        },
        {
            id: 2,
            hour: Math.floor(travelTimes.tralvelMoto),
            minute: Math.round((travelTimes.tralvelMoto % 1) * 60),
        },
        {
            id: 3,
            hour: Math.floor(travelTimes.tralvelCar),
            minute: Math.round((travelTimes.tralvelCar % 1) * 60),
        },
    ]

    const handleShowPlants = () => {
        setShowPlant(true)
        // setShowShop(false)
    }

    const handleShowShops = () => {
        setShowPlant(false)
        // setShowShop(true)
    }

    const center = { lat: 14.0583, long: 108.2772 }
    let ZOOM_LELVEL = 5.4

    //  thêm hiệu ứng ctrl and scroll to zoom in
    L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling)

    // custom hình ảnh cho icon
    const plantIcon = new L.Icon({
        iconUrl: plantsIcon, // import hình ảnh của icon
        iconSize: [50, 50], // kích thước thật của icon này theo hình ảnh
        iconAnchor: [25, 50], //đây là size của icon khi zoom out and in, phải theo công thức x/2, y
    })

    const locationPermission = (value) => {
        if (value) {
            toast.info('🦄 Vui lòng bật định vị !', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Bounce,
            })
        }
    }

    return (
        <muiStyle.container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
            <muiStyle.text>Thông tin vị trí</muiStyle.text>
            <muiStyle.mapContainer width="100%" height="40.8125rem">
                {/*Start Button cover maps */}
                <muiStyle.stackButton spacing="1.5rem" direction="row">
                    <muiStyle.viewLocation
                        startIcon={<LanguageIcon />}
                        variant="contained"
                        onClick={() => ref.current.locationUser()}
                    >
                        Vị trí của bạn
                    </muiStyle.viewLocation>
                    <muiStyle.viewLocation
                        startIcon={<ForestIcon />}
                        variant="contained"
                        onClick={handleShowPlants}
                    >
                        Vị trí cây
                    </muiStyle.viewLocation>
                    <muiStyle.viewLocation
                        startIcon={<StorefrontIcon />}
                        variant="contained"
                        onClick={handleShowShops}
                    >
                        Vị trí cửa hàng
                    </muiStyle.viewLocation>
                </muiStyle.stackButton>
                {/*End Button cover maps */}

                {/* Start showing distance and time to go */}
                {showTime && (
                    <muiStyle.containerTimeTogo
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={list}
                    >
                        <muiStyle.boxDistance
                            component={motion.div}
                            variants={item}
                        >
                            <Typography
                                sx={{ fontSize: '1rem', fontWeight: '600' }}
                            >
                                Khoảng cách đến bạn
                            </Typography>
                            <muiStyle.textTime>
                                {distances} Km
                            </muiStyle.textTime>
                        </muiStyle.boxDistance>
                        {timeData.map((vl) => (
                            <muiStyle.boxTime
                                key={vl.id}
                                component={motion.div}
                                variants={item}
                            >
                                <DirectionsRunIcon />
                                <muiStyle.textTime>
                                    {vl.hour} {''} Giờ {''} {vl.minute} {''}{' '}
                                    Phút
                                </muiStyle.textTime>
                            </muiStyle.boxTime>
                        ))}
                    </muiStyle.containerTimeTogo>
                )}
                {/* End showing distance and time to go */}

                {/* start maps */}
                <MapContainer
                    center={[center.lat, center.long]}
                    zoom={ZOOM_LELVEL}
                    style={{ width: '100%', height: '100%' }}
                    scrollWheelZoom={false}
                    zoomControl={false}
                    gestureHandling={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkMaps
                        ref={ref}
                        locationPermission={locationPermission}
                    />
                    {showPlants &&
                        data[0].locations?.map((value, idx) => (
                            <Marker
                                position={[value.long, value.lat]}
                                icon={plantIcon}
                                key={idx}
                                eventHandlers={{
                                    click: (e) => {
                                        calculateDistance(
                                            e.latlng.lat,
                                            e.latlng.lng
                                        )
                                    },
                                }}
                            >
                                <Popup>This is the stree</Popup>
                            </Marker>
                        ))}
                </MapContainer>
                {/* End maps */}
            </muiStyle.mapContainer>
        </muiStyle.container>
    )
}
