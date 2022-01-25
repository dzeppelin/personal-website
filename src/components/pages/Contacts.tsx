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
				<div className='ring-1 ring-black p-12 rounded-lg shadow-lg flex flex-row'>
					<div className='form flex flex-col mr-20'>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 mb-3 p-1 px-2'
						/>
						<input
							type='text'
							name=''
							id=''
							className='ring-1 rounded-lg ring-gray-500 p-1 px-2 h-20'
						/>
						<div className='flex flex-row justify-items-start'>
							<button>Send</button>
						</div>
					</div>
					<div className='contacts'>
						<ul className='flex flex-col contacts'>
							<li>My Blog</li>
							<li>Github</li>
							<li>Email</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
