import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { FC, useState } from 'react'
import { SortObj } from '../models'

interface Sorted extends SortObj {
    sortType: SortObj;
    onClickSort: (obj: SortObj) => void;
}

const Sort: FC<Sorted> = ({ sortType, onClickSort }) => {
    const [open, setOpen] = useState<boolean>(false)
    const sort = [{ name: 'популярности', sort: 'rating' }, { name: 'цене', sort: 'price' }, { name: 'алфавиту', sort: 'title' }]

    const changeSelectHandler = (i: SortObj) => {
        onClickSort(i)
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