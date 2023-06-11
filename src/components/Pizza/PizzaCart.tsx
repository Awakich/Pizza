import { FC } from 'react'
import { IPizza } from "../../models"
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useAppDispatch } from '../../hooks'
import { addPizza, minusPizza, removePizza } from '../../slices/cartSlice'
import Button from '../Layout/Button'

const PizzaCart: FC<IPizza> = ({ count, imageUrl, price, sizes, title, types, id }) => {
    const dispatch = useAppDispatch()

    const ChangePizza: () => void = (): void => {
        dispatch(removePizza({
            id,
            price
        } as IPizza))
    }

    const PlusPizza: () => void = (): void => {
        dispatch(addPizza({
            id,
            price,
        } as IPizza))
    }

    const MinusPizza: () => void = (): void => {
        dispatch(minusPizza({
            id,
            price
        } as IPizza))
    }

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <img alt="pizza img" src={imageUrl} className='w-32 h-32' />

                <div className='flex flex-col itens-center'>
                    <p className='font-bold text-2xl'>{title}</p>
                    <p className='text-gray-500 text-lg'>{types} тесто, {sizes} см</p>
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <Button text='-' onClick={MinusPizza} className='font-bold text-lg text-orange-500 border-2 border-orange-500 w-10 h-10 rounded-full bg-transparent hover:bg-orange-500 hover:text-white' />
                <p className='font-bold text-xl'>{count}</p>
                <Button text='+' onClick={PlusPizza} className='font-bold text-lg text-orange-500 border-2 border-orange-500 w-10 h-10 rounded-full bg-transparent hover:bg-orange-500 hover:text-white' />
                <p className='font-bold text-xl'>{price * count} ₽</p>
            </div>

            <XCircleIcon onClick={ChangePizza} className='h-10 text-gray-500 hover:text-black cursor-pointer' />
        </div>
    )
}

export default PizzaCart