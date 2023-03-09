import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';
import ReservationList from '../components/reservations/ReservationList';
import ReservationSummary from '../components/reservations/ReservationSummary';

function ReservationsPage() {
	return (
		<Flex flexDir="column">
			<Text>장바구니</Text>
			<Flex m={5}>
				<Divider orientation="horizontal" />
			</Flex>
			<ReservationList />
			<Flex m={5}>
				<Divider orientation="horizontal" />
			</Flex>
			<ReservationSummary />
		</Flex>
	);
}

export default ReservationsPage;
