import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, Heading, Text, Image, Wrap, Stack, CardFooter, Button } from '@chakra-ui/react';

export interface DataList {
	idx: number;
	name: string;
	mainImage: string;
	description: string;
	spaceCategory: string;
	price: number;
	maximumPurchases: number;
	registrationDate: string;
}

function Main() {
	const [data, setData] = useState<DataList[]>();

	const getData = () => {
		axios.get('/dummy/mock_data.json').then((res) => {
			setData(res.data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Wrap spacing="24px">
			{data?.map((mock: DataList) => (
				<Card key={mock.idx}>
					<CardBody>
						<Image src={mock.mainImage} boxSize="300px" borderRadius="lg" />
						<Stack mt="6" spacing="2">
							<Heading size="md">
								{mock.idx} {mock.name}
							</Heading>
							<Text>{mock.spaceCategory}</Text>
							<Text color="blue.600" fontSize="2xl">
								₩{mock.price}
							</Text>
						</Stack>
					</CardBody>
					<CardFooter>
						<Button>예약</Button>
					</CardFooter>
				</Card>
			))}
		</Wrap>
	);
}

export default Main;
