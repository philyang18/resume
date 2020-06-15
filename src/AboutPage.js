import React from 'react';

export default class AboutPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: require(`./images/portrait2.jpeg`),
			resume: require('./images/portrait.jpeg'),
			showJourney: false,
			showCourses: false,
		};
		this.coursesRef = React.createRef();
	}
	componentDidUpdate = () => {
		if(this.coursesRef.current){
			this.coursesRef.current.scrollIntoView({ 
			   behavior: "smooth",
			   block: "nearest"
			});
		}
	}
	toggleCourses = () => {
		if(this.state.showCourses) {
			this.setState({  showCourses: false });
		} else {
			this.setState({  showCourses: true });
		}
	}
	render() {
		return(
			<div id="about-container">
				<div id="#about-page" className="container">
					<div className="row">
						<div id="about-left-side" className={this.state.showCourses ? "top-100 col-lg-5 col-sm-12" : "col-lg-5 col-sm-12"}>
							<img id="my-photo" src={this.state.photo}></img>
							<h2 id="about-name"><b>Phil Yang</b></h2>
							<p id="motto">YAYY AREAAAA</p>
							<div id="link-container" className="row">
								<a href="https://www.linkedin.com/in/phil-yang-b9a80316b/" target="_blank" className="btn btn-default link-button col-lg-3 col-sm-12">LinkedIn</a>
								<a href="https://github.com/philyang18/" target="_blank" className="btn btn-default link-button col-lg-3 col-sm-12">GitHub</a>
								{/* <a className="link-button">Resume</a> */}
								<a href={this.state.resume} download="resume.pdf" className="btn btn-default link-button col-lg-3 col-sm-12">Resume</a>
								<a href="mailto:philyang04@gmail.com" className="btn btn-default link-button col-lg-3 col-sm-12">Email</a>
							</div>
							

						</div>
						<div id="about-right-side" className={this.state.showCourses ? "top-100 col-lg-7 col-sm-12" : "col-lg-7 col-sm-12"}> 
							<div>
								<h1>Who am I?</h1>
								<p>I am an aspiring software engineer from the Bay Area. Currently, I am a senior majoring in mechanical engineering with minor in computer programming at the University of Southern California. I love creating and solving problems. I have experience in full stack web development, and plan to pursue a graduate degree in computer science at USC in the fall of 2021.</p>
								<p>Apart from academics, I love working out, running, and hiking with my friends. I enjoy watching football and basketball, and I also play on USC's club ultimate frisbee team.</p>
								<br/>
								<h3>Skills</h3>
								<div id="skills-list" >
									<a className="skill">C++</a>
									<a className="skill">Java</a>
									<a className="skill">Swift</a>
									<a className="skill">HTML</a>
									<a className="skill">CSS</a>
									<a className="skill">JavaScript</a>
								</div>
								
								<br/><br/><p/>
								<h3 id="courses-btn" onClick={this.toggleCourses}>Completed Courses <i className={this.state.showCourses ? "icon-caret-down arrow-toggle" : "icon-caret-right arrow-toggle"} ></i></h3>
								<br/>
								
								<div id="about-detail">
									{ this.state.showCourses ? 
										<div id="my-courses" ref={this.coursesRef} className="row">	
											<div className="col-lg-6">
												<div className="col-lg-12">
													Programming:
												</div>
												<div className="col-lg-12">
													<ul>
														<li>Intro to C++</li>
														<li>Data Structures in C++</li>
														<li>Introduction to Programming Systems Design</li>
														<li>Programming Graphical User Interfaces in Java</li>
														<li>Full-Stack Web Development</li>
														<li>iOS App Development in Swift</li>
														<li>Advanced Front End Development</li>
														<li>Physical Programming with Microcontrollers</li>
														<li>Professional C++</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="col-lg-12">
													Mechanical Engineering:
												</div>
												<div className="col-lg-12">
												<ul>
													<li>Intro to MATLAB</li>
													<li>Computer Aided Design (Siemens NX)</li>
													<li>Math up to: Differential Equations</li>
													<li>Physics up to: Optics and Modern Physics</li>
													<li>Statics</li>
													<li>Strength of Materials</li>
													<li>Dynamics</li>
													<li>Dynamic Systems</li>
													<li>Thermodynamics</li>
													<li>Fluid Dynamics</li>
													<li>Heat Transfer</li>
													<li>Mechoptronics</li>
													<li >Senior Design</li>
												</ul>
												</div>
											</div>	
										</div> : <div/>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

