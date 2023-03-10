import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query/react';
import { RouterProvider } from 'react-router-dom';
import router from './shared/Router';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient}>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</QueryClientProvider>
);
