import { useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import useGetProducts from '../../hooks/useGetProducts';
import Product from './Product';
import ProductsFilter from './ProductsFilter';

function ProductsList() {
	const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);
	const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
	const { products } = useGetProducts(selectedRegion, priceRange);

	return (
		<Box width="80%" marginX="auto">
			<ProductsFilter priceRange={priceRange} setPriceRange={setPriceRange} setSelectedRegion={setSelectedRegion} />
			<Grid
				gap={30}
				templateColumns={[
					'repeat(1, 1fr)',
					'repeat(1, 1fr)',
					'repeat(2, 1fr)',
					'repeat(2, 1fr)',
					'repeat(3, 1fr)',
					'repeat(4, 1fr)',
				]}
				paddingTop="10"
			>
				{products?.map((product: IProduct) => (
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
