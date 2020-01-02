import React from 'react';


// last updated
// more fun personality stuff and have buttons for more intense information.
// read more buttons basically
// links to connect to me if you want to collab
export default class AboutMe extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: require(`./images/portrait.JPG`),
			showJourney: false,
			showCourses: false,
			showContact: false
		};
	}
	
	handleJourney = () => {
		this.setState({ showCourses: false, showContact: false, showJourney: true });
		window.scrollTo({top: 850, behavior: 'smooth' });
	}
	handleCourses = () => {
		this.setState({ showContact: false, showJourney: false, showCourses: true });
		window.scrollTo({top: 850, behavior: 'smooth' });
	}
	handleContact = () => {
		this.setState({ showCourses: false, showJourney: false, showContact: true});
		window.scrollTo({top: 850, behavior: 'smooth' });
	}
	handleClose = () => {
		this.setState({ showCourses: false, showContact: false, showJourney: false });
	}
	render() {
		return(
			<div id="about-page" >
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<img id="my-photo" src={this.state.photo}></img>
						</div>
						<div className="col-lg-7"> 
							<div>
								<h1>about me</h1>
								<h6>I'm an aspiring software engineer from the Bay Area. I currently study mechanical engineering and computer programming at the University of Southern California.</h6>
								<br/>
								<p>What would you like to know?</p>
								<div>
									<button type="button" className="btn btn-info about-button" aria-pressed="true" onClick={this.handleJourney}>My Journey</button>
									<button type="button" className="btn btn-info about-button" aria-pressed="true" onClick={this.handleCourses}>Completed Courses</button>
									<button type="button" className="btn btn-info about-button" aria-pressed="true" onClick={this.handleContact}>Contact</button>
								</div><br/>
								<div id="about-detail" >
									{ this.state.showJourney ? 
										<div>
											<button type="button" className="btn btn-danger close-button" aria-pressed="true" onClick={this.handleClose}>x</button>
											<div id="my-journey" className="row">
												<div>
													After high school I attended Laney College in Oakland, CA for a year before enrolling at USC in 2017. I applied for mechanical engineering because I have always enjoyed math and problem solving, however I quickly discovered a passion for coding after enrolling in a MATLAB course at USC. Since then I have taken at least one programming course per semester and created numerous programs and websites. During the summer of 2019 I worked as a web dev intern at the Los Angeles Unified School District where my primary role was front-end development. I worked on several projects there including the redesign and implementation of responsive and accessible design to the 'classic' view and helpdesk pages. Currently, I work as a teaching assistant for an object-oriented programming course at USC.
												</div>
												<div>
													Additionally, I am studying CS theories and algorithms in my free time, and I will be enrolled in two programming courses: Professional C++ and Applied Python during the spring semester of 2020. My goal is to become well-versed in computer science in order to advance my abilities beyond the front-end.
												</div>
											</div> 
										</div> : <div/> 
									}
									{ this.state.showCourses ? 
										<div>
											<button type="button" className="btn btn-danger close-button" aria-pressed="true" onClick={this.handleClose}>x</button>
											<div id="my-courses" className="row">	
												<div className="col-lg-6">
													<div className="col-lg-12">
														Programming courses:
													</div>
													<div className="col-lg-12">
														<ul>
															<li>Intro to C++</li>
															<li>Data Structures in C++</li>
															<li>Programming Graphical User Interfaces in Java</li>
															<li>Full-Stack Web Development</li>
															<li>iOS App Development in Swift</li>
															<li>Advanced Front End Development</li>
															<li>Physical Programming with Microcontrollers</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="col-lg-12">
														Mechanical Engineering courses:
													</div>
													<div className="col-lg-12">
													<ul>
														<li>MATLAB</li>
														<li>Computer Aided Design (Siemens NX)</li>
														<li>Math up to: Differential Equations</li>
														<li>Physics up to: Optics and Modern Physics</li>
														<li>Statics</li>
														<li>Strength of Materials</li>
														<li>Dynamics</li>
														<li>Dynamic Systems</li>
														<li>Thermodynamics</li>
														<li>Mechoptronics A and B</li>
														<li>Senior Design</li>
													</ul>
													</div>
												</div>	
											</div> 
										</div> : <div/>
									}
									{this.state.showContact ?
										<div>
											<button type="button" className="btn btn-danger close-button" aria-pressed="true" onClick={this.handleClose}>x</button>
											<div id="my-contact" className="row">
												
												
												<div className="col-12">
													Email 
													<ul>
														<li><a href="mailto:philyang04@gmail.com">philyang04@gmail.com</a></li>
													</ul>
													
												</div>
												
												<div className="col-12">
													Quick Links
													<ul>
														<li><a>Resume</a></li>
														<li><a target="_blank" href="https://www.linkedin.com/in/phil-yang-b9a80316b/">LinkedIn</a></li>
														{/* <li></li> */}
													</ul>
												</div>
												<div className="col-12">
													Please feel free to send me an email or message on LinkedIn if you have any questions! 
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


{/* <div id="about-container" className="container">
				<h3>PHILLIP YANG</h3>
				<div className="row">
					After high school I attended Laney College in Oakland, CA for a year before enrolling at USC. I applied for mechanical engineering because I have always enjoyed math and problem solving, however I quickly discovered a passion for coding after enrolling in a MATLAB course at USC. Since then I have taken at least one programming course per semester to improve my coding abiities. During the summer of 2019 I worked as a web development intern at the Los Angeles Unified School District where my primary role was front-end development. I worked on many projects there including a redesign of their 'classic' home page and their helpdesk page. I currently work as a teaching assistant for an object-oriented programming course at USC and my goal for this school year is to land a software or full-stack engineering internship. 
				</div><br/>
				<div className="row">
					As a mechanical engineer, I possess strong problem solving skills which transfer nicely into the field of CS. I am methodical yet adaptible, which makes planning and debugging a program an easier task for me. I have a strong understanding of object-oriented programming and web development, and I am currently expanding my knowledge of CS theories and algorithms by studying on my free time. This upcoming semester (spring of 2020), I will be enrolling in two courses called Professional C++ and Applied Python, and my goal is to become well-versed in computer science in order to advance my abilities beyond the front-end.
				</div><br/><br/>
				<div className="row">
					<div className="col-lg-6">
						Programming courses:	
					</div>
					<div className="col-lg-6">
						Mechanical Engineering courses:	
					</div>			
				</div>
				<div className="row">	
					<div className="col-lg-6"> 
						<ul>
							<li>Intro to C++</li>
							<li>Data Structures in C++</li>
							<li>Programming Graphical User Interfaces in Java</li>
							<li>Full-Stack Web Development</li>
							<li>iOS App Development in Swift</li>
							<li>Advanced Front End Development</li>
							<li>Physical Programming with Microcontrollers</li>
						</ul>
					</div>			
					<div className="col-lg-6"> 
						<ul>
							<li>MATLAB</li>
							<li>Computer Aided Design (Siemens NX)</li>
							<li>Math up to: Differential Equations</li>
							<li>Physics up to: Optics and Modern Physics</li>
							<li>Statics</li>
							<li>Strength of Materials</li>
							<li>Dynamics</li>
							<li>Dynamic Systems</li>
							<li>Thermodynamics</li>
							<li>Mechoptronics A and B</li>
							<li>Senior Design</li>
						</ul>
					</div>	
				</div><br/>
				<div className="row">
					Contact me: philyang04@gmail.com
				</div>
			</div> */}