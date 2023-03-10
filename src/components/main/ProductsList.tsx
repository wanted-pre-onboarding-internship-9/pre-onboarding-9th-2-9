import { Flex, Grid, Heading } from '@chakra-ui/react';
import Product from './Product';

function ProductsList({ products }: { products: IProduct[] }) {
	return (
		<div>
			{products.length > 0 ? (
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
					{products.map((product: IProduct) => (
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
			) : (
				<Flex justifyContent="center" alignItems="center" minHeight="300px">
					<Heading letterSpacing="tighter" color="gray.700">
						조건에 맞는 상품이 없습니다. ㅠ_ㅠ
					</Heading>
				</Flex>
			)}
		</div>
	);
}

export default ProductsList;
