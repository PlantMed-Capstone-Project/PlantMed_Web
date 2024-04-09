import { combineReducers, configureStore } from '@reduxjs/toolkit'
import snackbar from './reducers/snackbar'
import auth from './reducers/auth'
import plant from './reducers/plant'
import blog from './reducers/blog'
import updateAv from './reducers/updateAvatar'
import changePass from './reducers/changePass'

const reducers = { snackbar, auth, plant, blog, updateAv, changePass }
const rootReducer = combineReducers(reducers)

const resetableRootReducer = (state, action) => {
    return rootReducer(state, action)
}

export default configureStore({
    reducer: resetableRootReducer,
})
