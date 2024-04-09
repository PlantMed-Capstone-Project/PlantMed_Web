import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isChangePass: null,
}

const changePassSlice = createSlice({
    name: 'changePass',
    initialState,
    reducers: {
        setChange: (state, action) => {
            state.isChangePass = action.payload
        },
        clearChange: (state) => {
            state.isChangePass = initialState
        },
    },
})

export const changePassAction = changePassSlice.actions
export default changePassSlice.reducer
