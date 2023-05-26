import { MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeUserInput } from '../slices/InputSlice';

const Nav: FC = () => {
    const userInput = useAppSelector(state => state.input.userInput)
    const dispatch = useAppDispatch()

    return (
        <nav className='flex justify-between ietms-center'>
            <div className='flex items-center gap-5'>
                <Link to={'/'}><h2 className='font-black text-5xl'>Лучшая пицца🍕</h2></Link>
                <MagnifyingGlassIcon className='h-6 absolute top-[6,5%] left-[38%]' />
                <input value={userInput} onChange={(e) => dispatch(changeUserInput(e.target.value))} placeholder='Введите название пиццы' className='w-full outline-none border-[1px] border-gray-300 rounded-md pl-12 text-black/70 py-2 bg-transparent' />
                {userInput && <XMarkIcon className='h-6 absolute top-[6,5%] left-[58%] opacity-70 hover:opacity-100 cursor-pointer' onClick={() => dispatch(changeUserInput(''))} />}
            </div>

            <Link to="/cart" className='flex gap-5 h-12 items-center bg-orange-500 text-white font-semibold px-4 rounded-full'>
                <p>0 ₽</p>
                <div className='flex gap-2'>
                    <ShoppingCartIcon className='h-6 cursor-pointer' />
                    <p>0</p>
                </div>
            </Link>

        </nav>
    )
}

export default Nav