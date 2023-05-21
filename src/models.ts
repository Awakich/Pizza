export interface Pizza {
    id?: number;
    category?: number;
    imageUrl: string;
    price: number;
    reting: number;
    sizes: Array<number>;
    title: string;
    types: Array<number>;
}

export interface SortObj {
    name?: string;
    sort?: string;
}