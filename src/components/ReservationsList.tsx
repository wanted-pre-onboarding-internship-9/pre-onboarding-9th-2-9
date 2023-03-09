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
		<>
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
				<Box>총 주문금액</Box>
				<Box>{convertUnitToWon(reservations.reduce((prev, cur) => prev + cur.price * cur.count, 0))}</Box>
			</Flex>
		</>
	);
}

export default ReservationsList;
