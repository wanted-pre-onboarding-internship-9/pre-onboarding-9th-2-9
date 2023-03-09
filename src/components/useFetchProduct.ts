import axios, { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Travel } from '../type';

export default function useFetchProduct() {
	const fetchProduct = async () => axios.get('/data/mock_data.json');
	return useQuery<AxiosResponse<Travel[]>, AxiosError>(['product'], fetchProduct, {
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
}
