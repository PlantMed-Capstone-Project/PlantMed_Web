import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constant'
import { parseDiffDays } from 'utils'
import { clearCookie, createCookie, readCookie } from 'utils/cookie'

const initialState = () => {
    let access_token = readCookie(ACCESS_TOKEN)

    return {
        isLogin: Boolean(access_token),
        error: null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            let { accessToken, refreshToken, expiresIn } = action.payload
            let days = parseDiffDays(expiresIn)
            createCookie(ACCESS_TOKEN, accessToken, days)
            createCookie(REFRESH_TOKEN, refreshToken, days + 10)
            state.isLogin = true
            state.error = null
        },

        loginFailure: (state, action) => {
            state.error = action.payload
            state.isLogin = false
        },

        logout: (state) => {
            clearCookie(ACCESS_TOKEN)
            clearCookie(REFRESH_TOKEN)
            state.isLogin = false
            state.error = null
        },

        refreshToken: (state, action) => {
            let { accessToken, expiresIn } = action.payload
            let days = parseDiffDays(expiresIn)
            createCookie(ACCESS_TOKEN, accessToken, days)
            state.isLogin = true
            state.error = null
        },
    },
})

export const authAction = authSlice.actions
export default authSlice.reducer
