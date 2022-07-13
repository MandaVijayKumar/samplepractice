import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const store = configureStore({
    reducer: {
        Counter: counterReducer,
        employees: '',
        users: '',
    }
})
