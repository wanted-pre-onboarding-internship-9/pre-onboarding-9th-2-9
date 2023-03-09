import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<Box>
			<Header />
			<Box paddingTop="28" display="flex" flexDirection="column" paddingBottom="30" minHeight="100vh">
				{children}
			</Box>
			<Footer />
		</Box>
	);
}

export default Layout;
