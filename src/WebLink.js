import React from 'react';
import { NavLink } from 'react-router-dom';

export default function WebLink(props) {
	const { title, imageSrc, url } = props;
	const photo = require(`${imageSrc}`);

	return (
		<div className="single-unit col-lg-3 col-md-6 col-sm-12" aria-haspopup="true">
			<div className="hide-border" role="button" tabIndex="0" >
				<div className="hovereffect" aria-haspopup="true">
					<img className="img-responsive" src={photo} alt={title}/>
					<div className="overlay" aria-haspopup="true">
						<h2>{title}</h2>
						<NavLink to={url} className="info" rel="noopener noreferrer">enter</NavLink>
					</div>
				</div>
			</div>
		</div> 
	);
	
}


