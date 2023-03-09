import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';

function ReservationSummary() {
	const reservationListString: string | null = localStorage.getItem('reservationList');
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (reservationListString !== null) {
			const reservationListJson = JSON.parse(reservationListString);
			const totalNum = reservationListJson.reduce(
				(acc: number, cur: { price: number; count: number }) => acc + cur.price * cur.count,
				0
			);
			setTotalPrice(totalNum);
		}
	}, [reservationListString]);

	return <Flex>{reservationListString ? <Text>총 {totalPrice}원</Text> : null}</Flex>;
}

export default ReservationSummary;
