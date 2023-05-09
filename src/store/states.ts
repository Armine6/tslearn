import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer  from './reducers/userSlice'
import todosReducer  from './reducers/todosSlice'

const rootReducer = combineReducers({
    userReducer,
    todosReducer
})

export const setStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setStore>
export type AppDispatch = AppStore['dispatch']