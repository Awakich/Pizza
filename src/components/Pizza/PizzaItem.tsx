import { FC, useState } from "react"
import { IPizza, IPizzaInfo } from "../../models"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addPizza } from "../../slices/cartSlice";
import Button from "../Layout/Button";

const PizzaItem: FC<IPizza> = ({ imageUrl, price, title, types, sizes, id }) => {
    const pizzaType: Array<string> = ['тонкое', 'традиционное'];

    const counter = useAppSelector(state => state.cart.pizzas.find(obj => obj.id === id))
    const dispatch = useAppDispatch()

    const [active, setActive] = useState<number>(0)
    const [sizesActive, setsizesActive] = useState<number>(0)

    const AddPizzaHandler: () => void = (): void => {
        const item: IPizzaInfo = {
            id,
            price,
            title,
            imageUrl,
            types: pizzaType[active],
            sizes: sizes[sizesActive],
            count: 0,
        }
        dispatch(addPizza(item))
    }

    return (
        <section className="space-y-3 md:space-y-5 lg:w-full md:w-4/5 mx-auto sm:w-4/5">
            <img alt='pizza' src={imageUrl} />
            <h1 className="font-bold xl:text-xl lg: md:text-xl text-lg">{title}</h1>

            <div className="bg-gray-200 py-2 rounded-md space-y-2">
                <div className="flex gap-3 justify-center items-center mx-auto">
                    {types.map((type: number, i: number) => (
                        <p key={i as number} onClick={(): void => setActive(i as number)} className={active === i ? `bg-white px-4 py-1 sm:text-base text-lg rounded-md cursor-pointer hover:bg-white/70` : "sm:text-base cursor-pointer"}>{pizzaType[type]}</p>
                    ))}
                </div>

                <div className="flex gap-3 justify-center items-center">
                    {sizes.map((size: string, i: number) => (
                        <p key={i} onClick={(): void => setsizesActive(i)} className={sizesActive === i ? `bg-white px-4 py-1 sm:text-base text-lg rounded-md cursor-pointer hover:bg-white/70` : "sm:text-base cursor-pointer"}>{size} см</p>
                    ))}
                </div>

            </div>

            <div className="flex justify-between items-center">
                <p className="font-semibold text-2xl">{`от ${price} ₽`}</p>
                <Button count={counter?.count ? counter.count : 0} text="Добавить" className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold" onClick={AddPizzaHandler} />
            </div>
        </section>
    )
}

export default PizzaItem;