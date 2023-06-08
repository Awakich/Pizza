export interface Pizza {
    id: number;
    category?: number;
    imageUrl: string;
    price: number;
    sizes: string[];
    title: string;
    types: number[];
    count: number;
}

export interface PizzaInfo {
    id: number;
    price: number;
    title: string;
    imageUrl: string;
    types: string;
    sizes: string;
    count: number
}

export interface SortObj {
    name: string;
    sort: string;
}