import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Twittercont from './components/TwitterCont';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Twittercont/>
      </div>
    );
  }
}

export default App;
