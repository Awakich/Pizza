import { FC } from 'react'

const Error: FC = () => {
    return (
        <div className='text-center absolute top-[40%] left-[42%] space-y-5'>
            <h2 className='font-bold text-3xl'>Произошла ошибка</h2>
            <p className='font-light text-lg'>Не удалось получить пиццы</p>
        </div>

    )
}

export default Error