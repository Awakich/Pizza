import { FC } from 'react'
import PizzaList from '../components/PizzaList';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home: FC = () => {
    return (
        <>
            <Categories />
            <Sort />
            <PizzaList />
        </>
    )
}

export default Home