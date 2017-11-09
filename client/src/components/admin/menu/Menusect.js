import React from "react";
import classNames from 'classnames';

import {Row, Col} from 'react-bootstrap';
export default class Keynotesect extends React.Component{
  
 

  render(){

	  return(
      <div>
        <Row>
          <div className='admin_menu__title'> 
            <strong>
              {this.props.title}
            </strong> 
        </div>
        
        <div className='admin_menu__subtext'>
          {this.props.children}
        </div>
      </Row>
    </div>
	  );
  }
}
