import { useEffect } from 'react';
import ProductsList from '../components/main/ProductsList';

function Main() {
	useEffect(() => {
		const storage = localStorage.getItem('reservations');
		if (!storage) localStorage.setItem('reservations', JSON.stringify([]));
	}, []);

	return <ProductsList />;
}
export default Main;
