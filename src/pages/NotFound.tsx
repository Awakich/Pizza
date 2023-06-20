import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Layout/Button'

const NotFound: FC = () => {
    return (
        <div className='text-center'>
            <h2 className='font-medium text-3xl mb-6'>Ничего не найдено</h2>
            <Link to="/">
                <Button text='Вернуться назад' className='bg-[#222] text-white px-5 py-2 rounded-full' />
            </Link>
        </div>

    )
}

export default NotFound