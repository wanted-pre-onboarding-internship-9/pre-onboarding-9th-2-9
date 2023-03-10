import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import instance from '../apis/instance';

function useGetProducts(selectedRegion: string[], priceRange: number[]) {
	const getProductResult = async () => instance.get('').then((response) => response.data);

	const { data, isLoading } = useQuery<IProduct[], AxiosError, IGetProducts>(['products'], () => getProductResult(), {
		refetchOnWindowFocus: false,
		select: (response) => {
			const filterdProducts = response.filter(
				(product: IProduct) =>
					(selectedRegion?.includes(product.spaceCategory) || selectedRegion?.length === 0) &&
					priceRange[0] <= product.price &&
					product.price <= priceRange[1]
			);
			const prices = response.map((product: IProduct) => product.price);
			const minPrice = Math.min(...prices);
			const maxPrice = Math.max(...prices);
			const regions: string[] = response.map((product: IProduct) => product.spaceCategory);
			const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

			return { products: filterdProducts, regions: dedupRegions, priceRange: [minPrice, maxPrice] };
		},
	});

	return { products: data?.products, regions: data?.regions, priceRange: data?.priceRange, isLoading };
}

export default useGetProducts;
