import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortTypes, closeFilter, filterSelectorOpen, filterSelectorSort } from '../../slices/filterSlice';
import { ISort } from '../../models';

const Sort: FC = () => {
    const sortType: ISort = useAppSelector(filterSelectorSort)
    const close: boolean = useAppSelector(filterSelectorOpen)
    const dispatch = useAppDispatch()

    const sort: { name: string; sort: string }[] = [{ name: 'популярности', sort: 'rating' }, { name: 'цене', sort: 'price' }, { name: 'алфавиту', sort: 'title' }]


    const changeSelectHandler: (i: ISort) => void = (i: ISort): void => {
        dispatch(sortTypes(i))
        dispatch(closeFilter(!close))
    }

    return (
        <>
            <div className='flex gap-2 relative'>
                <EllipsisHorizontalCircleIcon className='h-6' />
                <p> Сортировать по:
                    <span onClick={() => dispatch(closeFilter(!close))} className='hidden sm:inline-flex cursor-pointer underline ml-1 text-orange-600'>
                        {sortType.name}
                    </span>
                    {sort.map((obj: ISort, i: number) => (
                        <li key={i as number} onClick={(): void => changeSelectHandler(obj as ISort)} className='flex sm:hidden flex-col cursor-pointer font-semibold'>{obj.name}</li>
                    ))}
                </p>
            </div>

            {
                close && (
                    <ul className='hidden sm:block absolute top-[28%] 2xl:left-[26%] xl:top-[23%] xl:left-[20%] lg:left-[15%] md:left-[20%] sm:left-[21%] md:top-[22%] bg-white rounded-md'>
                        {sort.map((obj: ISort, i: number) => (
                            <li key={i as number} onClick={(): void => changeSelectHandler(obj as ISort)} className='hover:text-orange-600 hover:bg-orange-100 cursor-pointer px-5 py-2 font-semibold'>{obj.name}</li>
                        ))}
                    </ul>
                )
            }
        </ >
    )
}

export default Sort