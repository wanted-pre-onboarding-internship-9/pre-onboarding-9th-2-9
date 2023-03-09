// import { AxiosError, AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import {
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Travel } from '../../type';
import useFetchProduct from '../useFetchProduct';
import ProductList from './ProductList';

export default function ProductSection() {
	const { data, isLoading, isError } = useFetchProduct();

	const [categoryText, setStecategoryText] = useState('전체');
	const [filterProduct, setFilterProduct] = useState<Travel[]>(() => data?.data || []);
	const [toggle, setToggle] = useState<boolean>(false);
	const [sliderText, setSliderText] = useState<number[]>([0, 0]);

	const categoryArr = data?.data.map((item: Travel) => item.spaceCategory);
	const categoryList = categoryArr?.filter(
		(arr, index, callback) => index === callback.findIndex((item) => item === arr)
	);

	const Sliderhandler = (val: number[]) => {
		setSliderText(val);
		setToggle(true);
	};
	const CategoryHandler = (item: string) => {
		setStecategoryText(item);
		setToggle(true);
	};

	useEffect(() => {
		if (toggle && data) {
			const ddd = data.data.filter((el) => {
				if (categoryText === '전체') {
					return el.spaceCategory && sliderText[0] <= Number(el.price) && sliderText[1] >= Number(el.price);
				}
				return (
					el.spaceCategory === categoryText && sliderText[0] <= Number(el.price) && sliderText[1] >= Number(el.price)
				);
			});
			setFilterProduct(ddd);
		}
		setToggle(false);
	}, [toggle, categoryText, data, sliderText]);

	const priceArr = data?.data.map((item) => Number(item.price));
	const maxValue = priceArr ? Math.max.apply(null, priceArr) : 0;
	const minValue = priceArr ? Math.min.apply(null, priceArr) : 0;

	useEffect(() => {
		if (data) {
			setFilterProduct(data.data);
			const arr = data.data.map((item) => Number(item.price));
			setSliderText([Math.min.apply(null, arr), Math.max.apply(null, arr)]);
		}
	}, [data]);

	if (isLoading || !data) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;
	return (
		<div>
			{/* 카테고리 */}
			<div>
				<Menu>
					<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
						{categoryText}
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => CategoryHandler('전체')}>전체</MenuItem>
						{categoryList?.map((category: string) => (
							<div key={category.toString()}>
								<MenuItem onClick={() => CategoryHandler(category)}>{category}</MenuItem>
							</div>
						))}
					</MenuList>
				</Menu>
			</div>
			{/* 슬라이더 */}
			{sliderText[0].toLocaleString()} 원 ~ {sliderText[1].toLocaleString()} 원
			<div>
				<RangeSlider
					defaultValue={[minValue, maxValue]}
					min={0}
					max={maxValue}
					step={5000}
					onChangeEnd={(val) => Sliderhandler(val)}
				>
					<RangeSliderTrack bg="red.100">
						<RangeSliderFilledTrack bg="tomato" />
					</RangeSliderTrack>
					<RangeSliderThumb boxSize={6} index={0} />
					<RangeSliderThumb boxSize={6} index={1} />
				</RangeSlider>
			</div>
			<ProductList products={filterProduct} />
		</div>
	);
}
