import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUpdate: null,
}

const updateAvataSlice = createSlice({
    name: 'updateAv',
    initialState,
    reducers: {
        updateImage: (state, action) => {
            state.isUpdate = action.payload
        },
    },
})

export const updateAvatarAction = updateAvataSlice.actions
export default updateAvataSlice.reducer
