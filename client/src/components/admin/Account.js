import React from 'react';

import showResults from './components/showResults';
import AccountForm from './forms/AccountForm';

import {Row, Col} from 'react-bootstrap';

export default class Acccount extends React.Component{
  render(){
    return(
 
    <div className='admin_form_wrapper'>
      <Row>
        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <div className='admin_panel_title'>
              Account
            </div>
          </Col>
        </Col>
      </Row>

      <AccountForm onSubmit={showResults} />
    </div>
    );
  }
}
