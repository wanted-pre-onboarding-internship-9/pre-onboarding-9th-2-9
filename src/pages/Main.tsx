import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TravelItem from '../components/TravelItem';
import PriceRange from '../components/PriceRange';
import SpaceCategory from '../components/SpaceCategory';

interface DataType {
	idx: number;
	name: string;
	mainImage: string;
	description: string;
	spaceCategory: string;
	price: number;
	maximumPurchases: number;
	registrationDate: string;
}

function Main() {
	const [datas, setData] = useState<DataType[]>();
	const [priceValue, setPriceValue] = useState({ min: 0, max: 30000 });
	const [spaceValue, setSpaceValue] = useState('');

	async function getData() {
		const response = await fetch('');
		const travelData = await response.json();
		setData(travelData);
	}

	useEffect(() => {
		getData();
	}, []);

	const handleSpaceValue = (value: string) => {
		setSpaceValue(value);
	};

	return (
		<ChakraProvider>
			<div>
				<PriceRange
					priceValue={priceValue}
					onChangeValue={(min, max) => {
						setPriceValue({ min, max });
					}}
				/>
				<div>지역:{spaceValue}</div>
				<SpaceCategory onChange={handleSpaceValue} />
				{datas &&
					datas.map((item) => {
						if (item.price >= priceValue.min && item.price <= priceValue.max) {
							if (spaceValue === '전체' || spaceValue === '' || spaceValue === item.spaceCategory) {
								return (
									<TravelItem
										key={item.idx}
										idx={item.idx}
										name={item.name}
										mainImage={item.mainImage}
										price={item.price}
										spaceCategory={item.spaceCategory}
										description={item.description}
										maximumPurchases={item.maximumPurchases}
										registrationDate={item.registrationDate}
									/>
								);
							}
						}
						return <div key={item.idx} />;
					})}
			</div>
		</ChakraProvider>
	);
}

export default Main;
