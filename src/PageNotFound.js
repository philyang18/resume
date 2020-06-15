import React from 'react';

export default function PageNotFound(props){
	console.log(props);
	var { url } = props;
	if(!url) {
		url = props.location.pathname;
	}
	return (
		<div id="error">
			<h3>
				"{url}" was not found. 
			</h3>
			{/* <a href="https://phillipyang.surge.sh">Take Me Home!</a> */}
			<a href="/">Take Me Home!</a>
		</div>

	);
}