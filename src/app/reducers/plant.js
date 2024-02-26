import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
}

const plantSlice = createSlice({
    name: 'plant',
    initialState,
    reducers: {
        storePlant: (state) => {
            state.loading = true
        },
        storePlantSuccessful: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        clearPlants: (state) => {
            state.data = initialState.data
            state.loading = false
        },
    },
})

export const plantAction = plantSlice.actions
export default plantSlice.reducer
