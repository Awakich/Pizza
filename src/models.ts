export interface IPizza {
    id: number;
    category?: number;
    imageUrl: string;
    price: number;
    sizes: string[];
    title: string;
    types: number[];
    count: number;
}

export interface IPizzaInfo {
    id: number;
    price: number;
    title: string;
    imageUrl: string;
    types: string;
    sizes: string;
    count: number
}

export interface ISort {
    name: string;
    sort: string;
}