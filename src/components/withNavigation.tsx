import React from 'react';
import { useLocation } from 'react-router-dom';

const withNavigation = (Component: any) => (props: any) => {
	type Navigation = {
		id: number;
		name: string;
		href: string;
		activeTextBlack: string;
	};

	const { pathname } = useLocation();
	const currentPage = pathname.split('/')[1];

	const navigation: Navigation[] = [
		{
			id: 1,
			name: 'Home',
			href: '/',
			activeTextBlack: currentPage === '' ? 'text-black' : '',
		},
		{
			id: 2,
			name: 'Portfolio',
			href: '',
			activeTextBlack: currentPage === 'portfolio' ? 'text-black' : '',
		},
	];

	return <Component {...props} navigation={navigation} />;
};

export default withNavigation;
