import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import { Faq, Home, Projects } from './pages';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Atur posisi scroll ke paling atas
	}, [location]);

	return null;
};

const Router = () => {
	return (
		<App>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/faq" element={<Faq />} />
			</Routes>
		</App>
	);
};

export default Router;
