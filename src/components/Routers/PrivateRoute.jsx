import { authAction } from 'app/reducers/auth'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constant'
import useActions from 'hooks/useActions'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'

export const PrivateRoute = () => {
    const { logout } = useActions(authAction)
    const accessToken = readCookie(ACCESS_TOKEN)
    const refreshToken = readCookie(REFRESH_TOKEN)

    const user = accessToken ? parseJwt(accessToken) : null

    const location = useLocation()
    const expertRoute = location.pathname === '/blog/approval'
    const isExpert = user?.Role === 'expert'

    if (!accessToken || !refreshToken) {
        logout()
        return <Navigate to="/login" />
    } else if (expertRoute && !isExpert) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
