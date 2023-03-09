import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<Box>
			<Header />
			<Box
				paddingTop="28"
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				paddingBottom="30"
			>
				{children}
			</Box>
			<Footer />
		</Box>
	);
}

export default Layout;
