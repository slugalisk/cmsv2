import React from 'react';
import {Row, Col} from 'react-bootstrap';

import UsersTable from './forms/UsersTable';

export default class Banlist extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <UsersTable/>
      </Col>
    </div>
    );
  }
}
