import React from 'react';

function Search(props) {
	return (
		<div>
			<form onSubmit={props.searchFormSubmit}>
				<input onChange={props.searchFormChange} type='text' />
				<input type='submit'/>
			</form>
		</div>
	);
}

export default Search;
