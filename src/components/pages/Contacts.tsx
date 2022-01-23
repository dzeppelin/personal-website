import React from 'react';
import 'styles/pages/contacts.css';

const Contacts = () => {
	return (
		<>
			{/* Credentials */}
			<div>
				<h2 className='text-xl sm:text-2xl font-bold tracking-tight mt-10 mb-4'>
					Contacts
				</h2>
				<ul className='flex flex-col contacts'>
					<li>My Blog</li>
					<li>Github</li>
					<li>Email</li>
				</ul>
			</div>
		</>
	);
};

export default Contacts;
