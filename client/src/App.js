import React, { Component } from 'react';
import './App.css';
import './Menu.css';

import { Route } from 'react-router'

import Home from './components/template1/pages/Home';
import Admin from './components/admin/Admin';
import Menuwrap from './components/menu/Menuwrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menuwrap/>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/topics" component={Home}/>
      </div>
    );
  }
}

export default App;
