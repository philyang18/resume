import React from 'react';
import Project from './Project.js';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      instructions: "",
      technologies: [],
      src: "",
      github: ""
    };
    this.detailsRef = React.createRef();
  }
  componentDidUpdate = () => {
    if(this.detailsRef.current) {
      this.detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
     
    }
  }

  // get rid of async
  showDetails = async (title, description, instructions, technologies, src, github) => {
    this.setState({title, description, instructions, technologies, src, github});
  }
  hideDetails = () => {
    this.setState({title: "", description: "", instructions: "", technologies: [], src: "", github: ""});
  }
  render() {
    return (
      <div id="projects-page" className={this.state.title.length === 0 ? "" : "top-50"}>
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
{/*             
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="Memeversity" 
                  imageSrc="./images/meme.png" 
                  description="This is a web application that provides the latest meme formats using the Meme Generator API."
                  technologies={["HTML", "CSS", "JavaScript", "PHP"]}
                  src="https://google.com"
                  github="https://github.com"
                  onClick={this.showDetails}
                />
              </Zoom>
            </div> */}
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="NASA Images" 
                  imageSrc="./images/nasa.jpg" 
                  description="Nasa Images is a web application built using ReactJS and deployed through AWS. The app allows users view the last 7 Astronomy Photos of the Day from NASA and search through the library of images taken by the Curiosity Rover. All images are retrieved from NASA's APOD and Mars Rover APIs, but I wanted to create a more personal user experience compared to the NASA page. Users can double tap any photo to save it onto their favorites list where comments can be added."
                  instructions="**Guest account available: [ email: guest123@gmail.com, password: Guest123 ]"
                  technologies={["ReactJS", "CSS", "Bootstrap", "Express", "MongoDB", "NodeJS", "AWS"]}
                  src="http://ec2-54-157-138-19.compute-1.amazonaws.com"
                  github="https://github.com/philyang18/Nasa-Images-v4"
                  onClick={this.showDetails}
                />
              </Zoom>
            </div>
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="All Sorts" 
                  imageSrc="./images/allsorts.jpeg" 
                  description="All Sorts is a project I created while learning the basic sorting algorithms. This web application visualizes an array as a bar graph and allows users to generate an unsorted array of their desired size and sort the array using one of the six methods provided. The time of each run is then displayed in a table so the user can compare how fast each algorithm runs with varying array sizes."
                  instructions="** This application is not mobile-friendly yet."
                  technologies={["ReactJS", "CSS", "Bootstrap"]}
                  src="https://allsorts.surge.sh"
                  github="https://github.com/philyang18/All-Sorts"
                  onClick={this.showDetails}
                />
              </Zoom>
            </div>
            <div className="project col-lg-3 col-md-6 col-sm-12">
              <Zoom>
                <Project 
                  title="Smart Aquarium" 
                  imageSrc="./images/aquarium.png" 
                  description="This was a project sponsored by a biofuel research team at the Nuhzdin Lab at USC to build a water tank system to simulate ocean conditions. Their goal was to extend the lifespan of their kelp samples from Catalina Island because each sample only lasted about 3 hours after being taken out of the ocean. In this project, I led a team of 4 to develop an Arduino sensor system to save the sensor data and send SMS messages when the desired conditions are broken. I was responsible for writing a script in C/C++ to save the sensor data into our backend system and another one in Java to incrementally send POST requests with the latest sensor data to an IoT platform called Losant through a webhook. Using Losant, I was able to display and update the data and set up the SMS notification system.
                  ."
                  technologies={["C/C++", "Arduino", "Java", "Losant IoT"]}
                  src=""
                  github=""
                  onClick={this.showDetails}
                />
              </Zoom>
            </div>
          </div>
  
          <div id="project-details" >
            {this.state.title.length !== 0 ? 
              
                <div id="details-row" ref={this.detailsRef} className="row">
                  <Fade>
                    <div>
                      <h2 onClick={this.hideDetails}>{this.state.title} <i id="close-details-icon" className="icon-minus arrow-toggle"></i></h2> 
                      <p>{this.state.description}</p>
                      <p>{this.state.instructions}</p>
                      <div>
                        <a href={this.state.src} target="_blank" rel="noopener noreferrer" className={this.state.src.length === 0 ? "btn btn-default details-btn hide-btn" : "btn btn-default details-btn"}>Explore</a>
                        <a href={this.state.github} target="_blank" rel="noopener noreferrer" className={this.state.github.length === 0 ? "btn btn-default details-btn hide-btn" : "btn btn-default details-btn"}>Code</a>
                      </div>
                      {this.state.technologies.map(technology => {
                        return (
                          <div className="skill">{technology}</div>
                        );
                      })}
                      
                    </div>
                  </Fade>
                </div>  : <div/>
            }
          </div>
        </div>
      </div>
      
    );
  }
}

