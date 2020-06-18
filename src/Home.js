import React from 'react';
import Zoom from 'react-reveal/Zoom';
import AboutPage from './AboutPage.js';
import ProjectPage from './ProjectPage.js';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.aboutRef = React.createRef();
		this.projectsRef = React.createRef();
		this.logo = require(`./images/logo.png`);
	}

	scrollToAbout = (event) => {
        if(this.aboutRef.current){
            this.aboutRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            });
        }
    }

	scrollToProjects = (event) => {
        if(this.projectsRef.current){
            this.projectsRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            });
        }
	}
	
	render() {
		return(
			<div>
				<div id="banner-container">
					<div className="container">
						<Zoom>
							<p id="name"><b>Phil Yang</b></p>
						</Zoom>
						<p id="occupation"><i>Software & Mechanical Engineer</i></p>
						<div id="banner-btn-container" className="row">
							<button onClick={this.scrollToAbout} className="btn btn-default banner-btn">
								About
							</button>
							<button onClick={this.scrollToProjects} className="btn btn-default banner-btn">
								Projects
							</button>
						</div>
					</div>
				</div>
				<div id="nav-container">
					<nav id="my-nav" class="navbar navbar-expand-lg navbar-light bg-light">
						<img id="logo" class="navbar-brand" src={this.logo} alt="logo"></img>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item">
									<div class="nav-link" onClick={this.scrollToAbout}>About</div>
								</li>
								<li class="nav-item">
									<div class="nav-link" onClick={this.scrollToProjects}>Projects</div>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div ref={this.aboutRef}>
					<Zoom>
						<AboutPage/>
					</Zoom>
				</div>
				
				<div ref={this.projectsRef}>
					<ProjectPage/>
				</div>
			</div>
		);
	}
	
}