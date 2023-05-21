import { FC, useState } from "react"
import { Pizza } from "../models"

const PizzaItem: FC<Pizza> = ({ imageUrl, price, title, types, sizes }) => {
    const pizzaType: Array<string> = ['тонкое', 'традиционное'];
    const [active, setActive] = useState<number>(0)
    const [sizesActive, setsizesActive] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)

    return (
        <section className="space-y-5">
            <img alt='pizza' src={imageUrl} />
            <h1 className="font-bold text-2xl">{title}</h1>

            <div className="bg-gray-200 py-2 rounded-md space-y-2">
                <div className="flex gap-3 justify-center items-center  mx-auto">
                    {types.map((type, i) => (
                        <p key={i} onClick={() => setActive(i)} className={active === i ? `bg-white px-4 py-1 text-lg rounded-md cursor-pointer hover:bg-white/70` : "cursor-pointer"}>{pizzaType[type]}</p>
                    ))}
                </div>

                <div className="flex gap-3 justify-center items-center">
                    {sizes.map((size, i) => (
                        <p key={i} onClick={() => setsizesActive(i)} className={sizesActive === i ? `bg-white px-4 py-1 text-lg rounded-md cursor-pointer hover:bg-white/70` : "cursor-pointer"}>{size} см</p>
                    ))}
                </div>

            </div>

            <div className="flex justify-between items-center">
                <p className="font-semibold text-2xl">{`от ${price} ₽`}</p>
                <button className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold" onClick={() => setCounter(prev => prev + 1)}>Добавить {counter}</button>
            </div>
        </section>
    )
}

export default PizzaItem;