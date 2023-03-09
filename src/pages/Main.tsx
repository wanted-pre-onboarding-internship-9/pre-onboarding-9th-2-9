import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ProductsList from '../components/ProductsList';

function Main() {
	useEffect(() => {
		const storage = localStorage.getItem('reservations');
		if (!storage) localStorage.setItem('reservations', JSON.stringify([]));
	}, []);

	return (
		<Layout>
			<ProductsList />
		</Layout>
	);
}

export default Main;
