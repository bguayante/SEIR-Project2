import React from 'react';

function Search (props) {
	return (
		<>
			<button className='btn' value='/search/love' onClick={props.valueHandler}>
				Love
			</button>
			<button
				className='btn'
				value='/search/friend'
				onClick={props.valueHandler}>
				Friends
			</button>
			<button className='btn' value='/search/fail' onClick={props.valueHandler}>
				Success
			</button>
			<button className='btn' value='null' onClick={props.updateAdvice}>
				Random
			</button>
			<button
				className='btn'
				value='/search/people'
				onClick={props.valueHandler}>
				People
			</button>
			<button className='btn' value='/search/self' onClick={props.valueHandler}>
				Self
			</button>
			<button className='btn' value='/search/happ' onClick={props.valueHandler}>
				Happiness
			</button>
		</>
	);
};



export default Search;
