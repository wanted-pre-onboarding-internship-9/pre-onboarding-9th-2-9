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
					(selectedRegion.includes(product.spaceCategory) || selectedRegion.length === 0) &&
					priceRange[0] <= product.price &&
					product.price <= priceRange[1]
			);
			const regions: string[] = response.map((product: IProduct) => product.spaceCategory);
			const dedupRegions: string[] = regions?.filter((element, index) => regions.indexOf(element) === index);

			return { products: filterdProducts, regions: dedupRegions };
		},
	});

	return { products: data?.products, regions: data?.regions, isLoading };
}

export default useGetProducts;
