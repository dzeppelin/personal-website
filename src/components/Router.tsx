import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

/* Website pages */
import Home from './pages/Home'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
import NoPage from './pages/NoPage'

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
	)
}

export default Router
