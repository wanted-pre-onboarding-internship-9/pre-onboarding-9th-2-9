import { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import ProductsList from '../components/main/ProductsList';
import ProductsFilter from '../components/main/ProductsFilter';
import useGetProducts from '../hooks/useGetProducts';

function Main() {
	const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([0, 0]);
	const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
	const { products, regions, priceRange, isLoading } = useGetProducts(selectedRegion, selectedPriceRange);

	useEffect(() => {
		if (priceRange) setSelectedPriceRange(priceRange);
	}, [priceRange]);

	useEffect(() => {
		const storage = localStorage.getItem('reservations');
		if (!storage) localStorage.setItem('reservations', JSON.stringify([]));
	}, []);

	if (isLoading || !products) return <Spinner />;

	return (
		<Box width="80%" marginX="auto">
			<ProductsFilter
				selectedPriceRange={selectedPriceRange}
				priceRange={priceRange || [0, 0]}
				setSelectedPriceRange={setSelectedPriceRange}
				setSelectedRegion={setSelectedRegion}
				regions={regions}
			/>
			{products && <ProductsList products={products} />}
		</Box>
	);
}
export default Main;
