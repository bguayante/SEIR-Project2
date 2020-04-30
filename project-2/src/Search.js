import React from 'react';

function Search (props) {
	return (
		<>
			<button value='/search/love' onClick={props.valueHandler}>
				LOVE
			</button>
			<button value='/search/friend' onClick={props.valueHandler}>
				FRIENDS
			</button>
			<button value='/search/fail' onClick={props.valueHandler}>
				SUCCESS
			</button>
			<button value='null' onClick={props.updateAdvice}>
				RANDOM
			</button>
			<button value='/search/people' onClick={props.valueHandler}>
				PEOPLE
			</button>
			<button value='/search/self' onClick={props.valueHandler}>
				SELF
			</button>
			<button value='/search/happ' onClick={props.valueHandler}>
				HAPPINESS
			</button>
		</>
	);
};



export default Search;
