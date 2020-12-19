import React from 'react';
import { __esModule } from 'react-reveal/globals';

export default class AboutPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: require(`./images/portrait3.JPG`),
			resume: require('./images/Resume_Phil_Yang.pdf'),
			showJourney: false,
			showCourses: false,
		};
		this.coursesRef = React.createRef();
		this.topRef = React.createRef();
	}
	componentDidUpdate = () => {
		if(this.coursesRef.current && this.state.showCourses){
			this.coursesRef.current.scrollIntoView({ 
			   behavior: "smooth",
			   block: "nearest"
			});
		}
		else if(this.topRef.current) {
			this.topRef.current.scrollIntoView({ 
				behavior: "smooth",
				block: "nearest"
			 });
		}
	}
	toggleCourses = () => {
		
		this.setState({  showCourses: !this.state.showCourses });
	}
	render() {
		return(
			<div id="about-container" ref={this.topRef}>
				<div id="#about-page" className="container">
					<div className="row">
						<div id="about-left-side" className={this.state.showCourses ? "top-100 col-lg-5 col-sm-12" : "col-lg-5 col-sm-12"}>
							<img id="my-photo" src={this.state.photo} alt="portrait"></img>
							<h2 id="about-name"><b>Phil Yang</b></h2>
							<p id="my-school">University of Southern California 2021</p>
							<div id="link-container" className="row">
								<a href="https://www.linkedin.com/in/philyang18/" rel="noopener noreferrer" target="_blank" className="btn btn-default link-btn col-lg-3 col-sm-12">LinkedIn</a>
								<a href="https://github.com/philyang18/" rel="noopener noreferrer" target="_blank" className="btn btn-default link-btn col-lg-3 col-sm-12">GitHub</a>
								<a href={this.state.resume} download="Resume_Phil_Yang.pdf" rel="noopener noreferrer" className="btn btn-default link-btn col-lg-3 col-sm-12">Resume</a>
								<a href="mailto:philyang04@gmail.com" className="btn btn-default link-btn col-lg-3 col-sm-12">Email</a>
							</div>
							

						</div>
						<div id="about-right-side" className={this.state.showCourses ? "top-100 col-lg-7 col-sm-12" : "col-lg-7 col-sm-12"}> 
							<div>
								<h1>Who am I?</h1>
								<p>I am an aspiring software engineer from the Bay Area. Currently, I am a senior majoring in mechanical engineering with minor in computer programming at the University of Southern California. I love creating websites, coding, and solving problems. I have experience in full stack web development, and plan to pursue a graduate degree in computer science at USC in the fall of 2021.</p>
								<p>Apart from academics, I enjoy basketball, football, running, and hiking with  friends. I also play on USC's club ultimate frisbee team.</p>
								<br/>
								<h3>Skills</h3>
								<div id="skills-list" >
									<div className="skill">C++</div>
									<div className="skill">Java</div>
									<div className="skill">Swift</div>
									<div className="skill">HTML</div>
									<div className="skill">CSS</div>
									<div className="skill">JavaScript</div>
									<div className="skill">PHP</div>
									<div className="skill">Bootstrap</div>
									<div className="skill">React</div>
									<div className="skill">Laravel</div>
									<div className="skill">NodeJS</div>
									<div className="skill">Express</div>
									<div className="skill">MongoDB</div>
									<div className="skill">AWS</div>
									<div className="skill">MySQL</div>
									<div className="skill">Git</div>
									<div className="skill">OOP</div>
									<div className="skill">MVC</div>
									<div className="skill">MATLAB</div>
									<div className="skill">Siemens NX</div>
								</div>
								
								<br/><br/>
								
								
								<div id="about-detail" ref={this.coursesRef}>
									<h3 id="courses-btn" onClick={this.toggleCourses}>Completed Courses <i className={this.state.showCourses ? "icon-caret-down arrow-toggle" : "icon-caret-right arrow-toggle"} ></i></h3>
									<br/>
									{ this.state.showCourses ? 
										<div id="my-courses"  className="row">	
											<div id="course-notes" className="col-12">
												<p>* Teaching Assistant</p>
												<p>** In Progress</p>
											</div>
											<div className="col-lg-6">
												<div className="col-lg-12">
													Computer Science/Programming:
												</div>
												<div className="col-lg-12">
													<ul>
														<li>Intro to C++</li>
														<li>Data Structures</li>
														<li>Introduction to Programming Systems Design</li>
														<li>Analysis of Algorithms</li>
														<li>Full-Stack Web Development</li>
														<li>Advanced Front End Development</li>
														<li>iOS App Development in Swift</li>
														<li>Physical Programming with Microcontrollers</li>
														<li>Programming Graphical User</li>
														<li className="font-italic">* Object-Oriented Programming</li>
														<li className="font-italic">* Professional C++</li>
														<br/>
														<li className="font-italic">** Advanced iOS App Development</li>
														
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
														<li>Turbine Design and Analysis</li>
														<li>Computational Solutions to Engineering Problems</li>
														<li>Senior Design</li>
														<br/>
														<li className="font-italic">** Computer Aided Design of Mechanical Systems</li>
														<li className="font-italic">** Materials Behavior and Processing</li>
														<li className="font-italic">** Mathematics of Physics and Engineering II</li>
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

