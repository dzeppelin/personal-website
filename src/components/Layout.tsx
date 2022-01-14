import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import withNavigation from './withNavigation'

const Layout: FC = () => {
	return (
		<>
			{withNavigation(Navbar)}
			<Outlet />
			{withNavigation(Footer)}
		</>
	)
}

export default Layout
