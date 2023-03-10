import React from 'react';
import { Box, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { convertUnitToWon } from '../../commons/utils';

function Slider({ selectedRange, setSelectedRange, range, name }: ISliderProps) {
	return (
		<Flex maxWidth="lg" gap="5" alignItems="center" justifyContent="space-around">
			<Box whiteSpace="nowrap" letterSpacing="tighter" fontSize="lg" fontWeight="bold">
				{name}
			</Box>
			<RangeSlider
				colorScheme="blue"
				min={range[0]}
				max={range[1]}
				step={1000}
				value={selectedRange}
				onChange={(event) => setSelectedRange(() => event)}
			>
				<RangeSliderTrack height={2}>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} bgColor="blue.400" position="relative">
					<Box
						position="absolute"
						bottom="5"
						bgColor="blue.300"
						padding="1"
						paddingX="2"
						borderRadius="md"
						boxShadow="lg"
					>
						<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
							{convertUnitToWon(selectedRange[0])}
						</Box>
					</Box>
				</RangeSliderThumb>
				<RangeSliderThumb index={1} bgColor="blue.400" position="relative">
					<Box
						position="absolute"
						bottom="5"
						bgColor="blue.300"
						padding="1"
						paddingX="2"
						borderRadius="md"
						boxShadow="lg"
					>
						<Box fontSize="sm" letterSpacing="tighter" whiteSpace="nowrap" fontWeight="bold" color="white">
							{convertUnitToWon(selectedRange[1])}
						</Box>
					</Box>
				</RangeSliderThumb>
			</RangeSlider>
		</Flex>
	);
}

export default React.memo(Slider);
