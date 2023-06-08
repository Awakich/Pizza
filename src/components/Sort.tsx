import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks';
import { sortTypes, closeFilter, filterSelectorOpen, filterSelectorSort } from '../slices/filterSlice';
import { SortObj } from '../models';

const Sort: FC = () => {
    const sortType: SortObj = useAppSelector(filterSelectorSort)
    const close: boolean = useAppSelector(filterSelectorOpen)
    const dispatch = useAppDispatch()

    const sort: { name: string; sort: string }[] = [{ name: 'популярности', sort: 'rating' }, { name: 'цене', sort: 'price' }, { name: 'алфавиту', sort: 'title' }]


    const changeSelectHandler: (i: SortObj) => void = (i: SortObj): void => {
        dispatch(sortTypes(i))
        dispatch(closeFilter(!close))
    }

    return (
        <div>
            <div className='flex gap-2 relative'>
                <EllipsisHorizontalCircleIcon className='h-6' />
                <p> Сортировать по:
                    <span onClick={() => dispatch(closeFilter(!close))} className='cursor-pointer underline ml-1 text-orange-600'>
                        {sortType.name}
                    </span>
                </p>
            </div>

            {
                close && (
                    <ul className='absolute top-[29%] left-[30%] bg-white rounded-md'>
                        {sort.map((obj: SortObj, i: number) => (
                            <li key={i as number} onClick={(): void => changeSelectHandler(obj as SortObj)} className='hover:text-orange-600 hover:bg-orange-100 cursor-pointer px-5 py-2 font-semibold'>{obj.name}</li>
                        ))}
                    </ul>
                )
            }
        </div >
    )
}

export default Sort