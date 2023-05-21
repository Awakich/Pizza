import { FC } from 'react'

interface Category {
    categoryId: number;
    onClickCategory: (id: number) => void;
}

const Categories: FC<Category> = ({ categoryId, onClickCategory }) => {
    const categories: Array<string> = ['все', 'мясные', 'вегетарианская', 'гриль', 'острые', 'закрытые']

    return (
        <ul className='flex items-center gap-10 font-semibold'>
            {categories.map((categorie, i) => (
                <li key={i} onClick={() => onClickCategory(i)} className={categoryId === i ? 'bg-[#222] text-white cursor-pointer hover:bg-[#333] px-6 py-3 rounded-full' : 'text-black cursor-pointer'}>{categorie}</li>
            ))}
        </ul>
    )
}

export default Categories