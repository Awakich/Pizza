import { FC, memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCategory, filterSelectorCategory } from '../../slices/filterSlice';


const Categories: FC = memo(() => {
    const categoryId: number = useAppSelector(filterSelectorCategory)
    const dispatch = useAppDispatch()

    const categories: Array<string> = ['все', 'мясные', 'вегетарианская', 'гриль', 'острые', 'закрытые']

    return (
        <ul className='flex items-center gap-10 font-semibold'>
            {categories.map((categorie: string, i: number) => (
                <li key={i as number} onClick={useCallback(() => dispatch(changeCategory(i)), [])} className={categoryId === i ? 'bg-[#222] text-white cursor-pointer hover:bg-[#333] px-6 py-3 rounded-full' : 'text-black cursor-pointer'}>{categorie}</li>
            ))}
        </ul>
    )
})

export default Categories