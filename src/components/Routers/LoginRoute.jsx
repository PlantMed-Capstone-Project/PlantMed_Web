import { REFRESH_TOKEN } from 'constants'
import { ACCESS_TOKEN } from 'constants'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { readCookie } from 'utils/cookie'

export const LoginRoute = () => {
    const { isLogin } = useShallowEqualSelector((state) => state.auth)
    const accessToken = readCookie(ACCESS_TOKEN)
    const refreshToken = readCookie(REFRESH_TOKEN)

    if (isLogin || (accessToken && refreshToken)) return <Navigate to="/" />

    return <Outlet />
}
