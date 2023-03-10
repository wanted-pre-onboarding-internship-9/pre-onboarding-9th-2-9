import { Box, Checkbox, Flex } from '@chakra-ui/react';
import React from 'react';

function CheckBoxes({ name, items, setSelectedItem }: ICheckBoxesProps) {
	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.checked) {
			setSelectedItem((prev: string[]) => prev.filter((region) => region !== event.target.value));
		} else {
			setSelectedItem((prev: string[]) => [...prev, event.target.value]);
		}
	};

	return (
		<Flex maxWidth="lg" gap="5" alignItems="center" whiteSpace="nowrap">
			<Box letterSpacing="tighter" fontSize="lg" fontWeight="bold">
				{name}
			</Box>

			{items?.map((item) => (
				<Checkbox key={item} value={item} onChange={(e) => handleCheck(e)}>
					{item}
				</Checkbox>
			))}
		</Flex>
	);
}

export default React.memo(CheckBoxes);
