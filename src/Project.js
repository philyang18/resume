import React from 'react';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title, 
            image: require(`${props.imageSrc}`),
            description: props.description,
            technologies: props.technologies,
            src: props.src,
            github: props.github
        };
    }
    handleClick = () => {
        this.props.onClick(
            this.state.title, 
            this.state.description,
            this.state.technologies,
            this.state.src,
            this.state.github
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