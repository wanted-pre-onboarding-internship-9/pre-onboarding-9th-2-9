import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductFilter from '../components/main/ProductFilter';
import ProductList from '../components/main/ProductList';

function MainPage() {
	const queryClient = new QueryClient();

	return (
		<Box p={20}>
			<h1>상품 목록</h1>
			<QueryClientProvider client={queryClient}>
				<ProductFilter />
				<ProductList />
			</QueryClientProvider>
		</Box>
	);
}

export default MainPage;
