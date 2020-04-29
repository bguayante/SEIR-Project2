import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

function Header() {
	return (
		<header>
            <nav>
				<Link to='/'>Random</Link>
				<Link to='./Search.js'>Search</Link>
			</nav>
        </header>
	);
}

export default Header;
