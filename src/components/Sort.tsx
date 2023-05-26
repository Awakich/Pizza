import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { FC, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks';
import { sortTypes } from '../slices/filterSlice';
import { SortObj } from '../models';

const Sort: FC = () => {
    const sortType = useAppSelector(state => state.filter.sortType)
    const dispatch = useAppDispatch()

    const [open, setOpen] = useState<boolean>(false)
    const sort = [{ name: 'популярности', sort: 'rating' }, { name: 'цене', sort: 'price' }, { name: 'алфавиту', sort: 'title' }]

    const changeSelectHandler = (i: SortObj) => {
        dispatch(sortTypes(i))
        setOpen(!open)
    }
    return (
        <div>
            <div className='flex gap-2 relative'>
                <EllipsisHorizontalCircleIcon className='h-6' />
                <p> Сортировать по:
                    <span onClick={() => setOpen(!open)} className='cursor-pointer underline ml-1 text-orange-600'>
                        {sortType.name}
                    </span>
                </p>
            </div>

            {
                open && (
                    <ul className='absolute top-[29%] left-[30%] bg-white rounded-md'>
                        {sort.map((obj, i) => (
                            <li key={i} onClick={() => changeSelectHandler(obj)} className='hover:text-orange-600 hover:bg-orange-100 cursor-pointer px-5 py-2 font-semibold'>{obj.name}</li>
                        ))}
                    </ul>
                )
            }
        </div >
    )
}

export default Sort