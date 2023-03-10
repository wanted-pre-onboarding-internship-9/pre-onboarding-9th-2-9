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

interface IProductProps {
	minValue: number;
	maxValue: number;
	priceRange: number[];
	setPriceRange: Dispatch<SetState<number[]>>;
	selectedRegion: string;
	setSelectedRegion: Dispatch<SetState<string>>;
	dedupRegions: string[];
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
