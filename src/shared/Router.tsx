import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '../App';
import Main from '../pages/Main';
import Reservations from '../pages/Reservations';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Navigate replace to="/main" />} />
			<Route path="*" element={<Navigate replace to="/" />} />
			<Route path="main" element={<Main />} />
			<Route path="reservations" element={<Reservations />} />
		</Route>
	)
);
export default router;
