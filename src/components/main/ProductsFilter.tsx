import {
	Box,
	Checkbox,
	Flex,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
} from '@chakra-ui/react';
import { convertUnitToWon } from '../../commons/utils';
import { regions } from '../../constant/constant';

function ProductsFilter(props: IProductsFilterProps) {
	const { priceRange, setPriceRange, setSelectedRegion } = props;

	const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.checked) {
			setSelectedRegion((prev: string[]) => prev.filter((region) => region !== event.target.value));
		} else {
			setSelectedRegion((prev: string[]) => [...prev, event.target.value]);
		}
	};

	return (
		<Box width="full">
			<Flex gap="10" direction="column" marginTop="5">
				<Flex maxWidth="lg" gap="5" alignItems="center" justifyContent="space-around">
					<Box whiteSpace="nowrap" letterSpacing="tighter" fontSize="lg" fontWeight="bold">
						가격대별
					</Box>
					<RangeSlider
						// eslint-disable-next-line
						aria-label={['min', 'max']}
						colorScheme="blue"
						defaultValue={[0, 30000]}
						min={0}
						max={30000}
						step={1000}
						value={priceRange}
						onChange={(range) => setPriceRange(() => range)}
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
									{convertUnitToWon(priceRange[0])}
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
									{convertUnitToWon(priceRange[1])}
								</Box>
							</Box>
						</RangeSliderThumb>
					</RangeSlider>
				</Flex>
				<Flex maxWidth="lg" gap="5" alignItems="center" whiteSpace="nowrap">
					<Box letterSpacing="tighter" fontSize="lg" fontWeight="bold">
						지역별
					</Box>

					{regions.map((region) => (
						<Checkbox key={region} value={region} onChange={(e) => handleCheck(e)}>
							{region}
						</Checkbox>
					))}
				</Flex>
			</Flex>
		</Box>
	);
}

export default ProductsFilter;
