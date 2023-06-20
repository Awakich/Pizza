import { FC, memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCategory, filterSelectorCategory } from '../../slices/filterSlice';


const Categories: FC = memo(() => {
    const categoryId: number = useAppSelector(filterSelectorCategory)
    const dispatch = useAppDispatch()

    const categories: Array<string> = ['все', 'мясные', 'вегетарианская', 'гриль', 'острые', 'закрытые']

    return (
        <ul className='sm:flex sm:grid-cols-none sm:grid-rows-none items-center gap-2 md:gap-10 font-semibold grid grid-cols-2 grid-rows-3 text-center w-4/5 mx-auto sm:w-full sm:gap-6'>
            {categories.map((categorie: string, i: number) => (
                <li key={i as number} onClick={useCallback(() => dispatch(changeCategory(i)), [])} className={categoryId === i ? 'bg-[#222] text-white cursor-pointer hover:bg-[#333] text-center py-2 sm:px-6 rounded-full' : 'text-black cursor-pointer'}>{categorie}</li>
            ))}
        </ul>
    )
})

export default Categories