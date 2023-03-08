import React from 'react';
import {
    useDisclosure,
} from '@chakra-ui/react'
import { ITravelProduct } from '../dto/productDTO'
import TravelModal from './TravelModal';

type ProductProps = {
    product: ITravelProduct
}

function TravelCard({ product }: ProductProps) {
    const { idx, name, mainImage, price, spaceCategory } = product;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const openModalHandler = () => {
        onOpen();
    }

    return (
        <div>
            <div>
                <TravelModal isOpen={isOpen} onClose={onClose} idx={idx} />
            </div>
            <div>idx : {idx}</div>
            <div>name : {name}</div>
            <div><img src={mainImage} alt={`product_main_image_${idx}`} /></div>
            <div>price : {price}</div>
            <div>spaceCategory : {spaceCategory}</div>
            <div>
                <button type='button' onClick={() => alert("예약버튼")}>예약하기</button>
                <button type='button' onClick={openModalHandler}>상세정보</button>
            </div>
        </div>
    );
};

export default TravelCard;