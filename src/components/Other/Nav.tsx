import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeUserInput, inputSelector } from '../../slices/InputSlice';
import { ICart, cartSelector } from '../../slices/cartSlice';

const Nav: FC = () => {
    const userInput: string = useAppSelector(inputSelector)
    const { pizzas, totalPrice }: ICart = useAppSelector(cartSelector)
    const dispatch = useAppDispatch()

    const totalCount: number = pizzas.reduce((sum, pizza) => sum + pizza.count, 0)

    return (
        <nav className='flex justify-between md:items-center sm:flex-row flex-col'>
            <div className='flex gap-3 items-center flex-col sm:items-start md:flex-row'>
                <Link to={'/'}><h2 className='font-black text-3xl lg:text-4xl'>Лучшая пицца🍕</h2></Link>
                <div className='border-[1px] border-gray-300 rounded-md md:flex items-center hidden sm:flex'>
                    <input value={userInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeUserInput(e.target.value))} placeholder='Введите название пиццы' className='outline-none text-md md:text-base w-full text-black/70 px-1 md:px-2 lg:px-4 py-1 md:py-1 lg:py-2 bg-transparent' />
                    {userInput && <XMarkIcon className='h-6 opacity-70 hover:opacity-100 cursor-pointer mr-2' onClick={() => dispatch(changeUserInput(''))} />}
                </div>
                <Link to='/cart'>
                    <p className='text-xl font-semibold sm:hidden'>Корзина</p>
                </Link>
            </div>

            <Link to="/cart" className='hidden sm:flex gap-5 items-center bg-orange-500 text-white font-semibold px-4 rounded-full sm:h-10 md:h-10 lg:h-12'>
                <p className='md:block'>{totalPrice} ₽</p>
                <div className='flex gap-2 items-center'>
                    <ShoppingCartIcon className='h-5 lg:h-6 cursor-pointer' />
                    <p>{totalCount}</p>
                </div>
            </Link>

        </nav>
    )
}

export default Nav