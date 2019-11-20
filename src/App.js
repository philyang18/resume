import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Home from './Home';
import AboutMe from './AboutMe';
import PageNotFound from './PageNotFound';
import OopProjectPage from './OopProjectPage';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return (
      <Router>
       
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/projects/:projectname" component={OopProjectPage}/>
          <Route path="/projects" exact={true} component={Projects} />
          <Route path="/about" component={AboutMe} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
  
}

