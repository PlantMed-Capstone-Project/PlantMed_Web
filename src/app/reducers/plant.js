import { createSlice } from '@reduxjs/toolkit'
import { PLANT_DATA } from 'constants'
import { createCookie } from 'utils/cookie'

const initialState = {
    data: [],
}

const plantSlice = createSlice({
    name: 'plant',
    initialState,
    reducers: {
        storePlants: (state, action) => {
            state.data = action.payload
        },
        clearPlants: (state) => {
            state.data = initialState.data
        },
    },
})

export const plantAction = plantSlice.actions
export default plantSlice.reducer
