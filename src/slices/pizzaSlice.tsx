import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../models";
import axios, { AxiosResponse } from 'axios';

export interface PizzaProps {
    pizzas: IPizza[]
    loading: 'succes' | 'failed' | 'pending';
}

interface IParams {
    category: string;
    sort: string;
    input: string;
}

export const getPizzas = createAsyncThunk<IPizza[], IParams>('pizzas/getPizzaId', async (param: IParams): Promise<IPizza[]> => {
    const { category, sort, input } = param;
    const res: AxiosResponse<IPizza[]> = await axios.get<IPizza[]>(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas?&${category}&sortBy=${sort}&search=${input}`);
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

    extraReducers: (builder): void => {
        builder.addCase(getPizzas.fulfilled, (state, action: PayloadAction<IPizza[]>): void => {
            state.pizzas = action.payload
            state.loading = 'succes'
        }),

            builder.addCase(getPizzas.pending, (state): void => {
                state.loading = 'pending';
                state.pizzas = []
            }),

            builder.addCase(getPizzas.rejected, (state): void => {
                state.loading = 'failed';
                state.pizzas = []
            })
    },
})

export const { } = pizzaSlice.actions

export default pizzaSlice.reducer;