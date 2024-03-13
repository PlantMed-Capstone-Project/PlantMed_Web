import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
}

const approvalSlice = createSlice({
    name: 'approval',
    initialState,
    reducers: {
        storeBlog: (state) => {
            state.loading = true
        },
        storeBlogSuccessfull: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        clearBlog: (state) => {
            state.data = initialState.data
            state.loading = false
        },
    },
})

export const approvalAction = approvalSlice.actions
export default approvalSlice.reducer
