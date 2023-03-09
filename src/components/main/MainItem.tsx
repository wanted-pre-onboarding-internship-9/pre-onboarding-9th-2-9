import {
	Card,
	CardBody,
	useDisclosure,
	Image,
	Stack,
	Heading,
	Text,
	CardFooter,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import { DataType } from '../../types/type';

function MainItem({ mockData }: { mockData: DataType }) {
	const [modalIdx, setModalIdx] = useState<number>();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const addToCart = (travelInfo: DataType) => {
		localStorage.setItem('addToCart', JSON.stringify(travelInfo));
	};

	return (
		<>
			<Card>
				<CardBody>
					<Image src={mockData.mainImage} boxSize="300px" borderRadius="lg" />
					<Stack mt="6" spacing="2">
						<Heading size="md">{mockData.name}</Heading>
						<Text>{mockData.spaceCategory}</Text>
						<Text color="blue.600" fontSize="2xl">
							₩{mockData.price}
						</Text>
						<Text>상품코드: {mockData.idx}</Text>
					</Stack>
				</CardBody>
				<CardFooter>
					<Button mr="4" onClick={() => addToCart(mockData)}>
						예약
					</Button>
					<Button
						onClick={() => {
							setModalIdx(mockData.idx);
							onOpen();
						}}
					>
						자세히보기
					</Button>
				</CardFooter>
			</Card>
			{modalIdx === mockData.idx ? (
				<Modal isCentered isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{mockData.name}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Image src={mockData.mainImage} boxSize="300px" borderRadius="lg" />
							<Text>{mockData.description}</Text>
							<Text>{mockData.spaceCategory}</Text>
							<Text>{mockData.price}</Text>
							<Text>{mockData.maximumPurchases}</Text>
							<Text>{mockData.registrationDate}</Text>
							<Text>상품코드: {mockData.idx}</Text>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : null}
		</>
	);
}

export default MainItem;
