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

	const regions: string[] = data?.data.map((product: IProduct) => product.spaceCategory);
	const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

	const priceArr: number[] = [];
	const categoryArr: string[] = [];

	data?.data.forEach((obj: IProduct) => {
		priceArr.push(obj.price);
		categoryArr.push(obj.spaceCategory);
	});
	const minValue = Math.min.apply(null, priceArr);
	const maxValue = Math.max.apply(null, priceArr);
	const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);

	const productList = data?.data.filter((el: IProduct) => {
		if (selectedRegion === '전체') return priceRange[0] <= el.price && priceRange[1] >= el.price;
		return selectedRegion === el.spaceCategory && priceRange[0] <= el.price && priceRange[1] >= el.price;
	});

	if (isLoading || !data) return <Spinner />;
	if (isError) return <div>Error...</div>;
	return (
		<Box width="80%" marginX="auto">
			<ProductsFilter
				minValue={minValue}
				maxValue={maxValue}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
				selectedRegion={selectedRegion}
				setSelectedRegion={setSelectedRegion}
				dedupRegions={dedupRegions}
			/>
			<ProductsList productList={productList} />
		</Box>
	);
}
export default Main;
