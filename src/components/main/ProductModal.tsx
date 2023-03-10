import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
} from '@chakra-ui/react';
import SkeletonImage from '../common/SkeletonImage';
import { convertUnitToWon } from '../../commons/utils';

function ProductModal(props: IProductModal) {
	const {
		idx,
		name,
		mainImage,
		price,
		spaceCategory,
		description,
		maximumPurchases,
		registrationDate,
		isOpen,
		onClose,
	} = props;

	return (
		<Box display="none">
			{isOpen ? (
				<Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton />
						<ModalBody paddingTop="10">
							<Flex direction="column">
								<Box overflow="hidden" margin="auto" borderRadius="xl">
									<SkeletonImage src={mainImage} alt={name} borderRadius="xl" />
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
		</Box>
	);
}
export default ProductModal;
