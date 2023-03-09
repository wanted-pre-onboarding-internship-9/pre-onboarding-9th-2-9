import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import travelProductsApis from '../apis/travelProducts';
import { ITravelProduct } from '../dto/productDTO';

interface IModalProps {
    onClose: () => void;
    isOpen: boolean;
    idx: number;
}

function TravelModal({ onClose, isOpen, idx }: IModalProps) {
    const getTravelProducts = async () => {
        const result = await travelProductsApis.getTravelProductsAX();
        return result.data;
    };

    const response = useQuery(['getTravelProducts'], getTravelProducts);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {response.data
                ?.filter((item: ITravelProduct) => item.idx === idx)
                .map((product: ITravelProduct) => (
                    <div key={product.idx}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{product.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>

                                <div>
                                    <div>idx : {product.idx}</div>
                                    <div>
                                        <img src={product.mainImage} alt={`product_main_image_${product.idx}`} />
                                    </div>
                                    <div>description : {product.description}</div>
                                    <div>price : {product.price}</div>
                                    <div>spaceCategory : {product.spaceCategory}</div>
                                    <div>maximumPurchases : {product.maximumPurchases}</div>
                                    <div>registrationDate : {product.registrationDate}</div>
                                </div>

                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='purple' onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </div>
                ))}
        </Modal >
    );
}

export default TravelModal;
