import { combineReducers, configureStore } from '@reduxjs/toolkit'
import snackbar from './reducers/snackbar'
import auth from './reducers/auth'

const reducers = { snackbar, auth }
const rootReducer = combineReducers(reducers)

const resetableRootReducer = (state, action) => {
    return rootReducer(state, action)
}

export default configureStore({
    reducer: resetableRootReducer,
})
