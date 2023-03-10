import { Box, Flex } from '@chakra-ui/react';
import CheckBoxes from '../common/CheckBoxes';
import Slider from '../common/Slider';

function ProductsFilter(props: IProductsFilterProps) {
	const { priceRange, selectedPriceRange, setSelectedPriceRange, setSelectedRegion, regions } = props;

	return (
		<Box width="full">
			<Flex gap="10" direction="column" marginTop="5">
				<Slider
					name="가격대별"
					selectedRange={selectedPriceRange}
					setSelectedRange={setSelectedPriceRange}
					range={priceRange}
				/>
				<CheckBoxes name="지역별" items={regions || []} setSelectedItem={setSelectedRegion} />
			</Flex>
		</Box>
	);
}

export default ProductsFilter;
