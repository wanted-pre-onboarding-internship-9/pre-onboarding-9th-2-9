import { ChakraProvider, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
	return (
		<ChakraProvider>
			<Box>
				<Header />
				<Box paddingTop="28" display="flex" flexDirection="column" paddingBottom="30" minHeight="100vh">
					<Outlet />
				</Box>
				<Footer />
			</Box>
		</ChakraProvider>
	);
}

export default App;
