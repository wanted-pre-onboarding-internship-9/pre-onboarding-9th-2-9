import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import router from './shared/Router';

const qeryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<QueryClientProvider client={qeryClient}>
		<ReactQueryDevtools />
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</QueryClientProvider>
);
