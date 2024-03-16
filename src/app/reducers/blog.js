import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    blogActive: [],
    loading: false,
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        storeBlog: (state) => {
            state.loading = true
        },
        storeBlogApproval: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        storeBlogActive: (state, action) => {
            state.blogActive = action.payload
            state.loading = false
        },
        clearBlog: (state) => {
            state.data = initialState.data
            state.loading = false
        },
    },
})

export const blogAction = blogSlice.actions
export default blogSlice.reducer
