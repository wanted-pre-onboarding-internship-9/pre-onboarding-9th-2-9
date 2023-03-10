import { Grid } from '@chakra-ui/react';
import Product from './Product';

function ProductsList({ productList }: { productList: IProduct[] }) {
	return (
		<Grid
			gap={30}
			templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
			paddingTop="10"
		>
			{productList.length > 0 ? (
				<>
					{productList.map((product: IProduct) => (
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
				</>
			) : (
				<>상품이 없습니다.</>
			)}
		</Grid>
	);
}

export default ProductsList;
