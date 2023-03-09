import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import instance from '../apis/instance';

function useGetProducts() {
	const { data, isLoading } = useQuery<AxiosResponse, AxiosError>('goods', () => instance.get(''), {
		refetchOnWindowFocus: false,
	});

	return { data, isLoading };
}

export default useGetProducts;
