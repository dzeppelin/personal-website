import React from 'react';
import 'styles/pages/contacts.css';

const Contacts = () => {
	return (
		<>
			{/* Credentials */}
			<div>
				<h2 className='text-xl sm:text-2xl font-bold tracking-tight mb-4'>
					Contact Me
				</h2>

				<div className='flex flex-row w-full'>
					<div className='form flex flex-col w-1/2'>
						<p className='mb-3'>Header</p>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 mb-3 p-1 px-2 w-full'
						/>
						<p className='mb-3'>Body</p>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 p-1 px-2 pb-20 w-full'
						/>
						<div className='flex flex-row justify-items-start mt-4'>
							<button className='ring-1 ring-black px-2 py-1 rounded-lg hover:shadow-lg'>
								Send
							</button>
						</div>
					</div>
					<div className='contacts w-1/2'>
						<ul className='flex flex-col contacts justify-center items-center contact-links'>
							<li className='flex flex-row'>
								<img src='hashnode.png' alt='hashnode logo' className='h-10' />
								<a href=''>My Blog</a>
							</li>
							<li>
								<a href=''>Github</a>
							</li>
							<li>
								<a href=''>Email</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
