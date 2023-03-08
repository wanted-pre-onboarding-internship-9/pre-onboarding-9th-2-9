import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// instance.interceptors.response.use(function (response) {
// 	return response;
// }, function (error) {
// 	switch (error.response.data.statusCode) {
// 		case 400:
// 			alert(error.response.data.message);
// 			break;
// 		case 401:
// 			alert("로그인 실패");
// 			break;
// 		case 404:
// 			alert("페이지 없음");
// 			break;
// 		default:
// 			break;
// 	}

// 	return Promise.reject(error);
// });

export default instance;
