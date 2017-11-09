import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class UsersSubs extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <Col md={3}>
        <div>All Time</div>
        Tier 1 - x<br/>
        Tier 2 - x<br/>
        Tier 3 - x<br/>
        Tier 4 - x<br/>
        </Col>

        <Col md={3}>
        <div>24 Hours</div>
        Tier 1 - x<br/>
        Tier 2 - x<br/>
        Tier 3 - x<br/>
        Tier 4 - x<br/>
        </Col>

        <Col md={3}>
        <div>7 days</div>
        Tier 1 - x<br/>
        Tier 2 - x<br/>
        Tier 3 - x<br/>
        Tier 4 - x<br/>
        </Col>

        <Col md={3}>
        <div>30 Days</div>
        Tier 1 - x<br/>
        Tier 2 - x<br/>
        Tier 3 - x<br/>
        Tier 4 - x<br/>
        </Col>

        <Col md={10} mdOffset={1}>
        </Col>
      </Col>
    </div>
    );
  }
}
