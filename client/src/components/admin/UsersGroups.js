import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import showResults from './components/showResults';

import {Row, Col} from 'react-bootstrap';
import GroupsForm from './forms/GroupsForm';

export default class Groups extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <GroupsForm onSubmit={showResults}/>
      </Col>
    </div>
    );
  }
}
