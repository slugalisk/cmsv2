import React, { Component } from 'react';
import './App.css';
import './Menu.css';
import './Adminmenu.css';
import './Adminpanel.css';
import './Template1.css';

import 'react-table/react-table.css';

import { Route } from 'react-router'

import Home from './components/template1/pages/Home';
import Admin from './components/admin/Routes';
import Menuwrap from './components/menu/Menuwrap';
import Login from './components/users/Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menuwrap/>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/topics" component={Home}/>
        <Route exact path="/login" component={Home}/>
      </div>
    );
  }
}

export default App;
