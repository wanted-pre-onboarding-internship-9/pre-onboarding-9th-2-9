import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
	useEffect(() => {
		const storage = localStorage.getItem('reservations');
		if (!storage) localStorage.setItem('reservations', JSON.stringify([]));
	}, []);

	return (
		<Box>
			<Header />
			<Box paddingTop="28" display="flex" flexDirection="column" paddingBottom="30" minHeight="100vh">
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
}

export default App;
