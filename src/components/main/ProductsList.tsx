import { useState } from 'react';
import {
	Box,
	Flex,
	Grid,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { convertUnitToWon } from '../../commons/utils';
import useGetProducts from '../../hooks/useGetProducts';
import Product from './Product';

function ProductsList() {
	const { data } = useGetProducts();
	const [selectedRegion, setSelectedRegion] = useState<string>('전체');
	const regions: string[] = data?.data.map((product: IProduct) => product.spaceCategory);
	const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

	// 수인
	const priceArr: number[] = [];
	const categoryArr: string[] = [];

	data?.data.forEach((obj: IProduct) => {
		priceArr.push(obj.price);
		categoryArr.push(obj.spaceCategory);
	});
	const maxValue = Math.max.apply(null, priceArr);
	const minValue = Math.min.apply(null, priceArr);
	const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);

	const productList = data?.data.filter((el: IProduct) => {
		if (selectedRegion === '전체') return priceRange[0] <= el.price && priceRange[1] >= el.price;
		return selectedRegion === el.spaceCategory && priceRange[0] <= el.price && priceRange[1] >= el.price;
	});
	return (
		<Box width="80%" marginX="auto">
			<Box width="full">
				<Flex gap="10">
					<Flex width="full" gap="5" alignItems="center" justifyContent="space-around">
						<Box whiteSpace="nowrap" letterSpacing="tighter" fontSize="lg" fontWeight="bold">
							가격대별
						</Box>
						<RangeSlider
							// eslint-disable-next-line
							aria-label={['min', 'max']}
							colorScheme="blue"
							defaultValue={[minValue, maxValue]}
							min={0}
							max={30000}
							step={1000}
							value={priceRange}
							onChange={(range) => setPriceRange(() => range)}
						>
							<RangeSliderTrack height={2}>
								<RangeSliderFilledTrack />
							</RangeSliderTrack>
							<RangeSliderThumb index={0} bgColor="blue.400" position="relative">
								<Box
									position="absolute"
									bottom="5"
									bgColor="blue.300"
									padding="1"
									paddingX="2"
									borderRadius="md"
									boxShadow="lg"
								>
									<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
										{convertUnitToWon(priceRange[0])}
									</Box>
								</Box>
							</RangeSliderThumb>
							<RangeSliderThumb index={1} bgColor="blue.400" position="relative">
								<Box
									position="absolute"
									bottom="5"
									bgColor="blue.300"
									padding="1"
									paddingX="2"
									borderRadius="md"
									boxShadow="lg"
								>
									<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
										{convertUnitToWon(priceRange[1])}
									</Box>
								</Box>
							</RangeSliderThumb>
						</RangeSlider>
					</Flex>
					{/* 지역별 */}
					<Flex width="full" maxWidth="lg" gap="5" alignItems="center" whiteSpace="nowrap">
						<Box letterSpacing="tighter" fontSize="lg" fontWeight="bold">
							지역별
						</Box>
						<Menu>
							<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
								{selectedRegion}
							</MenuButton>
							<MenuList>
								<MenuItem onClick={() => setSelectedRegion('전체')}>전체</MenuItem>
								{dedupRegions?.map((category: string) => (
									<MenuItem key={category.toString()} onClick={() => setSelectedRegion(category)}>
										{category}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Box>
			<Grid
				gap={30}
				templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
				paddingTop="10"
			>
				{productList?.map((product: IProduct) => (
					<Product
						key={product.idx}
						idx={product.idx}
						name={product.name}
						mainImage={product.mainImage}
						price={product.price}
						spaceCategory={product.spaceCategory}
						description={product.description}
						maximumPurchases={product.maximumPurchases}
						registrationDate={product.registrationDate}
					/>
				))}
			</Grid>
		</Box>
	);
}

export default ProductsList;
