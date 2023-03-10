import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import { convertUnitToWon } from '../../commons/utils';

function Reservation({
	idx,
	count,
	mainImage,
	spaceCategory,
	name,
	description,
	price,
	maximumPurchases,
	setReservations,
}: IReservationProps) {
	const handleDelete = (productIdx: number) => {
		if (!window.confirm('삭제 하시겠습니까?')) return;

		let reservations = JSON.parse(localStorage.getItem('reservations') as string);
		reservations = reservations.filter((reservation: IReservation) => reservation.idx !== productIdx);
		localStorage.setItem('reservations', JSON.stringify(reservations));
		setReservations(reservations);
	};

	const handlePlus = (productIdx: number) => {
		if (maximumPurchases === count) {
			window.alert('구매 가능 개수를 초과하였습니다.');
			return;
		}
		let reservations = JSON.parse(localStorage.getItem('reservations') as string);
		reservations = reservations.map((reservation: IReservation) =>
			reservation.idx === productIdx ? { ...reservation, count: reservation.count + 1 } : reservation
		);
		localStorage.setItem('reservations', JSON.stringify(reservations));
		setReservations(reservations);
	};

	const handleMinus = (productIdx: number) => {
		if (count === 1) {
			handleDelete(productIdx);
			return;
		}
		let reservations = JSON.parse(localStorage.getItem('reservations') as string);
		reservations = reservations.map((reservation: IReservation) =>
			reservation.idx === productIdx ? { ...reservation, count: reservation.count - 1 } : reservation
		);
		localStorage.setItem('reservations', JSON.stringify(reservations));
		setReservations(reservations);
	};

	return (
		<Flex
			alignItems="center"
			gap={['5', '10', '15', '20']}
			letterSpacing="tighter"
			minWidth="lg"
			borderBottom="1px"
			borderColor="gray.300"
			paddingY="3"
		>
			<Flex flex="1 1 0" justifyContent="flex-start" alignItems="center" gap="3">
				<IconButton
					size={['xs', 'xs', 'sm', 'sm']}
					bgColor="gray.300"
					aria-label="Plus Count"
					icon={<AddIcon />}
					onClick={() => handlePlus(idx)}
				/>
				<Box fontWeight="600" fontSize={['xs', 'sm', 'md', 'md']}>
					{count}
				</Box>
				<IconButton
					size={['xs', 'xs', 'sm', 'sm']}
					bgColor="gray.300"
					aria-label="Minus Count"
					icon={<MinusIcon />}
					onClick={() => handleMinus(idx)}
				/>
			</Flex>
			<Image
				src={mainImage}
				flex="2 1 0"
				width={['25px', '50px', '100px', '150px']}
				height={['25px', '50px', '100px', '150px']}
				borderRadius="lg"
			/>
			<Flex direction="column" flex="10 1 0" gap="1">
				<Box fontSize="xs">{`제품번호 : ${idx}`}</Box>
				<Box color="gray.600" fontWeight="600" fontSize={['xs', 'sm', 'sm', 'sm']}>
					{spaceCategory}
				</Box>
				<Box fontWeight="600" fontSize={['xs', 'sm', 'md', 'md']}>
					{name}
				</Box>
				<Box color="gray.500" fontSize="xs">
					{description}
				</Box>
			</Flex>
			<Box flex="1 1 0" textAlign="right" fontSize={['xs', 'sm', 'md', 'md']} whiteSpace="nowrap" fontWeight="bold">
				{convertUnitToWon(price)}
			</Box>
			<Box flex="1 1 0" textAlign="right" fontSize={['xs', 'sm', 'md', 'md']} whiteSpace="nowrap" fontWeight="bold">
				{convertUnitToWon(price * count)}
			</Box>
			<Button
				bgColor="red.300"
				_hover={{ bg: 'red.400' }}
				color="white"
				size={['xs', 'sm', 'sm', 'sm']}
				onClick={() => handleDelete(idx)}
			>
				삭제하기
			</Button>
		</Flex>
	);
}

export default Reservation;
