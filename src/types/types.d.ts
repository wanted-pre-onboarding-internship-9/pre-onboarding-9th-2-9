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

interface IProductProps extends IProduct {
	isView: boolean;
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
