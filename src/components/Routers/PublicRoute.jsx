import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PublicRoute = () => {
    const { isLogin } = useShallowEqualSelector((state) => state.auth)
    const location = useLocation()
    const pathname = location.pathname
    const routes = pathname === '/login' || pathname === '/register'

    if (isLogin && routes) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
