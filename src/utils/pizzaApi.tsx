import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IParams, IPizza } from '../models'

export const pizzaApi = createApi({
    reducerPath: "pizzaApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6468f6b203bb12ac208307ac.mockapi.io/pizzas' }),
    endpoints: (builder) => ({
        getPizzas: builder.query<IPizza[], IParams>({
            query: ({ category, sort, input }): string => `?&${category}&sortBy=${sort}&search=${input}`
        }),

        getPizzaById: builder.query<IPizza, number>({
            query: (id) => `${id}`
        }),
    })
})

export const { useGetPizzasQuery, useGetPizzaByIdQuery } = pizzaApi;