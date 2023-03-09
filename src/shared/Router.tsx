import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import Reservations from '../pages/Reservations';

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Navigate replace to="/main" />} />
			<Route path="*" element={<Navigate replace to="/" />} />
			<Route path="main" element={<MainPage />} />
			<Route path="reservations" element={<Reservations />} />
		</Route>
	)
);
export default Router;
