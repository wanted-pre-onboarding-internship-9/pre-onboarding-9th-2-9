import React from 'react';
import {
	Button,
	Card,
	Divider,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';

interface Product {
	idx: number;
	name: string;
	mainImage: string;
	price: number;
	spaceCategory: string;
	description: string;
	maximumPurchases: number;
	registrationDate: string;
}

interface Props {
	product: Product;
}

function ProductItem({ product }: Props) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleReservation = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();

		const reservationListJson = JSON.parse(localStorage.getItem('reservationList') || '[]');
		const existIndex = reservationListJson.findIndex((existItem: Product) => existItem.idx === product.idx);

		if (existIndex === -1) {
			reservationListJson.push({ ...product, count: 1 });
		} else {
			reservationListJson[existIndex].count += 1;
		}

		localStorage.setItem('reservationList', JSON.stringify(reservationListJson));
		alert('장바구니에 상품을 담았습니다.');
	};

	return (
		<>
			<Card maxW="sm">
				<CardBody>
					<Image src={product.mainImage} alt={product.name} borderRadius="lg" />
					<Stack mt="6" spacing="3">
						<Heading size="md">{product.name}</Heading>
						<Text>{product.idx}</Text>
						<Text>{product.spaceCategory}</Text>
						<Text color="blue.600" fontSize="2xl">
							{product.price}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<Button onClick={handleReservation} variant="solid" colorScheme="blue">
						예약
					</Button>
					<Button onClick={onOpen}>상세 보기</Button>
				</CardFooter>
			</Card>
			<Modal blockScrollOnMount closeOnOverlayClick isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{product.name}</ModalHeader>
					<ModalCloseButton />
					<Image src={product.mainImage} alt={product.name} borderRadius="lg" />
					<ModalBody>
						<Text>{product.spaceCategory}</Text>
						<Text>{product.price}</Text>
						<Text>{product.idx}</Text>
						<Text>{product.maximumPurchases}</Text>
						<Text>{product.registrationDate}</Text>
						<Text>{product.description}</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={handleReservation} colorScheme="blue" mr={3}>
							예약
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ProductItem;
