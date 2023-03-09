import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import instance from '../apis/instance';

function useGetProducts() {
	return useQuery<AxiosResponse, AxiosError>('products', () => instance.get(''), {
		refetchOnWindowFocus: false,
	});
}

export default useGetProducts;
