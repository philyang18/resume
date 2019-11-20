import React from 'react';
import NavBar from './NavBar';

export default function PageNotFound(props){
	console.log(props);
	return (
		<div>
			<NavBar/>
			<h3 id="error">
				"{props.location.pathname}" was not found.
			</h3>
		</div>

	);
}