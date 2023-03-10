import React from 'react';
import { Box, Button, useDisclosure, Flex, GridItem, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { convertUnitToWon } from '../../commons/utils';
import SkeletonImage from '../common/SkeletonImage';
import Toast from '../common/Toast';
import ProductModal from './ProductModal';

function Product(props: IProduct) {
	const { idx, name, mainImage, price, spaceCategory, description, maximumPurchases, registrationDate } = props;

	const navigate = useNavigate();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const toast = useToast();

	const handleReservation = (product: IProduct) => {
		let reservations = JSON.parse(localStorage.getItem('reservations') as string);

		const index = reservations.findIndex((reservation: IReservation) => reservation.idx === product.idx);
		if (index !== -1 && reservations[index].count >= product.maximumPurchases) {
			toast({
				title: `${product.name} 구매 가능 횟수가 초과하였습니다.`,
				status: 'error',
				duration: 1000,
				isClosable: true,
				position: 'top-right',
			});
			return;
		}

		if (reservations.map((reservation: IReservation) => reservation.idx).includes(product.idx)) {
			reservations = reservations.map((reservation: IReservation) =>
				reservation.idx === product.idx ? { ...reservation, count: reservation.count + 1 } : reservation
			);
		} else {
			reservations = [...reservations, { ...product, count: 1 }];
		}
		localStorage.setItem('reservations', JSON.stringify(reservations));

		toast({
			duration: 2000,
			isClosable: true,
			position: 'top-right',
			render() {
				return (
					<Toast
						text={`${product.name} 예약이 확정되었습니다. 장바구니로 이동하시겠습니까?`}
						onClick={() => navigate('/reservations')}
						isConfirm
					/>
				);
			},
		});
	};

	return (
		<>
			<GridItem boxShadow="2xl" borderRadius="lg" overflow="hidden" gap="2" paddingBottom="4" width="100%">
				<Flex direction="column" justifyContent="space-between" height="100%">
					<Box overflow="hidden" position="relative" minHeight={['300px', '200px', '250px', '350px']}>
						<SkeletonImage src={mainImage} alt={name} />
					</Box>
					<Box padding="5">
						<Box fontWeight="bold">{spaceCategory}</Box>
						<Box fontWeight="bold" fontSize="lg" letterSpacing="tighter">
							{name}
						</Box>
						<Box fontSize="sm" color="gray.600" letterSpacing="tighter">{`상품번호 : ${idx}`}</Box>
						<Box fontWeight="bold" fontSize="2xl" letterSpacing="tight" marginY="2">
							{convertUnitToWon(price)}
						</Box>
					</Box>
					<Flex paddingX="3" justifyContent="space-between" marginTop="auto">
						<Button
							bgColor="green.400"
							_hover={{ bg: 'green.300' }}
							color="white"
							boxShadow="2xl"
							onClick={() => handleReservation(props)}
						>
							예약하기
						</Button>
						<Button bgColor="blue.400" _hover={{ bg: 'blue.300' }} color="white" onClick={() => onOpen()}>
							상세보기
						</Button>
					</Flex>
				</Flex>
			</GridItem>
			{isOpen && (
				<ProductModal
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
			)}
		</>
	);
}

export default React.memo(Product);
