import axios from 'axios';

const DATA_URL =
	'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T082734Z&X-Amz-Expires=86400&X-Amz-Signature=c03eb6361c05b60f3b00db55e83481acc38e386bef5b6329304acebd2029eb53&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject';

const instance = axios.create({
	baseURL: DATA_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
