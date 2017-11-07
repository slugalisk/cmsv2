import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router'
import {Row, Col} from 'react-bootstrap';

import Home from './components/template1/pages/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Home}/>
            <Route path="/topics" component={Home}/>
      </div>
    );
  }
}

export default App;
