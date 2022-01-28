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

				<div className='flex flex-row w-full ring-1 ring-black rounded-lg p-16'>
					<div className='form flex flex-col w-1/2'>
						<p className='mb-2 font-medium'>Header</p>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 mb-2 p-1 px-2 w-full'
						/>
						<p className='mb-2 font-medium'>Body</p>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 p-1 px-2 pb-20 w-full'
						/>
						<div className='flex flex-row justify-items-start mt-4'>
							<button className='ring-2 ring-black px-5 py-1 rounded-full hover:shadow-lg'>
								Send
							</button>
						</div>
					</div>
					<div className='contacts w-1/2 flex flex-col mt-2'>
						<ul className='flex flex-col contacts items-center contact-links ml-10'>
							<li>
								<a href=''>My Blog</a>
								<img src='hashnode.png' alt='hashnode logo' />
							</li>
							<li>
								<a href=''>Github</a>
								<img src='github.png' alt='github logo' />
							</li>
							<li>
								<a href=''>Email</a>
								<img src='email.jpg' alt='email icon' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
