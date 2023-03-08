import axios from 'axios';

export const instance = axios.create({
	baseURL: '/dummy',
});

export const DataAPI = {
	getData: () => instance.get(`/mock_data.json`),
};
