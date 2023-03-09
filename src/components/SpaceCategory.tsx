import { Select, Flex } from '@chakra-ui/react';

interface SpaceCategoryType {
	onChange: (value: string) => void;
}

const spaceOptions = ['제주', '서울', '강원', '대구', '부산'];

function SpaceCategory(props: SpaceCategoryType) {
	const { onChange } = props;
	return (
		<Flex width="300px" direction="column">
			<Select placeholder="전체" onChange={(e) => onChange(e.target.value)}>
				{spaceOptions.map((item) => (
					<option value={`${item}`} key={item}>
						{item}
					</option>
				))}
			</Select>
		</Flex>
	);
}

export default SpaceCategory;
