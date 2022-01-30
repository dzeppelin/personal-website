import React from 'react';
import 'styles/pages/contacts.css';

const Contacts = () => {
	return (
		<>
			{/* Credentials */}
			<div>
				<h2 className='text-xl sm:text-2xl font-bold tracking-tight mb-4'>
					Fast Email
				</h2>

				<div className='w-full ring-1 ring-black rounded-lg p-12 shadow-lg'>
					<div className='form flex flex-col w-full'>
						<p className='mb-2 font-medium'>Header</p>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 mb-4 p-1 px-2 w-full'
						/>
						<p className='mb-2 font-medium'>Body</p>
						<textarea
							name=''
							id=''
							rows={4}
							className='ring-1 ring-black rounded-lg p-1 px-2'
						></textarea>
						<div className='flex flex-row justify-items-start mt-4'>
							<button className='ring-2 ring-black px-5 py-1 rounded-full hover:shadow-lg'>
								Send
							</button>
						</div>
					</div>
				</div>
				<h2 className='text-xl sm:text-2xl font-bold tracking-tight mb-4 mt-10'>
					Links
				</h2>
				<div className='w-1/4 flex flex-col mt-2'>
					<ul className='flex flex-row contacts items-center contacts'>
						<li>
							<a href=''>Blog</a>
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
		</>
	);
};

export default Contacts;
