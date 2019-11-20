import React from 'react';
import { NavLink }from 'react-router-dom';

export default function NavBar(props){
	return(
		<nav id="myNavBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/home" className="navbar-brand">
        Phillip Yang
      </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/projects" className="nav-item nav-link">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About me
          </NavLink>
        </div>
      </div>
    </nav>
	);
}