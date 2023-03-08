interface IProduct {
	idx: number;
	name: string;
	mainImage: string;
	spaceCategory: string;
	price: number;
	description: string;
	maximumPurchases: number;
	registrationDate: string;
}

interface IProductProps extends IProduct {
	isView: boolean;
}