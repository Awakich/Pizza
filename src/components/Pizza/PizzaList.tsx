import { FC } from 'react'
import { filterSelectorCategory, filterSelectorSort } from '../../slices/filterSlice';
import { inputSelector } from '../../slices/InputSlice';
import { ISort } from '../../models';
import { useAppSelector } from '../../hooks';
import { useGetPizzasQuery } from '../../utils/pizzaApi';
import PizzaItem from './PizzaItem';
import Error from '../Other/Error';
import Loading from '../Other/Loading';

const PizzaList: FC = () => {
    const categoryId: number = useAppSelector(filterSelectorCategory)
    const sortType: ISort = useAppSelector(filterSelectorSort)
    const userInput: string = useAppSelector(inputSelector)

    const category: string = categoryId > 0 ? `category=${categoryId}` : ''
    const sort: string = sortType.sort
    const input: string = userInput ? userInput : ""

    const { data, error, isLoading } = useGetPizzasQuery({ category, sort, input });

    if (error) return <Error />

    if (isLoading) return <Loading />

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center xl:gap-8 lg:gap-6 text-center'>
            {data?.filter(item => userInput.toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())).map(({ count, title, id, sizes, imageUrl, price, types }) => (
                <PizzaItem key={id} id={id} title={title} sizes={sizes} imageUrl={imageUrl} price={price} types={types} count={count} />
            ))}
        </section>
    )
}

export default PizzaList