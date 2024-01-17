import store from 'app/store'
import React from 'react'
import { Provider } from 'react-redux'

const ReduxContainer = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}

export default ReduxContainer
