import React, { Component } from 'react';
import './App.css';
import './Menu.css';
import './Adminmenu.css';
import './Adminpanel.css';
import './Template1.css';
import './User.css';

import 'react-table/react-table.css';

import { Route } from 'react-router'

import Home from './components/template1/pages/Home';
import Admin from './components/admin/Routes';
import Menuwrap from './components/menu/Menuwrap';
import Login from './components/users/Login';
import Register from './components/users/Register';

import Navbar from './components/template1/components/Navbar';

import Profile from './components/users/Profile';
import Messages from './components/users/Messages'
import Authentication from './components/users/Authentication';
import Usernav from './components/users/Usernav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/user" component={Navbar}/>
        <Route path="/user" component={Usernav}/>
        <Menuwrap/>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/user/profile" component={Profile}/>
        <Route exact path="/user/messages" component={Messages}/>
        <Route exact path="/user/authentication" component={Authentication}/>
        
      </div>
    );
  }
}

export default App;
