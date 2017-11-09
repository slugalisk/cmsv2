import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class Email extends React.Component{
  render(){
    return(
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <form>
        <input type="checkbox" name="vehicle" value="Bike"/> Regular Users<br/>
        <input type="checkbox" name="vehicle" value="Car"/> Tier 1<br/>
        <input type="checkbox" name="vehicle" value="Car"/> Tier 2<br/>
        <input type="checkbox" name="vehicle" value="Car"/> Tier 3<br/>
        <input type="checkbox" name="vehicle" value="Car"/> Tier 4<br/>
        <input type="checkbox" name="vehicle" value="Car"/> Custom Groups<br/>
        <input type="checkbox" name="vehicle" value="Car"/>Mods<br/>
        <input type="checkbox" name="vehicle" value="Car"/>Users who have joined in the last x days<br/>
        <input type="submit" value="Submit"/>
      </form>
      </Col>
    </div>
    );
  }
}
