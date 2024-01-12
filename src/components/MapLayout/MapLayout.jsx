import ForestIcon from '@mui/icons-material/Forest'
import LanguageIcon from '@mui/icons-material/Language'
import StorefrontIcon from '@mui/icons-material/Storefront'
import plantsIcon from 'Images/cansaIcon.png'
import * as L from 'leaflet'
import { GestureHandling } from 'leaflet-gesture-handling'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'
import { useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import * as muiStyle from './MapLayout.styled'
import MarkMaps from './MarkMaps/MarkMaps'

export default function MapLayout({ data }) {
    const [showPlants, setShowPlant] = useState(false)
    const [showShops, setShowShop] = useState(false)
    const ref = useRef()

    const handleShowPlants = () => {
        setShowPlant(true)
        setShowShop(false)
    }

    const handleShowShops = () => {
        setShowPlant(false)
        setShowShop(true)
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

    return (
        <muiStyle.container>
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
                    <MarkMaps ref={ref} />
                    {showPlants &&
                        data[0].locations?.map((value, idx) => (
                            <Marker
                                position={[value.long, value.lat]}
                                icon={plantIcon}
                                key={idx}
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
