import React from 'react';
import WebLink from './WebLink';
import { getProjects } from './GetResumeApi';
import Loading from './Loading';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web: [],
      prog: [],
      micro: [],
      loading: false
    };
  }
  componentDidMount = async () => {
    this.setState({ loading: true });
    const projects = await getProjects();
    this.setState({ web: projects.web_development, prog: projects.programming, micro: projects.microcontrollers });
    this.setState({ loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> :
          <div id="projects-page" className="container" >
            <br/><br/>
            <h1>Web Projects</h1>
            <div className="row rowOfUnits">
              {this.state.web.map(project => {
                return (
                  <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/web_development/${project.id}`}/>
                );
              })}
            </div>
            <br/><br/>
            <h1>Programming Projects</h1>
            <div className="row rowOfUnits">
              {this.state.prog.map(project => {
                return (
                  <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/programming/${project.id}` }/>
                );
              })}
            </div>
            <br/><br/>
            <h1>Microcontroller Projects</h1>
            <div className="row rowOfUnits">
              {this.state.micro.map(project => {
                return (
                  <WebLink title={project.title} imageSrc={project.thumbnail} url={`/projects/microcontrollers/${project.id}` }/>
                );
              })}
            </div>
          </div>
        }
      </div>
    );
  }
}
// export default function Projects(props) {
//   //try onHover and create a function to fill in link-desc
// 	return (
//     <div>
// 	    <div id="web-body" className="container" >
//         <br/><br/>
//         <h1>Web Projects</h1>
//         <div className="row rowOfUnits">
//           <WebLink title={"This Website"} imageSrc={"./images/github.png"} url={"https://github.com/philyang18/resume"} isWeb={false}/>
//           <WebLink title={"Movie Database"} imageSrc={"./images/movies.png"} url={"http://303.itpwebdev.com/~yangphil/assignment5/movie.html"} isWeb={false}/>
//           <WebLink title={"Memeversity"} imageSrc={"./images/meme.png"} url={"http://303.itpwebdev.com/~yangphil/final_project/login.php"} isWeb={false}/>
//           <WebLink title={"Fake Restaurant"} imageSrc={"./images/restaurant.png"} url={"https://philyang18.github.io/phils-burger.github.io/"} isWeb={false}/>
//         </div>
//         <div className="row rowOfUnits">
//           <WebLink title={"JS Calculator"} imageSrc={"./images/calculator.png"} url={"https://philyang18.github.io/js-calculator.github.io/"} isWeb={false}/>
//           <WebLink title={"DVD Database"} imageSrc={"./images/dvd.jpg"} url={"http://303.itpwebdev.com/~yangphil/assignment10/index.php"} isWeb={false}/>
//           <WebLink title={"LAUSD HelpDesk"} imageSrc={"./images/lausd.png"} url={"https://achieve.lausd.net/helpdesk"} isWeb={false}/>
//           <WebLink title={"The Office Review"} imageSrc={"./images/office.png"} url={"https://philyang18.github.io/the-office.github.io/"} isWeb={false}/>
//         </div>
//         <br/><br/>
//         <h1>C++ Projects</h1>
//         <div className="row rowOfUnits">
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//           <WebLink title={"Sieve of Erastosthenes"} imageSrc={"./images/github.png"} url={"/projects/sieveoferastothenes"} isWeb={false}/>
//         </div>
//       </div>
//     </div>
// 	);
// }