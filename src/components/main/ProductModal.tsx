import React from 'react';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text,
	Image,
	useDisclosure,
} from '@chakra-ui/react';

interface Product {
	id: number;
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

function ProductModal({ product }: Props) {
	const { isOpen, onClose } = useDisclosure();

	return (
		<Modal blockScrollOnMount={false} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
					<Button colorScheme="blue" mr={3}>
						예약
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default ProductModal;
