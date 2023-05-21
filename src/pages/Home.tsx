import { FC, useState } from 'react'
import PizzaList from '../components/PizzaList';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { SortObj } from '../models';

const Home: FC = () => {
    const [categoryId, setCategoryId] = useState<number>(0)
    const [sortType, setSortType] = useState<SortObj>({
        name: 'популярности',
        sort: 'rating'
    })

    return (
        <>
            <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <Sort sortType={sortType} onClickSort={(obj) => setSortType(obj)} />
            <PizzaList categoryId={categoryId} sortType={sortType} />
        </>
    )
}

export default Home