import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice.jsx'
import inputReducer from './slices/InputSlice.js'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        input: inputReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;