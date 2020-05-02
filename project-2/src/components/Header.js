import React from 'react';

function Header() {
	return (
		<>
			<div className='banner'>
				<h1>LifeAdvisor</h1>
				<p>Let us advise your life</p>
			</div>
			<div className='links'>
				<a href='https://www.gmail.com' target='blank'>Email</a>
				<a href='https://calendar.google.com' target='blank'>Calendar</a>
			</div>
		</>
	);
}

export default Header;
