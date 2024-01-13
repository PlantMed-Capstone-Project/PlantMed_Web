import useCurrentLocation from 'hooks/useCurrentLocation'
import React, { useImperativeHandle, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

function MarkMaps(props, ref) {
    const { locationPermission } = props
    const map = useMap()
    const currrentLocation = useCurrentLocation()
    const [circleAdded, setCircleAdded] = useState(false)
    const radius = 10000

    const viewToLocation = () => {
        if (currrentLocation.loaded && !currrentLocation.error) {
            if (!circleAdded) {
                // Thêm vào maps một circle với vị trí tâm là vị trí của user
                L.circle(
                    [
                        currrentLocation.coordinate.lat,
                        currrentLocation.coordinate.lng,
                    ],
                    {
                        color: '#9BB8CD',
                        fillColor: '#9BB8CD',
                        fillOpacity: 0.06,
                        radius: radius,
                    }
                ).addTo(map)
                setCircleAdded(true)
            }

            map.flyTo(
                [
                    currrentLocation.coordinate.lat,
                    currrentLocation.coordinate.lng,
                ],
                12
            )
            locationPermission(false)
        } else {
            locationPermission(true)
        }
    }

    // hàm này là 1 hook, nó sẽ giúp mình handel ref truyền từ cha sang con, kéo xuông dòng cuối
    useImperativeHandle(ref, () => {
        return {
            locationUser: () => viewToLocation(),
        }
    })

    return (
        <>
            {currrentLocation.loaded && !currrentLocation.error && (
                <Marker
                    position={[
                        currrentLocation.coordinate.lat,
                        currrentLocation.coordinate.lng,
                    ]}
                >
                    <Popup>This is ur place</Popup>
                </Marker>
            )}
        </>
    )
}

export default React.forwardRef(MarkMaps)
