import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';

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
