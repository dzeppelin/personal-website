import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/layout/Layout';

/* Website pages */
import Home from 'components/pages/Home';
import Portfolio from 'components/pages/Portfolio';
import Contacts from 'components/pages/Contacts';
import NoPage from 'components/pages/NoPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='portfolio' element={<Portfolio />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
