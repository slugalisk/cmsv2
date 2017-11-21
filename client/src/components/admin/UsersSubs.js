import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class UsersSubs extends React.Component{
  render(){
    return(
      <div className='admin_form_wrapper'>
        <Row>
          <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
            <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
              <div className='title_row'>
                Subscriptions
              </div>
            </Col>
          </Col>
        </Row>

        <Col md={3} className='admin_income__column'>
          <div className='admin_income__title'>
            All Time
          </div>
          Tier 1 - x<br/>
          Tier 2 - x<br/>
          Tier 3 - x<br/>
          Tier 4 - x<br/>
        </Col>

        <Col md={3} className='admin_income__column'>
          <div className='admin_income__title'>
            24 Hours
          </div>
          Tier 1 - x<br/>
          Tier 2 - x<br/>
          Tier 3 - x<br/>
          Tier 4 - x<br/>
        </Col>

        <Col md={3} className='admin_income__column'>
          <div className='admin_income__title'>
            7 days
          </div>
          Tier 1 - x<br/>
          Tier 2 - x<br/>
          Tier 3 - x<br/>
          Tier 4 - x<br/>
        </Col>

        <Col md={3} className='admin_income__column'>
          <div className='admin_income__title'>
            30 Days
          </div>
          Tier 1 - x<br/>
          Tier 2 - x<br/>
          Tier 3 - x<br/>
          Tier 4 - x<br/>
        </Col>
      </div>
    );
  }
}
