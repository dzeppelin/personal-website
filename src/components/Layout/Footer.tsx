import React from 'react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import withNavigation from 'components/withNavigation';

type Navigation = {
	id: number;
	name: string;
	href: string;
	activeTextBlack: string;
};

type Props = {
	navigation: Navigation[];
};

const Footer: FC<Props> = ({ navigation }) => {
	const mapNav = navigation.map(item => {
		return (
			<li key={item.id}>
				<Link to={item.href} className={`${item.activeTextBlack} mx-3`}>
					{item.name}
				</Link>
			</li>
		);
	});

	return (
		<footer>
			<ul className='flex flex-row flex-wrap items-center justify-center mt-2 text-gray-500'>
				{mapNav}
			</ul>
		</footer>
	);
};

export default withNavigation(Footer);
