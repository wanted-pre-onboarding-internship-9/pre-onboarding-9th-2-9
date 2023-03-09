import React from 'react';
import { Button, Card, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react';

interface Product {
	idx: number;
	name: string;
	mainImage: string;
	price: number;
	spaceCategory: string;
	description: string;
	maximumPurchases: number;
	registrationDate: string;
	count: number;
}

interface Props {
	product: Product;
	setReservationList: (props: []) => void;
}

function ReservationItem({ product, setReservationList }: Props) {
	const handleCount = (event: React.MouseEvent<HTMLButtonElement>) => {
		const actionType = event.currentTarget.name;
		const reservationList = JSON.parse(localStorage.getItem('reservationList') || '[]');

		if (actionType === 'minus') {
			if (product.count > 1) {
				const updatedReservationList = reservationList.map((existProduct: Product) =>
					existProduct.idx === product.idx ? { ...existProduct, count: existProduct.count - 1 } : existProduct
				);
				setReservationList(updatedReservationList);
				localStorage.setItem('reservationList', JSON.stringify(updatedReservationList));
			} else {
				alert('상품의 개수를 더이상 줄일 수 없습니다.');
			}
		} else if (actionType === 'plus') {
			const updatedReservationList = reservationList.map((existProduct: Product) =>
				existProduct.idx === product.idx ? { ...existProduct, count: existProduct.count + 1 } : existProduct
			);
			setReservationList(updatedReservationList);
			localStorage.setItem('reservationList', JSON.stringify(updatedReservationList));
		} else if (actionType === 'delete') {
			if (window.confirm('상품을 장바구니에서 삭제할까요?')) {
				const updatedReservationList = reservationList.filter(
					(existProduct: Product) => existProduct.idx !== product.idx
				);
				setReservationList(updatedReservationList);
				localStorage.setItem('reservationList', JSON.stringify(updatedReservationList));
			}
		}
	};

	return (
		<Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
			<Image objectFit="cover" maxW={{ base: '100%', sm: '200px' }} src={product.mainImage} alt="Caffe Latte" />
			<Stack>
				<CardBody>
					<Heading size="md">{product.name}</Heading>
					<Text py="2">{product.price}</Text>
				</CardBody>
				<CardFooter>
					<Text py="2">{product.count}개</Text>
					<Button onClick={handleCount} name="minus" variant="solid" colorScheme="blue">
						-
					</Button>
					<Button onClick={handleCount} name="plus" variant="solid" colorScheme="blue">
						+
					</Button>
					<Button onClick={handleCount} name="delete" variant="solid" colorScheme="blue">
						삭제
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
}

export default ReservationItem;
