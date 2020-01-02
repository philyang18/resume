import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Home(props) {
	const photo1 = require("./images/home.png");
	const photo2 = require("./images/reverseHome.png");
	return(
		<div id="home-container">
			<img id="top-bg" src={photo1} alt="top background"/>
			<div id="home-content" className="container">
				<h3>Hello</h3><h3>I'm Phil</h3>
				<p>welcome to my web portfolio</p>
				<div id="button-holder" className="row">
					<NavLink to="/projects">
						<button className="home-button col-lg-6 col-md-6 col-sm-12 home-links">
							<p>Projects</p>
						</button>
					</NavLink>
					<NavLink to="/about"> 
						<button className="home-button col-lg-6 col-md-6 col-sm-12 home-links">
							<p>About</p>
						</button>
					</NavLink>
				</div>
			</div>
			<img id="bottom-bg" src={photo2} alt="bottom background"/>
		</div>
	);
}