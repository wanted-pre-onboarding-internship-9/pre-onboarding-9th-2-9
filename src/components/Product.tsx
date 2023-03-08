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
