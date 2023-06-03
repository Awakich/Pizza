import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza } from "../models";
import axios from 'axios';

export interface PizzaProps {
    pizzas: Pizza[]
    loading: 'succes' | 'failed' | 'pending';
}

interface Params {
    category: string;
    sort: string;
    input: string;
}

export const getPizzas = createAsyncThunk('pizzas/getPizzaId', async (param: Params) => {
    const { category, sort, input } = param;
    const res = await axios.get(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas?&${category}&sortBy=${sort}&search=${input}`);
    return res.data;
})

const initialState: PizzaProps = {
    pizzas: [],
    loading: 'pending',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
            state.loading = 'succes'
        }),

            builder.addCase(getPizzas.pending, (state) => {
                state.loading = 'pending';
                state.pizzas = []
            }),
            builder.addCase(getPizzas.rejected, (state) => {
                state.loading = 'failed';
                state.pizzas = []
            })
    },
})

export const { } = pizzaSlice.actions

export default pizzaSlice.reducer;