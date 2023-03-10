import { Flex, Heading } from '@chakra-ui/react';
import ReservationsList from '../components/reservation/ReservationsList';

function Reservations() {
	return (
		<Flex direction="column">
			<Heading fontWeight="bold" fontSize="2xl" borderBottom="4px" paddingBottom="2" width="80%" margin="auto">
				예약내역
			</Heading>
			<ReservationsList />
		</Flex>
	);
}

export default Reservations;
