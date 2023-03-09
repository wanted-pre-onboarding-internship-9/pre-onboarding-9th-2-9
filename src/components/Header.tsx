import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Flex
			position="fixed"
			top={0}
			left={0}
			w="full"
			height={20}
			paddingX={20}
			zIndex="banner"
			alignItems="center"
			gap="10"
			bgColor="white"
			boxShadow="md"
		>
			<Link to="/main">
				<Heading letterSpacing="tighter">Like A Local</Heading>
			</Link>
			<Link to="/reservations">
				<Heading fontSize="md" letterSpacing="tighter">
					장바구니로 가기
				</Heading>
			</Link>
		</Flex>
	);
}

export default Header;
