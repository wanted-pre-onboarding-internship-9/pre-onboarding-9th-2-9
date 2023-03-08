import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<ChakraProvider>
			<Outlet />
		</ChakraProvider>
	);
}

export default App;
