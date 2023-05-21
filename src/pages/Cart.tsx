import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart: FC = () => {
    return (
        <div>
            <div className='flex justify-between'>

                <div className='flex gap-5'>
                    <ShoppingCartIcon className='h-8' />
                    <h2>Корзина</h2>
                </div>

                <div className='flex gap-5'>
                    <TrashIcon className='h-6 text-gray-400' />
                    <p className='text-gray-400'>Очистить корзину</p>
                </div>

            </div>

            <hr className='mt-4' />
        </div>
    )
}

export default Cart