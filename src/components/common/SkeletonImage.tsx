import styled from '@emotion/styled';
import { Flex, Image, Spinner } from '@chakra-ui/react';
import { useState } from 'react';

const StyledImage = styled(Image)`
	transition: 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`;

function SkeletonImage({ src, alt, borderRadius = 'none' }: { src: string; alt: string; borderRadius?: string }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	if (!src) {
		return (
			<Flex width="full" height="100%" alignItems="center" justifyContent="center">
				<Spinner />
			</Flex>
		);
	}
	return (
		<>
			{isLoading && (
				<Flex width="full" height="100%" alignItems="center" justifyContent="center">
					<Spinner />
				</Flex>
			)}
			<StyledImage
				src={src}
				alt={alt}
				width="full"
				objectFit="cover"
				borderRadius={borderRadius}
				onLoad={() => setIsLoading(false)}
			/>
		</>
	);
}

export default SkeletonImage;
