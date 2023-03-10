import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import instance from '../apis/instance';

function useGetProducts() {
	const patch = () => instance.get('');
	return useQuery<AxiosResponse, AxiosError>(['products'], patch, {
		refetchOnWindowFocus: false,
	});
}

export default useGetProducts;
