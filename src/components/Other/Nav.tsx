import { MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
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
        <nav className='flex justify-between ietms-center'>
            <div className='flex items-center gap-5'>
                <Link to={'/'}><h2 className='font-black text-5xl'>Лучшая пицца🍕</h2></Link>
                <MagnifyingGlassIcon className='h-6 absolute top-[6,5%] left-[38%]' />
                <input value={userInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeUserInput(e.target.value))} placeholder='Введите название пиццы' className='w-full outline-none border-[1px] border-gray-300 rounded-md pl-12 text-black/70 py-2 bg-transparent' />
                {userInput && <XMarkIcon className='h-6 absolute top-[6,5%] left-[58%] opacity-70 hover:opacity-100 cursor-pointer' onClick={() => dispatch(changeUserInput(''))} />}
            </div>

            <Link to="/cart" className='flex gap-5 h-12 items-center bg-orange-500 text-white font-semibold px-4 rounded-full'>
                <p>{totalPrice} ₽</p>
                <div className='flex gap-2'>
                    <ShoppingCartIcon className='h-6 cursor-pointer' />
                    <p>{totalCount}</p>
                </div>
            </Link>

        </nav>
    )
}

export default Nav