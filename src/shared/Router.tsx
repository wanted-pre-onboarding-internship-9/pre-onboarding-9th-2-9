import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import ReservationsPage from '../pages/ReservationsPage';

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Navigate replace to="/main" />} />
			<Route path="*" element={<Navigate replace to="/" />} />
			<Route path="main" element={<MainPage />} />
			<Route path="reservations" element={<ReservationsPage />} />
		</Route>
	)
);
export default Router;
