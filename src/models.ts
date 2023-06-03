export interface Pizza {
    id: number;
    category?: number;
    imageUrl: string;
    price: number;
    sizes: Array<number>;
    title: string;
    types: Array<number>;
    count: number;
}

export interface SortObj {
    name: string;
    sort: string;
}