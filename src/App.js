import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import AboutMe from './AboutMe';
import PageNotFound from './PageNotFound';
import ProjectDetails from './ProjectDetails';
import Loading from './Loading';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <nav id="myNavBar" className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                About
              </NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/test" component={Loading} />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/projects/:category/:id" component={ProjectDetails}/>
          <Route path="/projects" exact={true} component={Projects} />
          <Route path="/about" component={AboutMe} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

