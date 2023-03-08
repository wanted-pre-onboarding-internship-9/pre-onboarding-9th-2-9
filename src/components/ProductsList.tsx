import React from 'react';
import { useQuery } from 'react-query';
import { Box, Grid, Select } from '@chakra-ui/react';
import instance from '../apis/instance';
import Product from './Product';

function ProductsList() {
	const { data } = useQuery('goods', () => instance.get(''));
	const regions: string[] = data?.data.map((product: IProduct) => product.spaceCategory);
	const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

	return (
		<>
			<Box>
				<input type="range" />
				<Select placeholder="지역을 선택해주세요.">
					{data && dedupRegions.map((region) => <option key={region}>{region}</option>)}
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
					/>
				))}
			</Grid>
		</>
	);
}

export default ProductsList;
