import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'
import { cartSelector, clearPizzas } from '../slices/cartSlice'
import { IPizza } from '../models'
import PizzaCart from '../components/Pizza/PizzaCart'
import CartEmpty from './CartEmpty'
import Button from '../components/Layout/Button'

const Cart: FC = () => {

    const { pizzas, totalPrice } = useAppSelector(cartSelector)
    const dispatch = useAppDispatch()

    const totalCount: number = pizzas.reduce((sum: number, pizza: IPizza): number => sum + pizza.count, 0)

    if (totalPrice === 0) {
        return <CartEmpty />
    }

    return (
        <div>
            <div className='flex justify-around sm:justify-between'>

                <div className='sm:flex gap-5 hidden'>
                    <ShoppingCartIcon className='h-8' />
                    <h2>Корзина</h2>
                </div>

                <div onClick={() => dispatch(clearPizzas())} className='flex gap-5 cursor-pointer'>
                    <TrashIcon className='h-6 text-gray-400' />
                    <p className='text-gray-400'>Очистить корзину</p>
                </div>

            </div>

            <hr className='mt-4' />

            <div className='flex justify-between font-semibold text-lg my-5 items-center'>
                <p>Всего {totalCount} шт.</p>
                <p>Сумма заказа {totalPrice} ₽</p>
            </div>

            {pizzas && pizzas?.map(({ price, imageUrl, sizes, title, types, count, id, }) => (
                <>
                    {count ? <PizzaCart key={id} price={price} imageUrl={imageUrl} title={title} count={count} types={types} sizes={sizes} id={id} /> : ''}
                </>
            ))}

            <div className='flex items-center justify-between mt-5'>
                <Link to={'/'}>
                    <Button text='Вернуться назад' className='rounded-full border-2 border-gray-400 text-gray-400 py-2 px-4 bg-transparent hover:bg-gray-400 hover:text-white' />
                </Link>

                <Link to={'/payment'}>
                    <Button text='Оплатить сейчас' className='rounded-full border-2 border-orange-500 text-orange-500 py-2 px-4 bg-transparent hover:bg-orange-500 hover:text-white' />
                </Link>
            </div>
        </div>
    )
}

export default Cart