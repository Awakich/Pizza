import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import inputReducer from './slices/InputSlice'
import cartReducer from './slices/cartSlice'
import PizzasReducer from './slices/pizzaSlice'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        input: inputReducer,
        cart: cartReducer,
        pizzas: PizzasReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;