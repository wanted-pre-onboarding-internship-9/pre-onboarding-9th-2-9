import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import instance from '../apis/instance';

function useGetProducts(selectedRegion: string[], priceRange: number[]) {
	const getProductResult = async () => instance.get('').then((response) => response.data);

	const { data, isLoading } = useQuery<IProduct[], AxiosError>(['products'], () => getProductResult(), {
		refetchOnWindowFocus: false,
		select: (products) =>
			products.filter(
				(product) =>
					(selectedRegion.includes(product.spaceCategory) || selectedRegion.length === 0) &&
					priceRange[0] <= product.price &&
					product.price <= priceRange[1]
			),
	});

	return { products: data, isLoading };
}

export default useGetProducts;
