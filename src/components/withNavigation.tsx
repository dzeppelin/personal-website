import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

const withNavigation: FC = ({ Component }) => {
	type Navigation = {
		id: number
		name: string
		href: string
		activeTextBlack: string
	}

	const { pathname } = useLocation()
	const currentPage = pathname.split('/')[1]

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
			href: '/portfolio',
			activeTextBlack: currentPage === 'portfolio' ? 'text-black' : '',
		},
		{
			id: 3,
			name: 'Blog',
			href: '/blog',
			activeTextBlack: currentPage === 'blog' ? 'text-black' : '',
		},
		{
			id: 4,
			name: 'Contacts',
			href: 'contacts',
			activeTextBlack: currentPage === 'contacts' ? 'text-black' : '',
		},
	]
	return <Component {...props} navigation={navigation} />
}

export default withNavigation
