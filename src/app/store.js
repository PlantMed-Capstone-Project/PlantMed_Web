import { combineReducers, configureStore } from '@reduxjs/toolkit'
import snackbar from './reducers/snackbar'
import auth from './reducers/auth'
import plant from './reducers/plant'
import approval from './reducers/blogApproval'

const reducers = { snackbar, auth, plant, approval }
const rootReducer = combineReducers(reducers)

const resetableRootReducer = (state, action) => {
    return rootReducer(state, action)
}

export default configureStore({
    reducer: resetableRootReducer,
})
