import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import travelProductsApis from '../apis/travelProducts';
import { ITravelProduct, IPrice, ISpace, IFilter } from '../dto/productDTO';
import TravelCard from '../commons/TravelCard';

function Main() {

	const getTravelProducts = async () => {
		const result = await travelProductsApis.getTravelProductsAX();
		return result.data;
	};

	const response = useQuery(["getTravelProducts"], getTravelProducts);

	useEffect(() => {
		console.log(response);

	}, [response])

	const priceArr: IPrice[] = [
		{ key: 1, startPrice: 0, endPrice: 5000 },
		{ key: 2, startPrice: 5000, endPrice: 10000 },
		{ key: 3, startPrice: 10000, endPrice: 15000 },
		{ key: 4, startPrice: 15000, endPrice: 20000 },
		{ key: 5, startPrice: 20000, endPrice: 25000 },
		{ key: 6, startPrice: 25000, endPrice: 30000 },
	];

	const spaceArr: ISpace[] = [
		{ key: 1, space: '서울' },
		{ key: 2, space: '부산' },
		{ key: 3, space: '대구' },
		{ key: 4, space: '인천' },
		{ key: 5, space: '광주' },
		{ key: 6, space: '대전' },
		{ key: 7, space: '울산' },
		{ key: 8, space: '세종' },
		{ key: 9, space: '경기' },
		{ key: 10, space: '강원' },
		{ key: 11, space: '충북' },
		{ key: 12, space: '충남' },
		{ key: 13, space: '전북' },
		{ key: 14, space: '전남' },
		{ key: 15, space: '경북' },
		{ key: 16, space: '경남' },
		{ key: 17, space: '제주' },
	];

	const [filter, setFilter] = useState<IFilter>({
		price: -1,
		space: ""
	});

	const filterHandle = (name: string, value: number | string) => {
		setFilter({ ...filter, [name]: value });
	}

	return (
		<div>
			<div>
				가격 :
				<select name="price" onChange={event => filterHandle(event.target.name, Number(event.target.value))}>
					<option value="-1">전체</option>
					{priceArr.map((price) => (
						<option value={price.endPrice} key={price.key}>
							{price.startPrice}~{price.endPrice}
						</option>
					))}
				</select>
				지역 :
				<select name="space" onChange={event => filterHandle(event.target.name, event.target.value)}>
					<option value="">전체</option>
					{spaceArr.map((space) => (
						<option value={space.space} key={space.key}>
							{space.space}
						</option>
					))}
				</select>
			</div>
			<div>
				{filter.price === -1 && filter.space === "" &&
					response.data?.map((product: ITravelProduct) => (
						<TravelCard key={product.idx} product={product} />
					))
				}
				{
					filter.price !== -1 && filter.space === "" &&
					response.data?.filter((item: ITravelProduct) => item.price >= filter.price - 5000 && item.price <= filter.price)
						.map((product: ITravelProduct) => (
							<TravelCard key={product.idx} product={product} />
						))
				}
				{
					filter.price === -1 && filter.space !== "" &&
					response.data?.filter((item: ITravelProduct) => item.spaceCategory === filter.space)
						.map((product: ITravelProduct) => (
							<TravelCard key={product.idx} product={product} />
						))
				}

				{
					filter.price !== -1 && filter.space !== "" &&
					response.data?.filter((item: ITravelProduct) => item.price >= filter.price - 5000 && item.price <= filter.price)
						.filter((item: ITravelProduct) => item.spaceCategory === filter.space)
						.map((product: ITravelProduct) => (
							<TravelCard key={product.idx} product={product} />
						))
				}
			</div>
		</div>
	);
}

export default Main;
