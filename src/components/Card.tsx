import { Card, Image, Text, Button, CardBody, CardFooter, Stack, Heading } from '@chakra-ui/react';

interface TravelCardType {
	img: string;
	name: string;
	price: number;
	spaceCategory: string;
	onOpen: () => void;
}

function TravelCard(props: TravelCardType) {
	const { img, name, price, spaceCategory, onOpen } = props;
	return (
		<Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
			<Image objectFit="cover" maxW={{ base: '100%', sm: '300px' }} src={img} alt="상품 사진" />

			<Stack>
				<CardBody>
					<Heading size="md">{name}</Heading>
					<Text py="2">가격: {price}</Text>
					<Text py="2">{spaceCategory}</Text>
				</CardBody>

				<CardFooter>
					<Button colorScheme="whatsapp">예약하기</Button>
					<Button colorScheme="whatsapp" variant="outline" onClick={onOpen}>
						자세히보기
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
}
export default TravelCard;
