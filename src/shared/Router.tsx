import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Reservations from '../pages/Reservations';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
			<Route path="*" element={<Navigate replace to="/" />} />
			<Route path="main" element={<Main />} />
			<Route path="reservations" element={<Reservations />} />
		</Route>
	)
);
export default router;
