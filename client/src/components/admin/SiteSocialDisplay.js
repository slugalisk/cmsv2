import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Option from './components/Option';
import Toggler from './components/Toggler';


export default class SocialDisplay extends React.Component{
  render(){
    return(
 
      <div>
        <Col 
        md={12} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
      <Option>
        test
        <Toggler
          togglerName="test"
        />
      </Option>
      
      </Col>
    </div>
    );
  }
}
