import { Box, Button } from '@chakra-ui/react';

function Toast({ text, isConfirm = false, isError = false }: { text: string; isConfirm?: boolean; isError?: boolean }) {
	return (
		<Box
			position="relative"
			color="white"
			px="5"
			py="8"
			pb="20"
			borderRadius="lg"
			bgColor={isError ? `red.400` : `green.400`}
		>
			<Box fontWeight="bold" letterSpacing="tighter">
				{text}
			</Box>
			<Box position="absolute" right="3" bottom="2">
				{isConfirm ? (
					<Button
						color="white"
						bgColor="transparent"
						border="2px"
						borderRadius="md"
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
