import React, { ChangeEvent, useState } from 'react';
import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Select,
	Text,
	Flex,
} from '@chakra-ui/react';

interface Filters {
	priceRange: number[] | [0, 30000];
	spaceCategory: string | null;
}

function ProductFilter(): JSX.Element {
	const [filters, setFilters] = useState<Filters>({
		priceRange: [0, 30000],
		spaceCategory: null,
	});

	const handleSetPriceRange = (value: number[]) => {
		setFilters({ ...filters, priceRange: [value[0], value[1]] });
	};

	const handleSetSpaceCategory = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setFilters({ ...filters, spaceCategory: value });
	};

	return (
		<Flex flexDir="row">
			<Flex flexDir="column" w="50%">
				<RangeSlider step={1000} min={0} max={30000} defaultValue={[0, 30000]} onChange={handleSetPriceRange}>
					<RangeSliderTrack>
						<RangeSliderFilledTrack />
					</RangeSliderTrack>
					<RangeSliderThumb index={0}>{filters.priceRange[0]}</RangeSliderThumb>
					<RangeSliderThumb index={1}>{filters.priceRange[1]}</RangeSliderThumb>
				</RangeSlider>
				<Flex justify="space-between" flexDir="row">
					<Text>0</Text>
					<Text>30000</Text>
				</Flex>
			</Flex>
			<Select onChange={handleSetSpaceCategory} w="50%" placeholder="지역 선택">
				<option value="전체">전체</option>
				<option value="서울">서울</option>
				<option value="부산">부산</option>
				<option value="대구">대구</option>
				<option value="강원">강원</option>
				<option value="제주">제주</option>
			</Select>
		</Flex>
	);
}

export default ProductFilter;
