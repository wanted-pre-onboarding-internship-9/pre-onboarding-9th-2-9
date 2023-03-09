import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Box position="fixed" top={0} left={0} w="full" height={20} paddingX={20} bgColor="blue.400" zIndex="banner">
			<Link to="/reservations">장바구니로 가기</Link>
			<Link to="/main">메인으로 가기</Link>
		</Box>
	);
}

export default Header;
