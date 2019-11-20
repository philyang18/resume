import React from 'react';
import { NavLink } from 'react-router-dom';
import OopProjectPage from  './OopProjectPage';

export default function WebLink(props) {
	const { title, imageSrc, url, isWeb } = props;
	const photo = require(`${imageSrc}`);
	if( isWeb ){
		return (
			<div className="single-unit col-lg-3 col-md-6 col-sm-12" aria-haspopup="true"> 
				<div role="button" tabIndex="0" > {/* used to be <a></a> */}
					<div className="hovereffect" aria-haspopup="true">
						<img className="img-responsive" src={photo} alt={title}/>
						<div className="overlay" aria-haspopup="true">
						<h2>{title}</h2>
						<a className="info" target="_blank" href={url} rel="noopener noreferrer">enter</a>
						</div>
					</div>
				</div>
			</div> 
		);
	} else {
		return (
				<div className="single-unit col-lg-3 col-md-6 col-sm-12" aria-haspopup="true">
					<div role="button" tabIndex="0" >
						<div className="hovereffect" aria-haspopup="true">
							<img className="img-responsive" src={photo} alt={title}/>
							<div className="overlay" aria-haspopup="true">
								<h2>{title}</h2>
								{/* <a className="info" rel="noopener noreferrer"><NavLink to={url} className="info" rel="noopener noreferrer">enter</NavLink></a> */}
								<NavLink to={url} className="info" rel="noopener noreferrer">enter</NavLink>
							</div>
						</div>
					</div>
				</div> 
		);
	}
}


