import {
	Modal,
	ModalHeader,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import useFetchProduct from '../useFetchProduct';

export default function ProductDetailModal({
	isOpen,
	onClose,
	itemId,
}: {
	isOpen: boolean;
	onClose: () => void;
	itemId: string;
}) {
	const ProductQuery = useFetchProduct();
	const product = ProductQuery.data;
	const modalProduct = useMemo(() => product && product.data.find((el) => el.idx === itemId), [itemId, product]);
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{modalProduct?.name}</ModalHeader>

				<ModalCloseButton />
				<ModalBody>
					<Text py="1">{modalProduct?.registrationDate}</Text>
					<Image
						objectFit="cover"
						maxW={{ base: '100%', sm: '100%' }}
						src={modalProduct?.mainImage}
						alt="여행 상품"
						borderRadius="lg"
					/>
					<Stack>
						<Text py="1">{modalProduct?.description}</Text>
						<Text py="1">상품 코드 {modalProduct?.idx}</Text>

						<Text py="1">1인당 최대 {modalProduct?.maximumPurchases}개 구매가능</Text>
						<Text color="blue.600" fontSize="2xl">
							{modalProduct?.price.toLocaleString()} 원
						</Text>
					</Stack>
				</ModalBody>
				<ModalFooter />
			</ModalContent>
		</Modal>
	);
}
