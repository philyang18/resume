import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import PageNotFound from './PageNotFound';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects" component={ProjectPage}/>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

