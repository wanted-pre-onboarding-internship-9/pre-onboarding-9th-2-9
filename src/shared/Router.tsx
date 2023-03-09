import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import Main from '../pages/Main';
import Reservations from '../pages/Reservations';

function router() {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Navigate to="/main" />} />
				<Route path="main" element={<Main />} />
				<Route path="reservations" element={<Reservations />} />
			</Route>
		</Routes>
	);
}
export default router;
