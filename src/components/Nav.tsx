import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Nav: FC = () => {
    return (
        <nav className='flex justify-between ietms-center'>
            <Link to={'/'}><h2 className='font-black text-5xl'>Лучшая пицца🍕</h2></Link>
            <Link to="/cart" className='flex gap-5 items-center bg-orange-500 text-white font-semibold px-4 rounded-full'>
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