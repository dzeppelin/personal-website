import React from 'react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import withNavigation from 'components/withNavigation';
import 'components/styles/footer.css';

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
				<Link to={item.href} className={`${item.activeTextBlack} mx-1`}>
					{item.name}
				</Link>
			</li>
		);
	});

	return (
		<footer className='mb-5'>
			<ul className='flex flex-row flex-wrap items-center justify-center text-gray-500'>
				{mapNav}
			</ul>
		</footer>
	);
};

export default withNavigation(Footer);
