import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';

const Layout: FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
