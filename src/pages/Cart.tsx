import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom'
import { cartSelector, clearPizzas } from '../slices/cartSlice'
import { Pizza } from '../models'
import PizzaCart from '../components/PizzaCart'
import CartEmpty from './CartEmpty'

const Cart: FC = () => {

    const { pizzas, totalPrice } = useAppSelector(cartSelector)
    const dispatch = useAppDispatch()

    const totalCount: number = pizzas.reduce((sum: number, pizza: Pizza): number => sum + pizza.count, 0)

    if (totalPrice === 0) {
        return <CartEmpty />
    }


    return (
        <div>
            <div className='flex justify-between'>

                <div className='flex gap-5'>
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
                    <button className='rounded-full border-2 border-gray-400 text-gray-400 py-2 px-4 bg-transparent hover:bg-gray-400 hover:text-white'>Вернуться назад</button>
                </Link>

                <Link to={'/payment'}>
                    <button className='rounded-full border-2 border-orange-500 text-orange-500 py-2 px-4 bg-transparent hover:bg-orange-500 hover:text-white'>Оплатить сейчас</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart