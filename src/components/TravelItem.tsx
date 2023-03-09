import { useDisclosure } from '@chakra-ui/react';
import TravelCard from './Card';
import TravelModal from './Modal';

interface TravelItemType {
	idx: number;
	name: string;
	mainImage: string;
	description: string;
	price: number;
	spaceCategory: string;
	maximumPurchases: number;
	registrationDate: string;
}

function TravelItem(props: TravelItemType) {
	const { idx, name, mainImage, price, spaceCategory, description, maximumPurchases, registrationDate } = props;
	const { onOpen, isOpen, onClose } = useDisclosure();

	return (
		<div>
			<TravelCard img={mainImage} name={name} price={price} spaceCategory={spaceCategory} onOpen={onOpen} />

			<TravelModal
				idx={idx}
				name={name}
				mainImage={mainImage}
				price={price}
				spaceCategory={spaceCategory}
				description={description}
				maximumPurchases={maximumPurchases}
				registrationDate={registrationDate}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</div>
	);
}

export default TravelItem;
