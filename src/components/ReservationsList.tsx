import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { convertUnitToWon } from '../commons/utils';
import Reservation from './Reservation';

function ReservationsList() {
	const [reservations, setReservations] = useState<IReservation[]>([]);

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('reservations') as string);
		setReservations(storage);
	}, []);

	return (
		<Box width="80%" margin="auto">
			<Flex
				alignItems="center"
				gap={['5', '10', '15', '20']}
				letterSpacing="tighter"
				minWidth="2xl"
				paddingY="2"
				fontSize={['xs', 'sm', 'md', 'lg']}
				whiteSpace="nowrap"
				fontWeight="bold"
			>
				<Flex flex="1 1 0" justifyContent="center" alignItems="center" gap="3">
					<Box>수량</Box>
				</Flex>
				<Flex direction="column" flex="10 1 0" gap="1">
					<Box textAlign="center">상품 정보</Box>
				</Flex>
				<Box flex="1 1 0" textAlign="center">
					상품 가격
				</Box>
				<Box flex="1 1 0" textAlign="center">
					총 가격
				</Box>
				<Box flex="1 1 0" textAlign="right" />
			</Flex>
			<Flex direction="column" paddingY="5" gap="5" minWidth="3xl">
				{reservations.map((reservation) => (
					<Reservation
						key={reservation.idx}
						idx={reservation.idx}
						count={reservation.count}
						mainImage={reservation.mainImage}
						spaceCategory={reservation.spaceCategory}
						name={reservation.name}
						description={reservation.description}
						price={reservation.price}
						maximumPurchases={reservation.maximumPurchases}
						registrationDate={reservation.registrationDate}
						setReservations={setReservations}
					/>
				))}
			</Flex>
			<Flex
				bgColor="blue.300"
				padding="5"
				width="full"
				direction="column"
				justifyContent="center"
				alignItems="flex-end"
			>
				<Box fontSize="lg" fontWeight="bold" color="white">
					총 주문금액
				</Box>
				<Box fontSize="2xl" fontWeight="bold" color="white">
					{convertUnitToWon(reservations.reduce((prev, cur) => prev + cur.price * cur.count, 0))}
				</Box>
			</Flex>
		</Box>
	);
}

export default ReservationsList;
