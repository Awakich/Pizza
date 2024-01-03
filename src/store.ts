import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import inputReducer from './slices/InputSlice'
import cartReducer from './slices/cartSlice'
import { pizzaApi } from "./utils/pizzaApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        input: inputReducer,
        cart: cartReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),

})

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;