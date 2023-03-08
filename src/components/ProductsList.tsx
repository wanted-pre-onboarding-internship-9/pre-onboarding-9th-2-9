import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
	Box,
	Grid,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Select,
} from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import instance from '../apis/instance';
import Product from './Product';

function ProductsList() {
	const { data } = useQuery<AxiosResponse, AxiosError>('goods', () => instance.get(''));
	const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);
	const [selectedRegion, setSelectedRegion] = useState<string>('');
	const regions: string[] = data?.data.map((product: IProduct) => product.spaceCategory);
	const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

	return (
		<>
			<Box>
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
					<RangeSliderThumb index={0} bgColor="blue.400" />
					<RangeSliderThumb index={1} bgColor="blue.400" />
				</RangeSlider>
				<Select
					placeholder="지역을 선택해주세요."
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
			</Box>
			<Grid gap={30} templateColumns="repeat(4, 1fr)">
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
		</>
	);
}

export default ProductsList;
