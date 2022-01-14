import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

/* Website pages */
import Home from 'components/pages/Home';
import Blog from 'components/pages/Blog';
import Portfolio from 'components/pages/Portfolio';
import Contacts from 'components/pages/Contacts';
import NoPage from 'components/pages/NoPage';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='portfolio' element={<Portfolio />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
