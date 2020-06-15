import React from 'react';
import Zoom from 'react-reveal/Zoom';
import AboutPage from './AboutPage.js';
import ProjectPage from './ProjectPage.js';

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.aboutRef = React.createRef();
		this.projectsRef = React.createRef();
	}

	scrollToAbout = (event) => {
        if(this.aboutRef.current){
            this.aboutRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            });
        }
    }

	scrollToProjects = (event) => {
        if(this.projectsRef.current){
            this.projectsRef.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
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