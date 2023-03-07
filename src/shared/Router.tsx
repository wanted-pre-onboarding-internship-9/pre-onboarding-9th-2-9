import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Main from '../pages/Main';
import Reservations from '../pages/Reservations';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="main" element={<Main />} />
			<Route path="reservations" element={<Reservations />} />
		</Route>
	)
);
export default router;
