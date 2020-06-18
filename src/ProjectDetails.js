// import React from 'react';
// import { getProjects } from './GetResumeApi';
// import Iframe from 'react-iframe';
// import PageNotFound from './PageNotFound';
// import Loading from './Loading';
 
// export default class ProjectDetails extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: 1,
//             category: "",
//             projects: {},
//             currentProject: {},
//             size: 1,
//             next: require('./images/next.png'),
//             previous: require('./images/previous.png'),
//             error: false,
//             loading: false
//         };
//     }
//     componentDidMount = async () => {
//         this.setState({ loading: true });
//         const response = await getProjects(this.props.match.params.category);
//         if(response) {
//             if(!isNaN(this.props.match.params.id)) {
//                 if(this.props.match.params.id > response.length || this.props.match.params.id <= 0) {
//                     this.setState({ error: true });
//                 } else {
//                     this.setState({ projects: response, currentProject: response[Number(this.props.match.params.id) - 1], category: this.props.match.params.category, id: Number(this.props.match.params.id), size: response.length });
//                 }
//             } else {
//                 this.setState({ error: true });
//             }
            
//         } else {
//             this.setState({ error: true });
//         }
//         this.setState({ loading: false });
//     }
//     formatHeader(category) {
//         const components = category.toUpperCase().split("_");
//         var string = "";
//         for(var i = 0; i < components.length; i++) {
//             string += components[i] + " ";
//         }
//         return string;
//     }
//     handlePrev = () => {
//         var id;
//         if (this.state.id === 1) {
//             id = this.state.size;
//         } else {
//             id = this.state.id - 1;
//         }
//         this.setState({ currentProject: this.state.projects[id - 1], id });
//         this.props.history.push(`/projects/${this.state.category}/${id}`);
//     } 
//     handleNext = () => {
//         var id;
//         if(this.state.id === this.state.size) {
//             id = 1;
//         } else {
//             id = this.state.id + 1;
//         }
//         this.setState({ currentProject: this.state.projects[id - 1], id });
//         this.props.history.push(`/projects/${this.state.category}/${id}`);
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.loading ? <Loading/> : 
//                     <div>
//                         {this.state.error ? <PageNotFound url={this.props.location.pathname}/> :
//                             <div id="details-page" className="container-fluid">
//                                 <h1>{this.formatHeader(this.state.category)}</h1>
//                                 <div className="row">
//                                     <div className="col-lg-1 col-md-2 d-none d-md-block">
//                                         <button id="previous-project" onClick={this.handlePrev}><img src={this.state.previous}></img></button>
//                                     </div>
//                                     <div id="details-container" className="col-lg-10 col-md-8 col-sm-12">
//                                         {this.state.currentProject.video_url ? 
//                                             <Iframe url={this.state.currentProject.video_url} width="100%" height="450px" frameBorder="0" allowFullScreen/> :
//                                             <img src={ this.state.currentProject.thumbnail ? require( `${this.state.currentProject.thumbnail}`) : undefined  } />
//                                         }
//                                     </div>
//                                     <div className="col-lg-1 col-md-2 d-none d-md-block">
//                                         <button id="next-project" onClick={this.handleNext}><img src={this.state.next}></img></button>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div id="details" className="col-lg-10">
//                                         <p>
//                                             <strong>Title: </strong>
//                                             <a target="_blank" rel="noopener noreferrer" href={this.state.currentProject.url ? this.state.currentProject.url : undefined}>{this.state.currentProject.title}</a>
//                                         </p>
//                                         {this.state.currentProject.github_url ? 
//                                             <p>
//                                                 <strong>Github: </strong>
//                                                 <a target="_blank" rel="noopener no referrer" href={this.state.currentProject.github_url}>view code</a>
//                                             </p> : <p/>
//                                         }
//                                         <p><strong>Languages: </strong>{this.state.currentProject.languages}</p>
//                                         {this.state.currentProject.type ? 
//                                             <p>
//                                                 <strong>Type: </strong>{this.state.currentProject.type}
//                                             </p> : <p/>
//                                         }
//                                         {this.state.currentProject.frameworks ? 
//                                             <p>
//                                                 <strong>Frameworks: </strong>{this.state.currentProject.frameworks}
//                                             </p> : <p/>
//                                         }
//                                         {this.state.currentProject.technologies ? 
//                                             <p>
//                                                 <strong>Technologies: </strong>{this.state.currentProject.technologies}
//                                             </p> : <p/>
//                                         }
//                                         <p><strong>Description: </strong>{this.state.currentProject.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         }
//                     </div>
//                 }
//             </div>
//         );
//     }
// }
