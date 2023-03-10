import { Box, Button } from '@chakra-ui/react';

function Toast({
	text,
	isConfirm = false,
	isError = false,
	onClick,
}: {
	text: string;
	isConfirm?: boolean;
	isError?: boolean;
	onClick?: () => void;
}) {
	return (
		<Box position="relative" color="white" p="8" pb="20" borderRadius="lg" bgColor={isError ? `red.400` : `green.400`}>
			<Box fontWeight="bold" letterSpacing="tighter" fontSize="md">
				{text}
			</Box>
			<Box position="absolute" right="3" bottom="2">
				{isConfirm ? (
					<Button
						onClick={onClick}
						color="white"
						bgColor="transparent"
						border="2px"
						borderRadius="md"
						_hover={{ bgColor: 'green.500' }}
						borderColor={isError ? `red.600` : `green.600`}
					>
						확인
					</Button>
				) : null}
			</Box>
		</Box>
	);
}

export default Toast;
