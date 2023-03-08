export interface ITravelProduct {
    idx: number;
    name: string;
    mainImage: string;
    description: string;
    spaceCategory: string;
    price: number;
    maximumPurchases: number;
    registrationDate: string;
}

export interface IPrice {
    key: number;
    startPrice: number;
    endPrice: number;
}

export interface ISpace {
    key: number;
    space: string;
}

export interface IFilter {
    price: number,
    space: string
}
