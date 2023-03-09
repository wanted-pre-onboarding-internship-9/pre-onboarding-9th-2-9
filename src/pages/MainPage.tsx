import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import ProductFilter from '../components/main/ProductFilter';
import ProductList from '../components/main/ProductList';

function MainPage() {
	const queryClient = new QueryClient();

	return (
		<div>
			<h1>상품 목록</h1>
			<QueryClientProvider client={queryClient}>
				<ProductFilter />
				<ProductList />
			</QueryClientProvider>
		</div>
	);
}

export default MainPage;
