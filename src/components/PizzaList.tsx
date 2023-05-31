import { FC, useEffect, useState } from 'react'
import { Pizza } from '../models';
import PizzaItem from './PizzaItem';
import { useAppSelector } from '../hooks';

const PizzaList: FC = () => {
    const categoryId = useAppSelector(state => state.filter.categoryId)
    const sortType = useAppSelector(state => state.filter.sortType)
    const userInput = useAppSelector(state => state.input.userInput)

    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sort = sortType.sort
    const input = userInput ? userInput : ""

    const getPizzas = async () => {
        setLoading(true)
        const res = await fetch(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas?&${category}&sortBy=${sort}&search=${input}`).then(res => res.json())
        setPizzas(res)
        setLoading(false)
    }

    useEffect(() => {
        getPizzas()
    }, [categoryId, sortType, userInput])

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <section className='grid grid-cols-3 items-center gap-5 text-center'>
            {pizzas.filter(item => userInput.toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())).map(({ count, title, id, sizes, imageUrl, price, reting, types }) => (
                <PizzaItem key={id} id={id} title={title} sizes={sizes} imageUrl={imageUrl} price={price} reting={reting} types={types} count={count} />
            ))}
        </section>
    )
}

export default PizzaList