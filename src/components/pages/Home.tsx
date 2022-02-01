import React from 'react';
import 'styles/pages/home.css';

const Home = () => {
	return (
		<>
			{/* Main Card */}
			<div className='flex flex-col ring-1 ring-gray-500 rounded-lg p-12 shadow-lg text-gray-500'>
				<div className='main-card flex flex-row justify-between items-center '>
					<div className='L'>
						<h1 className='text-xl sm:text-2xl font-bold tracking-tight text-black w-full sm:w-10'>
							Talapov Abulkhair
						</h1>
						<p className='mt-3 mb-4 w-full sm:w-56'>
							I am fullstack web developer and student at Nazarbayev University,
							currently studying on foundation year.
						</p>
						<a href='mailto:abzh423@protonmail.com' target='_blank' rel='noreferrer'>
							<button className='p-1 px-3 rounded-full hover:shadow-lg text-black ring-2 ring-black'>
								Work with Me
							</button>
						</a>
					</div>
					<div className='R flex flex-col justify-center items-center'>
						<img
							src='pp.jpg'
							alt='profile picture'
							className='hidden sm:block sm:h-44 md:h-32 rounded-full'
						/>
						<div className='mt-3 mb-1 hidden md:block'>
							<p>
								<span className='text-black font-medium not-italic'>Address: </span>
								Almaty, Kazakstan
							</p>
							<p>
								<span className='text-black font-medium not-italic'>Email: </span>
								abzh423@protonmail.com
							</p>
							<ul className='flex flex-row contacts contacts'>
								<li className='text-black font-medium'>Links:</li>
								<li className='blog'>
									<a
										href='https://blog.talapov.com/'
										target='_blank'
										rel='noreferrer'
										className='text-gray-500 hover:text-black'
									>
										blog,
									</a>
								</li>
								<li className='github'>
									<a
										href='https://github.com/abzh423'
										target='_blank'
										rel='noreferrer'
										className='text-gray-500 hover:text-black'
									>
										github
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* More About Me */}
			<div>
				<h2 className='text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-4'>
					More about Me
				</h2>
				<p className='text-gray-500'>
					I am software developer based in Kazakstan and I have been building web
					applications for at least a year, which bring any ideas to life. I help to
					convert a vision and idea into something meaningful and useful as a
					software product. Take a look at my portfolio and let&apos;s see if we can
					work together.
				</p>
			</div>
			{/* My Skills */}
			<h2 className='text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-4'>
				My Skills
			</h2>
			<div className='flex flex-col justify-center items-center'>
				<div className='grid grid-cols-1 sm:grid-cols-2'>
					<div className='skill-card'>
						<h2 className='skill-card-h2'>Express</h2>
						<p className='text-center'>
							I use it to setup apis and for the backend in general, including
							deployment.
						</p>
					</div>
					<div className='skill-card'>
						<h2 className='skill-card-h2'>React</h2>
						<p className='text-center'>
							I use it on a regular basis, and think of it as primary frontend library.
						</p>
					</div>
					<div className='skill-card'>
						<h2 className='skill-card-h2'>Next</h2>
						<p className='text-center'>
							I sometimes use it but only when SSR or SSG are required.
						</p>
					</div>
					<div className='skill-card'>
						<h2 className='skill-card-h2'>PostgreSQL</h2>
						<p className='text-center'>
							It&apos;s a powerful relational database. I use it because it scales
							well.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
