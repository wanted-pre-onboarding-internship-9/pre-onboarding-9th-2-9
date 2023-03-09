import { Flex, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react';

interface PriceType {
	priceValue: PriceValueType;
	onChangeValue: (min: number, max: number) => void;
}

interface PriceValueType {
	min: number;
	max: number;
}
function PriceRange(props: PriceType) {
	const { priceValue, onChangeValue } = props;
	return (
		<Flex width="300px" direction="column">
			<div>가격</div>
			<span>
				{priceValue.min}원&nbsp;~ &nbsp;{priceValue.max}원
			</span>
			<RangeSlider
				onChangeEnd={(val) => onChangeValue(val[0], val[1])}
				defaultValue={[0, 30000]}
				min={0}
				max={30000}
				step={1000}
			>
				<RangeSliderTrack bg="green.100">
					<RangeSliderFilledTrack bg="green.300" />
				</RangeSliderTrack>
				<RangeSliderThumb boxSize={6} index={0} />
				<RangeSliderThumb boxSize={6} index={1} />
			</RangeSlider>
		</Flex>
	);
}
export default PriceRange;
