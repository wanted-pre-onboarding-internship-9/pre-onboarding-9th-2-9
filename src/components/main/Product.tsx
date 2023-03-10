import React from 'react';
import {
	Box,
	Button,
	Image,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Modal,
	useDisclosure,
	Flex,
	GridItem,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { convertUnitToWon } from '../../commons/utils';

const StyledImage = styled(Image)`
	transition: 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`;

function Product(props: IProduct) {
	const { idx, name, mainImage, price, spaceCategory, description, maximumPurchases, registrationDate } = props;

	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleReservation = (product: IProduct) => {
		let reservations = JSON.parse(localStorage.getItem('reservations') as string);

		if (reservations.map((reservation: IReservation) => reservation.idx).includes(product.idx)) {
			reservations = reservations.map((reservation: IReservation) =>
				reservation.idx === product.idx ? { ...reservation, count: reservation.count + 1 } : reservation
			);
		} else {
			reservations = [...reservations, { ...product, count: 1 }];
		}
		localStorage.setItem('reservations', JSON.stringify(reservations));

		window.alert('예약되었습니다.');
	};

	return (
		<>
			<GridItem boxShadow="2xl" borderRadius="lg" overflow="hidden" gap="2" paddingBottom="4" width="100%">
				<Flex direction="column" justifyContent="space-between" height="100%">
					<Box overflow="hidden">
						<StyledImage src={mainImage} alt={name} width="full" transition="ease-in-out" objectFit="cover" />
					</Box>
					<Box padding="5">
						<Box fontWeight="bold">{spaceCategory}</Box>
						<Box fontWeight="bold" fontSize="lg" letterSpacing="tighter">
							{name}
						</Box>
						<Box fontSize="sm" color="gray.600" letterSpacing="tighter">{`상품번호 : ${idx}`}</Box>
						<Box fontWeight="bold" fontSize="2xl" letterSpacing="tight" marginY="2">
							{convertUnitToWon(price)}
						</Box>
					</Box>
					<Flex paddingX="3" justifyContent="space-between" marginTop="auto">
						<Button
							bgColor="blue.400"
							_hover={{ bg: 'blue.300' }}
							color="white"
							boxShadow="2xl"
							onClick={() =>
								handleReservation({
									idx,
									name,
									mainImage,
									price,
									spaceCategory,
									description,
									maximumPurchases,
									registrationDate,
								})
							}
						>
							예약하기
						</Button>
						<Button bgColor="blue.400" _hover={{ bg: 'blue.300' }} color="white" onClick={() => onOpen()}>
							상세보기
						</Button>
					</Flex>
				</Flex>
			</GridItem>
			{isOpen ? (
				<Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton />
						<ModalBody paddingTop="10">
							<Flex direction="column">
								<Box overflow="hidden" margin="auto" borderRadius="xl">
									<StyledImage
										src={mainImage}
										alt={name}
										width="full"
										transition="ease-in-out"
										objectFit="cover"
										w="300px"
										h="300px"
										borderRadius="xl"
									/>
								</Box>
								<Box padding="5">
									<Box fontWeight="bold">{spaceCategory}</Box>
									<Box fontWeight="bold" fontSize="lg" letterSpacing="tighter">
										{name}
									</Box>
									<Box fontSize="sm" color="gray.600" letterSpacing="tighter">{`상품번호 : ${idx}`}</Box>
									<Box fontWeight="bold" fontSize="2xl" letterSpacing="tight" marginY="2">
										{convertUnitToWon(price)}
									</Box>
									<Flex fontSize="lg" color="gray.600" letterSpacing="tighter" gap="1" marginY="2">
										<Box display="inline-block" fontWeight="bold">
											구매가능 갯수
										</Box>
										<Box display="inline-block">{maximumPurchases}개</Box>
									</Flex>
									<Box fontSize="sm" color="gray.600" letterSpacing="tighter">
										{`등록기간 ${registrationDate}`}
									</Box>
									<Box fontSize="sm" color="gray.600" letterSpacing="tighter">
										{description}
									</Box>
								</Box>
							</Flex>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								닫기
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : null}
		</>
	);
}

export default React.memo(Product);
