import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Row, Col} from 'react-bootstrap';

import Twittercont from './components/TwitterCont';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col md={10} mdOffset={1}>
          <Col md={6}>
            <Twittercont/>
          </Col>
        </Col>
      </div>
    );
  }
}

export default App;
