import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
	Card,
	CardBody,
	Heading,
	Text,
	Image,
	Wrap,
	Stack,
	CardFooter,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Select,
} from '@chakra-ui/react';

type DataList = {
	idx: number;
	name: string;
	mainImage: string;
	description: string;
	spaceCategory: string;
	price: number;
	maximumPurchases: number;
	registrationDate: string;
};

type FilterType = {
	price: string;
	region: string;
};

function Main() {
	const [data, setData] = useState<DataList[]>();
	const [modalIdx, setModalIdx] = useState<number>();
	const [filter, setFilter] = useState<FilterType>({ region: '', price: '' });
	const { isOpen, onOpen, onClose } = useDisclosure();

	const getData = () => {
		axios.get('/dummy/mock_data.json').then((res) => {
			setData(res.data);
		});
	};

	useEffect(() => {
		getData();
	}, [filter]);

	const addToCart = (travelInfo: DataList) => {
		localStorage.setItem('addToCart', JSON.stringify(travelInfo));
	};

	const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>, key: keyof FilterType) => {
		setFilter({ ...filter, [key]: e.target.value });
	};

	const filterData = useCallback(() => {
		if (!data) return;
		setData(data?.filter((ele) => ele.price.toString() === filter?.price || ele.spaceCategory === filter.region));
	}, [data, filter]);

	return (
		<>
			<Stack>
				<Select placeholder="price" size="md" onChange={(e) => onChangeFilter(e, 'price')}>
					<option value="1000"> 1000</option>
					<option value="10000"> 10000</option>
					<option value="15000"> 15000</option>
					<option value="25000"> 25000</option>
					<option value="30000"> 30000</option>
				</Select>
				<Select placeholder="region" onChange={(e) => onChangeFilter(e, 'region')}>
					<option value="강원">강원</option>
					<option value="대구">대구</option>
					<option value="부산">부산</option>
					<option value="서울">서울</option>
					<option value="제주">제주</option>
				</Select>
				<Button onClick={filterData}>검색</Button>
			</Stack>
			<Wrap spacing="24px">
				{data?.map((mock: DataList) => (
					<>
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
								<Button mr="4" onClick={() => addToCart(mock)}>
									예약
								</Button>
								<Button
									onClick={() => {
										setModalIdx(mock.idx);
										onOpen();
									}}
								>
									자세히보기
								</Button>
							</CardFooter>
						</Card>
						{modalIdx === mock.idx ? (
							<Modal isCentered isOpen={isOpen} onClose={onClose}>
								<ModalOverlay />
								<ModalContent>
									<ModalHeader>
										{mock.idx} {mock.name}
									</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Image src={mock.mainImage} boxSize="300px" borderRadius="lg" />
										<Text>{mock.description}</Text>
										<Text>{mock.spaceCategory}</Text>
										<Text>{mock.price}</Text>
										<Text>{mock.maximumPurchases}</Text>
										<Text>{mock.registrationDate}</Text>
									</ModalBody>
									<ModalFooter>
										<Button onClick={onClose}>Close</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>
						) : null}
					</>
				))}
			</Wrap>
		</>
	);
}

export default Main;
