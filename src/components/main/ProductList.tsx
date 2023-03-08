import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { SimpleGrid } from '@chakra-ui/react';
import ProductItem from './ProductItem';

interface Product {
	id: number;
	idx: number;
	name: string;
	mainImage: string;
	price: number;
	spaceCategory: string;
	description: string;
	maximumPurchases: number;
	registrationDate: string;
}

function ProductList() {
	const { data: productList = [] } = useQuery<Product[]>('productList', async () => {
		const response = await axios.get<Product[]>('/dummy/mock_data.json');
		return response.data;
	});

	return (
		<SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
			{productList.map((product) => (
				<ProductItem key={product.idx} product={product} />
			))}
		</SimpleGrid>
	);
}

export default ProductList;
