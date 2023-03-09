import {
	SimpleGrid,
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Button,
	Badge,
	useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Travel } from '../../type';
import TravelDetailModal from '../modal/ProductDetailModal';

interface Storage {
	idx: string;
	cnt: number;
}
const ItemBox = styled.div``;

export default function ProductList({ products }: { products: Travel[] }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [itemId, setItemId] = useState<string>('');

	const ReservationsClick = (item: string) => {
		const storageObj: Storage = {
			idx: item,
			cnt: 1,
		};
		const basket = JSON.parse(localStorage.getItem('basket') as string) || [];
		const isSomBasket = basket.some((data: Storage) => data.idx === item); // 중복이면 true 반환
		if (isSomBasket) {
			alert('이미 장바구니 해당 상품이 있어요!');
		} else {
			basket.push(storageObj);
			localStorage.setItem('basket', JSON.stringify(basket));
			alert('장바구니 담기 완료!');
		}
	};

	return (
		<SimpleGrid columns={4} spacing={10}>
			{isOpen && <TravelDetailModal isOpen={isOpen} onClose={onClose} itemId={itemId} />}
			{products?.map((item) => (
				<ItemBox key={item.idx}>
					<Card maxW="sm" variant="unstyled" cursor="pointer" className="aaa">
						<CardBody>
							<Badge ml="1" colorScheme="green">
								{item.spaceCategory}
							</Badge>
							<Image src={item.mainImage} alt="여행 상품" borderRadius="lg" />
							<Stack mt="6" spacing="4">
								<Heading size="md">{item.name}</Heading>
								<Text>{item.description}</Text>
								<Text>상품 코드 {item.idx}</Text>
								<Text color="blue.600" fontSize="2xl">
									{item.price.toLocaleString()} 원
								</Text>
							</Stack>
						</CardBody>
						<CardFooter>
							<Button variant="solid" colorScheme="blue" onClick={() => ReservationsClick(item.idx)}>
								예약하기
							</Button>
							<Button
								variant="solid"
								colorScheme="blue"
								onClick={() => {
									setItemId(item.idx);
									onOpen();
								}}
							>
								자세히 보기
							</Button>
						</CardFooter>
					</Card>
				</ItemBox>
			))}
		</SimpleGrid>
	);
}
