import React, { useEffect, useState } from 'react';
import travelProductsApis from '../apis/travelProducts';

function Main() {
	interface ITravelProducts {
		idx: number,
		name: string,
		mainImage: string,
		description: string,
		spaceCategory: string,
		price: number,
		maximumPurchases: number,
		registrationDate: string
	}

	const [travelProducts, setTravelProducts] = useState<ITravelProducts[]>([]);

	const getTravelProductsApis = async () => {
		const result = await travelProductsApis.getTravelProductsAX();
		if (result.status === 200) setTravelProducts(result.data);
	}

	useEffect(() => {
		getTravelProductsApis();
	}, [])

	interface IPrice {
		key: number,
		startPrice: number,
		endPrice: number
	}

	interface ISpace {
		key: number,
		space: string
	}

	const priceArr: IPrice[] = [
		{ key: 1, startPrice: 0, endPrice: 5000 },
		{ key: 2, startPrice: 5000, endPrice: 10000 },
		{ key: 3, startPrice: 10000, endPrice: 15000 },
		{ key: 4, startPrice: 15000, endPrice: 20000 },
		{ key: 5, startPrice: 20000, endPrice: 25000 },
		{ key: 6, startPrice: 25000, endPrice: 30000 }
	]

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
		{ key: 17, space: '제주' }
	]

	return (
		<div>
			<div>
				가격 : <select name="price" onChange={(e) => alert(e.target.value)}>
					<option value="">전체</option>
					{priceArr.map(price => (
						<option value={price.endPrice} key={price.key} >{price.startPrice}~{price.endPrice}</option>
					))}
				</select>
				지역 : <select name="space">
					<option value="">전체</option>
					{spaceArr.map(space => (
						<option value={space.space} key={space.key}>{space.space}</option>
					))}
				</select>
			</div>
			<div>
				{travelProducts.map(product => (
					<div key={product.idx}>
						<div>idx : {product.idx}</div>
						<div>name : {product.name}</div>
						<img src={product.mainImage} alt={`product_main_image_${product.idx}`} />
						<div>price : {product.price}</div>
						<div>spaceCategory : {product.spaceCategory}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Main;
