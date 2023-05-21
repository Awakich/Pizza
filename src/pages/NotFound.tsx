import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
    return (
        <div className='text-center absolute top-[40%] left-[42%] space-y-5'>
            <h2 className='font-medium text-3xl'>Ничего не найдено</h2>
            <button className='bg-[#222] text-white px-5 py-2 rounded-full'><Link to="/">Назад</Link></button>
        </div>

    )
}

export default NotFound