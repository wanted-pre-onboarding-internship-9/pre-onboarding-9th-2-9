import {
	Box,
	Flex,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { convertUnitToWon } from '../../commons/utils';

export default function ProductsFilter(props: IProductProps) {
	const { minValue, maxValue, priceRange, setPriceRange, selectedRegion, setSelectedRegion, dedupRegions } = props;
	return (
		<Box width="full">
			<Flex gap="10">
				<Flex width="full" gap="5" alignItems="center" justifyContent="space-around">
					<Box whiteSpace="nowrap" letterSpacing="tighter" fontSize="lg" fontWeight="bold">
						가격대별
					</Box>
					<RangeSlider
						colorScheme="blue"
						defaultValue={[minValue, maxValue]}
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

				<Flex width="full" maxWidth="lg" gap="5" alignItems="center" whiteSpace="nowrap">
					<Box letterSpacing="tighter" fontSize="lg" fontWeight="bold">
						지역별
					</Box>
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
							{selectedRegion}
						</MenuButton>
						<MenuList>
							<MenuItem onClick={() => setSelectedRegion('전체')}>전체</MenuItem>
							{dedupRegions?.map((category: string) => (
								<MenuItem key={category.toString()} onClick={() => setSelectedRegion(category)}>
									{category}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Box>
	);
}
