import React from 'react';
import NavBar from './NavBar';

export default function AboutMe(props) {
	return(
		<div>
			<NavBar/>
			<div id="about-container" className="container">
				<h3>PHILLIP YANG</h3>

				<div className="row">
					I'm a student at USC majoring in mechanical engineering and minoring in computer programming.
					In school I work as a teaching assistant for an object oriented programming course in Java. 
					However, I currently work part time as a web developer at the Los Angeles Unified School District. 
					My primary role here is primarily front-end development, but my goal is to expand into software or 
					full-stack engineering in the private sector. 
				</div><br/>
				<div className="row">
					My current passion is microcontrollers. I have been recently fidgeting with a Particle Argon and created
					an alarm clock system, temperature monitoring system for my house, and smart lights for my room. I am 
					also working on a fully-funded project for the Nuzhdin Lab at USC with three other students. The goal of 
					this project is to build an automated system of water tanks to store kelp samples in ideal ocean conditions 
					for biofuel research. My specific role is to program the lights, sensors, and pumps with an Arduino Uno. 
				</div>
				<br/>
				<div className="row">
					Programming courses I have taken:					
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
				<br/>
				<div className="row">
					Contact me: philyang04@gmail.com
				</div>
			</div>
		</div>
	);
}