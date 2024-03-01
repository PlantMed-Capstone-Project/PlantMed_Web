import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import React, { useImperativeHandle, useRef } from 'react'
import { useMap } from 'react-leaflet'

function LeafletRoutingMachine(props, ref) {
    const map = useMap()
    const refContrl = useRef()
    let routing

    // Tạo ra route mới và xá route cũ
    const addNewRoute = (currentLocation, newRoute) => {
        refContrl.current._container.style.display = 'None'
        const curretnWayPoint = routing.getWaypoints()
        curretnWayPoint.splice(1)
        curretnWayPoint.push(
            L.Routing.waypoint(currentLocation.lat, currentLocation.lng)
        )
        curretnWayPoint.push(L.Routing.waypoint(newRoute.lat, newRoute.lng))
        routing.setWaypoints(curretnWayPoint)
    }

    // Bắt đầu tạo ra đường di chuyển khi click vào các vùng
    const routingStart = (currentLocation, newRoute) => {
        const isRouting = newRoute.lat && newRoute.lng
        if (!isRouting) {
            routing.setWaypoints([])
            refContrl.current._container.style.display = 'None'
        } else {
            if (routing) {
                addNewRoute(currentLocation, newRoute)
            }
            routing = L.Routing.control({
                waypoints: [
                    L.latLng(currentLocation.lat, currentLocation.lng),
                    L.latLng(newRoute.lat, newRoute.lng),
                ],
                lineOptions: {
                    styles: [
                        {
                            color: 'blue',
                            weight: 4,
                            opacity: 1,
                        },
                    ],
                },
                routeWhileDragging: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: false,
                showAlternatives: false,
                roundingSensitivity: 1,
                createMarker: function () {
                    return null
                },
            }).addTo(map)
            refContrl.current = routing
        }
    }

    // hàm này là 1 hook, nó sẽ giúp mình handel ref truyền từ cha sang con, kéo xuông dòng cuối
    useImperativeHandle(
        ref,
        () => {
            return {
                getRouting: (currentLocation, newRoute) =>
                    routingStart(currentLocation, newRoute),
            }
        },
        []
    )
    return null
}

export default React.forwardRef(LeafletRoutingMachine)
