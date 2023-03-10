interface IProduct {
	idx: number;
	name: string;
	mainImage: string;
	spaceCategory: string;
	price: number;
	description?: string;
	maximumPurchases: number;
	registrationDate: string;
}

interface IProductsFilterProps {
	priceRange: number[];
	setPriceRange: Dispatch<SetState<number[]>>;
	setSelectedRegion: Dispatch<SetState<string[]>>;
	regions?: string[];
}

interface IGetProducts {
	products: IProduct[];
	regions: string[];
}

interface IReservation extends IProduct {
	count: number;
}

interface IReservationProps extends IReservation {
	setReservations: Dispatch<SetState<boolean>>;
}

interface ContextProps {
	children: JSX.Element | JSX.Element[];
}
