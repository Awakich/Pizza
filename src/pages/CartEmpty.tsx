import { FC } from 'react'
import { Link } from 'react-router-dom'

const CartEmpty: FC = () => {

    return (
        <div className='flex items-center justify-center flex-col gap-8 text-center'>
            <p className='text-2xl font-semibold'>Вы ещё ничего не добавили в корзину</p>
            <Link to={'/'}>
                <button className='rounded-full border-2 border-gray-400 text-gray-400 py-2 px-4 bg-transparent hover:bg-gray-400 hover:text-white'>Вернуться назад</button>
            </Link>
        </div>
    )
}

export default CartEmpty