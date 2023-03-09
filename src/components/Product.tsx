import React from 'react';
import {
	Box,
	Button,
	Image,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Modal,
	useDisclosure,
} from '@chakra-ui/react';

function Product({
	idx,
	name,
	mainImage,
	price,
	spaceCategory,
	description,
	maximumPurchases,
	registrationDate,
	isView,
}: IProductProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const onReservation = (product: IProduct) => {
		let reservations = JSON.parse(localStorage.getItem('reservations') as string);

		if (reservations.map((reservation: IReservation) => reservation.idx).includes(product.idx)) {
			reservations = reservations.map((reservation: IReservation) =>
				reservation.idx === product.idx ? { ...reservation, count: reservation.count + 1 } : reservation
			);
		} else {
			reservations = [...reservations, { ...product, count: 1 }];
		}
		localStorage.setItem('reservations', JSON.stringify(reservations));
	};

	return (
		<>
			<Box onClick={() => onOpen()} cursor="pointer" hidden={!isView}>
				<Box>{idx}</Box>
				<Box>{name}</Box>
				<Box>
					<Image src={mainImage} alt={name} />
				</Box>
				<Box>{price}</Box>
				<Box>{spaceCategory}</Box>
				<Button
					bgColor="blue.400"
					color="white"
					onClick={() =>
						onReservation({
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
			</Box>
			{isOpen ? (
				<Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{`${idx}. ${name}`}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Box>
								<Image src={mainImage} alt={name} />
							</Box>
							<Box>{description}</Box>
							<Box>{spaceCategory}</Box>
							<Box>{price}</Box>
							<Box>{maximumPurchases}</Box>
							<Box>{registrationDate}</Box>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : null}
		</>
	);
}

export default React.memo(Product);
