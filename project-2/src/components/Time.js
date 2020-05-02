import React, { Component } from 'react';

function Time () {
    
    let d = new Date();
		let n = d.getHours();
		let m = d.getMinutes();
		
		if (m < 10) {
			m = '0' + m;
		} else {
			m = '' + m;
		}
		const time = `${n}:${m}`;
    
    return (
        <>
           <p>{time}</p>     
        </>
    );
    
}

export default Time;