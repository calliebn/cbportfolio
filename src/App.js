import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Project from './pages/Projects';
import About from './pages/About';
import Connect from './components/Connect';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'/cbportfolio/'}>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/connect" component={Connect} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
