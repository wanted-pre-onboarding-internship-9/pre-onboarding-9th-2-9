import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
	Box,
	Flex,
	Grid,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Select,
} from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import instance from '../apis/instance';
import { convertUnitToWon } from '../commons/utils';
import Product from './Product';

function ProductsList() {
	const { data } = useQuery<AxiosResponse, AxiosError>('goods', () => instance.get(''));
	const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);
	const [selectedRegion, setSelectedRegion] = useState<string>('');
	const regions: string[] = data?.data.map((product: IProduct) => product.spaceCategory);
	const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

	return (
		<Box width="80%">
			<Box width="80%">
				<Flex width="full" gap="20">
					<Flex width="full" gap="5" alignItems="center" justifyContent="space-around">
						<Box whiteSpace="nowrap" letterSpacing="tighter" fontSize="lg" fontWeight="bold">
							가격대별
						</Box>
						<RangeSlider
							// eslint-disable-next-line
							aria-label={['min', 'max']}
							colorScheme="blue"
							defaultValue={[0, 30000]}
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
								<Box position="absolute" bottom="5" bgColor="blue.300" padding="1" paddingX="2" borderRadius="md">
									<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
										{convertUnitToWon(priceRange[0])}
									</Box>
								</Box>
							</RangeSliderThumb>
							<RangeSliderThumb index={1} bgColor="blue.400" position="relative">
								<Box position="absolute" bottom="5" bgColor="blue.300" padding="1" paddingX="2" borderRadius="md">
									<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
										{convertUnitToWon(priceRange[1])}
									</Box>
								</Box>
							</RangeSliderThumb>
						</RangeSlider>
					</Flex>
					<Flex width="full" gap="5" alignItems="center" whiteSpace="nowrap">
						<Box letterSpacing="tighter" fontSize="lg" fontWeight="bold">
							지역별
						</Box>
						<Select
							placeholder="전체"
							value={selectedRegion}
							onChange={(event) => setSelectedRegion(event.target.value)}
						>
							{data &&
								dedupRegions.map((region) => (
									<option key={region} value={region}>
										{region}
									</option>
								))}
						</Select>
					</Flex>
				</Flex>
			</Box>
			<Grid
				gap={30}
				templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
				paddingTop="10"
			>
				{data?.data.map((product: IProduct) => (
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
						isView={
							(product.spaceCategory === selectedRegion || selectedRegion === '') &&
							priceRange[0] <= product.price &&
							product.price <= priceRange[1]
						}
					/>
				))}
			</Grid>
		</Box>
	);
}

export default ProductsList;
