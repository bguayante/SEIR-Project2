import React from 'react';

function Advice(props) {
	return (
		<div>
			<p onClick={props.updateAdvice}>{props.advice}</p>
		</div>
	);
}

export default Advice;
