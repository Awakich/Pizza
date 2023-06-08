import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Pizza } from '../models';
import { RootState } from '../store';

export interface CartProps {
    totalPrice: number;
    pizzas: Pizza[]
}

const initialState: CartProps = {
    totalPrice: 0,
    pizzas: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizza(state, action): void {
            const findPizza = state.pizzas.find(obj => obj.id === action.payload.id)

            if (findPizza) {
                findPizza.count++;
            } else {
                state.pizzas.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = state.pizzas.reduce((sum, pizza): number => sum + pizza.price * pizza.count, 0)
        },

        minusPizza(state, action: PayloadAction<Pizza>): void {
            const findPizza = state.pizzas.find(obj => obj.id === action.payload.id)

            if (findPizza) {
                findPizza.count--;
            }

            state.totalPrice = state.pizzas.reduce((sum, pizza): number => sum + pizza.price * pizza.count, 0)
        },

        removePizza(state, action: PayloadAction<Pizza>): void {
            state.pizzas = state.pizzas.filter(item => item.id !== action.payload.id)

            state.totalPrice = state.pizzas.reduce((sum, pizza): number => sum + pizza.price * pizza.count, 0)
        },

        clearPizzas(state): void {
            state.pizzas = []
            state.totalPrice = 0
        }
    }
})

export const cartSelector = (state: RootState) => state.cart

export const { addPizza, clearPizzas, removePizza, minusPizza } = cartSlice.actions;

export default cartSlice.reducer