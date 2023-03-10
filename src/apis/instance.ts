import axios from 'axios';

const baseURL =
	'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230309T094956Z&X-Amz-Expires=86400&X-Amz-Signature=060b50945d0a1af46996c8fa990c2425ebc551d827ed135aaff9b64ca411ee3d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject';

const instance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
