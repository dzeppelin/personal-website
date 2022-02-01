import React from 'react';

const Portfolio = () => {
	return (
		<>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<img
					src='meme.png'
					alt='Meme, that says nothing to do here'
					className='h-60 w-60 mt-8'
				/>
				<img
					src='meme.jpg'
					alt='Meme, that says nothing to do here'
					className='h-60 w-60 mb-8'
				/>
			</div>
		</>
	);
};

export default Portfolio;
