import { FC } from 'react'
import Categories from '../components/Filter/Categories';
import PizzaList from '../components/Pizza/PizzaList';
import Sort from '../components/Filter/Sort';

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