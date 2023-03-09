import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Image,
	Skeleton,
} from '@chakra-ui/react';

interface ModalItemType {
	idx: number;
	name: string;
	mainImage: string;
	description: string;
	price: number;
	spaceCategory: string;
	maximumPurchases: number;
	registrationDate: string;
	isOpen: boolean;
	onClose: () => void;
}

function TravelModal(props: ModalItemType) {
	const {
		idx,
		name,
		mainImage,
		price,
		spaceCategory,
		description,
		maximumPurchases,
		registrationDate,
		isOpen,
		onClose,
	} = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{mainImage ? (
						<Image objectFit="cover" maxW={{ base: '100%', sm: '300px' }} src={mainImage} alt="상품 사진" />
					) : (
						<Skeleton height="20px" />
					)}

					<div>가격:&nbsp;{price}원</div>
					<div>{spaceCategory}</div>
					<div>상품 번호:&nbsp;{idx}</div>
					<div> {description}</div>
					<div>최대 구매 가능 개수: {maximumPurchases}</div>
					<div>{registrationDate}</div>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						확인
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
export default TravelModal;
