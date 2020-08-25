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
                  description="Nasa Images is a MERN stack application that is deployed through an Ubuntu server on AWS. The app displays images from NASA's astronomy photo of the day and Mars rover APIs. Users can create an account to view the last 7 photos of the day and search through the library of images taken by the Curiosity Rover. Every user has their own 'favorites' list with CRUD capabilities which include a 'like' feature similar to Instagram where users can double tap an image to save it to their favorites list. Please note that the forgot password feature is not implemented yet."
                  instructions="**Guest account available: [ email: guest123@gmail.com, password: Guest123 ]"
                  technologies={["ReactJS", "CSS", "Bootstrap", "Express", "MongoDB", "NodeJS"]}
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
                  description="This is a website I created while learning some basic sorting algorithms. My original idea was to create an application that would slowly show the process of each method, however I decided to create a table that displays the duration of each sorting algorithm instead."
                  instructions="** This application is not mobile-friendly yet."
                  technologies={["ReactJS", "CSS", "Bootstrap"]}
                  src="https://allsorts.surge.sh"
                  github="https://github.com/philyang18/All-Sorts"
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
                        <a href={this.state.src} target="_blank" rel="noopener noreferrer" className="btn btn-default details-btn">Explore</a>
                        <a href={this.state.github} target="_blank" rel="noopener noreferrer" className="btn btn-default details-btn">Code</a>
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

