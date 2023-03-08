import { Box } from '@chakra-ui/react';
import React from 'react';

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
			{children}
		</Box>
	);
}

export default Layout;
