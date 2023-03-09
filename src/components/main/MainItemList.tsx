import { Button, Select, Stack, Wrap } from '@chakra-ui/react';
import { useState, useCallback, useEffect } from 'react';
import { DataAPI } from '../../apis/instance';
import { DataType, FilteringType } from '../../types/type';
import MainItem from './MainItem';

function MainItemList() {
	const [data, setData] = useState<DataType[]>();
	const [filter, setFilter] = useState<FilteringType>({ region: '', price: '' });

	const getData = () => {
		DataAPI.getData().then((res) => {
			setData(res.data);
		});
	};

	useEffect(() => {
		getData();
	}, [filter]);

	const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>, key: keyof FilteringType) => {
		setFilter({ ...filter, [key]: e.target.value });
	};

	const onClickFiter = useCallback(() => {
		if (!data) return;
		setData(data?.filter((ele) => ele.price.toString() === filter?.price || ele.spaceCategory === filter.region));
	}, [data, filter]);

	return (
		<Wrap spacing="24px" justify="center">
			<Stack>
				<Select placeholder="price" size="md" onChange={(e) => onChangeFilter(e, 'price')}>
					<option value="1000"> 1000</option>
					<option value="10000"> 10000</option>
					<option value="15000"> 15000</option>
					<option value="25000"> 25000</option>
					<option value="30000"> 30000</option>
				</Select>
				<Select placeholder="region" onChange={(e) => onChangeFilter(e, 'region')}>
					<option value="강원">강원</option>
					<option value="대구">대구</option>
					<option value="부산">부산</option>
					<option value="서울">서울</option>
					<option value="제주">제주</option>
				</Select>
				<Button onClick={onClickFiter}>검색</Button>
			</Stack>
			{data?.map((mockData) => (
				<MainItem key={mockData.idx} mockData={mockData} />
			))}
		</Wrap>
	);
}

export default MainItemList;
