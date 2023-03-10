import { Box, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProductsFilter from '../components/main/ProductsFilter';
import ProductsList from '../components/main/ProductsList';
import useGetProducts from '../hooks/useGetProducts';

function Main() {
	useEffect(() => {
		const storage = localStorage.getItem('reservations');
		if (!storage) localStorage.setItem('reservations', JSON.stringify([]));
	}, []);

	const { data, isLoading, isError } = useGetProducts();
	
	const [selectedRegion, setSelectedRegion] = useState<string>('전체');
	const [priceRange, setPriceRange] = useState<number[]>([0, 0]);

	useEffect(() => {
		if (!data) return;
		setPriceRange([data.minPrice, data.maxPrice]);
	}, [data]);

	const productList = data?.productData.filter((el: IProduct) => {
		if (selectedRegion === '전체') return priceRange[0] <= el.price && priceRange[1] >= el.price;
		return selectedRegion === el.spaceCategory && priceRange[0] <= el.price && priceRange[1] >= el.price;
	});

	if (isLoading || !data) return <Spinner />;
	if (isError) return <div>Error...</div>;

	return (
		<Box width="80%" marginX="auto">
			<ProductsFilter
				minValue={data.minPrice}
				maxValue={data.maxPrice}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
				selectedRegion={selectedRegion}
				setSelectedRegion={setSelectedRegion}
				dedupRegions={data.dedupRegions}
			/>
			{productList && <ProductsList productList={productList} />}
		</Box>
	);
}
export default Main;
