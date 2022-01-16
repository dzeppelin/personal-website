import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div className='main-card flex flex-row justify-between items-center ring-1 ring-gray-500 rounded-lg p-12 shadow-lg text-gray-500'>
				<div className='L w-80'>
					<h1 className='text-2xl font-bold tracking-tight text-black'>
						Talapov Abulkhair
					</h1>
					<p className='mt-3 mb-4'>
						I am fullstack web developer and student at Nazarbayev University,
						currently studying on foundation year.
					</p>
					<Link to='/contacts'>
						<button className='p-1 px-3 rounded-full hover:shadow-lg text-black ring-2 ring-red-200'>
							Work with Me
						</button>
					</Link>
				</div>
				<div className='R'>
					<img src='pp.jpg' alt='profile picture' className='h-40 rounded-full' />
				</div>
			</div>
		</>
	);
};

export default Home;
