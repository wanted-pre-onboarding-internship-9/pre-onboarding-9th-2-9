import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ReservationsList from '../components/ReservationsList';

function Reservations() {
	return (
		<Layout>
			<Flex direction="column">
				<Heading fontWeight="bold" fontSize="2xl" borderBottom="4px" paddingBottom="2">
					예약내역
				</Heading>
				<ReservationsList />
			</Flex>
		</Layout>
	);
}

export default Reservations;
