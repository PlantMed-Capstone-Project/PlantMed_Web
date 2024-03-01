import useCurrentLocation from 'hooks/useCurrentLocation'
import React, { useImperativeHandle, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'

function MarkMaps(props, ref) {
    const map = useMap()
    const { show } = useActions(snackbarAction)
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
            show({
                message: 'Đã xác định được vị trí của bạn',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } else {
            show({
                message: 'Bạn cần bật định vị của trình duyệt!!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
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
