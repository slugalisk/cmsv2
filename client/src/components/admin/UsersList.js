import React from 'react';

import UsersTable from './forms/UsersTable';
import {Row, Col} from 'react-bootstrap';

export default class UsersList extends React.Component{
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
