import React from 'react';

// export default function Project(props) {
// 	const { title, imageSrc, description } = props;
// 	const photo = require(`${imageSrc}`);

// 	return (
// 		<div className="project-container">
//             <img src={photo}/>
//             <p>{title}</p>
//         </div>
// 	);
	
// }
export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title, 
            image: require(`${props.imageSrc}`),
            description: props.description,
            technologies: props.technologies
        };
    }
    handleClick = () => {
        this.props.onClick(
            this.state.title, 
            this.state.description,
            this.state.technologies
        );
    }
    render() {
        return (
            <div 
                className="project-container" 
                onClick={this.handleClick}
            >
                <img src={this.state.image}/>
                <p>{this.state.title}</p>
            </div>
        );
    }
    
}