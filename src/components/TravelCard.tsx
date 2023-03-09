import { useDisclosure, Button, ButtonGroup } from '@chakra-ui/react';
import { ITravelProduct, TCartInfo } from '../dto/productDTO';
import TravelModal from './TravelModal';

type ProductProps = {
	product: ITravelProduct;
};

function TravelCard({ product }: ProductProps) {
	const { idx, name, mainImage, price, spaceCategory } = product;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const setReservation = () => {
		if (!window.confirm('예약 하시겠습니까?')) return;

		const cartInfo: TCartInfo[] = JSON.parse(localStorage.getItem('cartInfo')!);

		if (cartInfo !== null) {
			const addCartCount: TCartInfo[] = cartInfo.map((item: TCartInfo) => (
				item.idx === idx ? { ...item, count: item.count + 1 } : item
			))
			localStorage.removeItem('cartInfo');
			localStorage.setItem('cartInfo', JSON.stringify(addCartCount));
		}
	}


	return (
		<div>
			<div>
				<TravelModal isOpen={isOpen} onClose={onClose} idx={idx} />
			</div>
			<div>idx : {idx}</div>
			<div>name : {name}</div>
			<div>
				<img src={mainImage} alt={`product_main_image_${idx}`} />
			</div>
			<div>price : {price}</div>
			<div>spaceCategory : {spaceCategory}</div>
			<ButtonGroup gap='4'>
				<Button colorScheme='yellow' type="button" onClick={setReservation}>
					예약하기
				</Button>
				<Button colorScheme='purple' type="button" onClick={onOpen}>
					상세정보
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default TravelCard;
