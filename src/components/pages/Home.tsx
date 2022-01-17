import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			{/* Main Card */}
			<div className='main-card flex flex-row justify-between items-center ring-1 ring-gray-500 rounded-lg p-12 shadow-lg text-gray-500'>
				<div className='L'>
					<h1 className='text-2xl font-bold tracking-tight text-black w-10'>
						Talapov Abulkhair
					</h1>
					<p className='mt-3 mb-4 w-56 italic'>
						I am fullstack web developer and student at Nazarbayev University,
						currently studying on foundation year.
					</p>
					<Link to='/contacts'>
						<button className='p-1 px-3 rounded-full hover:shadow-lg text-black font-medium ring-2 ring-black'>
							Work with Me
						</button>
					</Link>
				</div>
				<div className='R flex flex-col justify-center items-center'>
					<img src='pp.jpg' alt='profile picture' className='h-32 rounded-full' />
					<div className='mt-3 mb-1'>
						<p className='italic'>
							<span className='text-black font-medium not-italic'>Address: </span>
							Almaty, Kazakstan
						</p>
						<p className='italic'>
							<span className='text-black font-medium not-italic'>Phone Number: </span>
							Hidden
						</p>
						<p className='italic'>
							<span className='text-black font-medium not-italic'>Email: </span>
							abzh423@protonmail.com
						</p>
					</div>
				</div>
			</div>
			{/* More About Me */}
			<div>
				<h1 className='text-2xl font-bold tracking-tight mt-10 mb-4'>
					More about Me
				</h1>
				<p className=''>
					I am software developer based in Kazakstan and I have been building web
					applications for at least a year, which bring any ideas to life. I help
					convert a vision and idea into something meaningful and useful as a
					software product. Take a look at my portfolio and let&apos;s see if we can
					work together.
				</p>
				<div className='flex flex-row mt-5'>
					<button className='p-1 px-3 mr-3 ring-2 ring-black hover:shadow-lg rounded-full'>
						Download resume
					</button>
					<Link to='/portfolio'>
						<button className='p-1 px-3 ring-2 ring-black hover:shadow-lg rounded-full'>
							Portfolio
						</button>
					</Link>
				</div>
			</div>
			{/* Skills */}
			<h1 className='text-2xl font-bold tracking-tight mt-10 mb-4'>Skills</h1>
			<div className='grid grid-cols-3 gap-3 items-center justify-center'>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='nodejs.png' alt='logo of node.js' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>Express.js</h2>
					<p className='text-center'>
						I use it to setup apis and for the backend, including deployment.
					</p>
				</div>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='logo192.png' alt='logo of react.js' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>React.js</h2>
					<p className='text-center'>
						I use it on a regular basis, and it&apos;s primary frontend library.
					</p>
				</div>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='nextjs.png' alt='logo of next.js' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>Next.js</h2>
					<p className='text-center'>
						I use it as frontend framework but only when SSR or SSG is required.
					</p>
				</div>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='psql.svg' alt='logo of postgresql' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>PostgreSQL</h2>
					<p className='text-center'>
						It&apos;s a powerful relational database. I use it because it scales well.
					</p>
				</div>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='tailwind.png' alt='logo of tailwindcss' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>TailwindCSS</h2>
					<p className='text-center'>
						Utility-first css framework. I use it for easy api like styling.
					</p>
				</div>
				<div className='w-48 flex flex-col items-center justify-center p-4 ring-1 ring-black shadow-md rounded-lg'>
					<img src='nodejs.png' alt='logo of node.js' className='h-20' />
					<h2 className='text-lg font-medium mt-3 mb-1'>Express.js</h2>
					<p className='text-center'>
						I use it to setup REST apis and for all of the backend, including
						deployment.
					</p>
				</div>
			</div>
		</>
	);
};

export default Home;
