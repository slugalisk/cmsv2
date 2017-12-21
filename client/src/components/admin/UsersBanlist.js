import React from 'react';
import {Row, Col} from 'react-bootstrap';

import UsersTable from './forms/UsersTable';

export default class Banlist extends React.Component{
  render(){
    return(
 
    <div className='admin_form_wrapper'>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <UsersTable/>
      </Col>
    </div>
    );
  }
}
