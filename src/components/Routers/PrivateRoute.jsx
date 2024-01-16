import { authAction } from 'app/reducers/auth'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constants'
import useActions from 'hooks/useActions'
import { Navigate, Outlet } from 'react-router-dom'
import { readCookie } from 'utils/cookie'

const PrivateRoute = () => {
    const { logout } = useActions(authAction)
    const accessToken = readCookie(ACCESS_TOKEN)
    const refreshToken = readCookie(REFRESH_TOKEN)

    if (!accessToken || !refreshToken) {
        logout()
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute
