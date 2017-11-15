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

import Subscriptions from './components/users/Subscriptions';
import Donations from './components/users/Donations';
import Gifts from './components/users/Gifts';

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
        <Route exact path="/user/subscriptions" component={Subscriptions}/>
        <Route exact path="/user/donations" component={Donations}/>
        <Route exact path="/user/gifts" component={Gifts}/>
        
      </div>
    );
  }
}

export default App;
