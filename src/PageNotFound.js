import React from 'react';

export default function PageNotFound(props){
	console.log(props);
	var { url } = props;
	if(!url) {
		url = props.location.pathname;
	}
	return (
		<div>
			<h3 id="error">
				"{url}" was not found.
			</h3>
		</div>

	);
}