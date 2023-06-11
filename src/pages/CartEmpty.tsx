import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Layout/Button'

const CartEmpty: FC = () => {

    return (
        <div className='flex items-center justify-center flex-col gap-8 text-center'>
            <p className='text-2xl font-semibold'>Вы ещё ничего не добавили в корзину</p>
            <Link to={'/'}>
                <Button text='Вернуться назад' className='rounded-full border-2 border-gray-400 text-gray-400 py-2 px-4 bg-transparent hover:bg-gray-400 hover:text-white' />
            </Link>
        </div>
    )
}

export default CartEmpty