import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'constant'
import { clearCookie, createCookie, readCookie } from 'utils/cookie'

const initialState = () => {
    let access_token = readCookie(ACCESS_TOKEN)

    return {
        isLogin: access_token ? true : false,
        error: null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            let { accessToken, refreshToken, expires } = action.payload
            createCookie(ACCESS_TOKEN, accessToken, expires)
            createCookie(REFRESH_TOKEN, refreshToken)
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
    },
})

export const authAction = authSlice.actions
export default authSlice.reducer
