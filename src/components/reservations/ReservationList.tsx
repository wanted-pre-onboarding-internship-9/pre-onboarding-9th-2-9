import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ReservationItem from './ReservationItem';

interface ReservationItemType {
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

function ReservationList() {
	const [reservationList, setReservationList] = useState<ReservationItemType[]>([]);
	const reservationListString: string | null = localStorage.getItem('reservationList');

	useEffect(() => {
		if (reservationListString !== null) {
			setReservationList(JSON.parse(reservationListString) as ReservationItemType[]);
		}
	}, [reservationListString]);

	return (
		<Flex>
			{reservationListString ? (
				reservationList.map((product: ReservationItemType) => (
					<ReservationItem key={product.idx} product={product} setReservationList={setReservationList} />
				))
			) : (
				<Text>상품이 없습니다.</Text>
			)}
		</Flex>
	);
}

export default ReservationList;
