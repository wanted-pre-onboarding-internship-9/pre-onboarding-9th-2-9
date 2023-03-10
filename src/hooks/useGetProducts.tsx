import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import instance from '../apis/instance';

function useGetProducts() {
	const patch = () => instance.get('');
	return useQuery(['products'], patch, {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		select: (data: AxiosResponse<IProduct[]>) => {
			const regions = data.data.map((item: IProduct) => item.spaceCategory);
			const dedupRegions = regions.filter((element, index) => regions.indexOf(element) === index);
			const priceArr = data.data.map((item: IProduct) => item.price);
			const minPrice = Math.min(...priceArr);
			const maxPrice = Math.max(...priceArr);
			const productData = data.data;
			return { regions, priceArr, dedupRegions, minPrice, maxPrice, productData };
		},
	});
}

export default useGetProducts;
