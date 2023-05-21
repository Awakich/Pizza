import { FC, useEffect, useState } from 'react'
import { Pizza, SortObj } from '../models';
import PizzaItem from './PizzaItem';

interface CategorySort extends SortObj {
    categoryId: number;
    sortType: SortObj;
}

const PizzaList: FC<CategorySort> = ({ categoryId, sortType }) => {

    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getPizzas = async () => {
        setLoading(true)
        const res = await fetch(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}`).then(res => res.json())
        setPizzas(res)
        setLoading(false)
    }

    useEffect(() => {
        getPizzas()
    }, [categoryId, sortType])

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <section className='grid grid-cols-3 items-center gap-5 text-center'>
            {pizzas.map(({ title, id, sizes, imageUrl, price, reting, types }) => (
                <PizzaItem key={id} title={title} sizes={sizes} imageUrl={imageUrl} price={price} reting={reting} types={types} />
            ))}
        </section>
    )
}

export default PizzaList