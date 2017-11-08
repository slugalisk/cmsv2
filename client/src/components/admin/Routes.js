import React from 'react';
import {Route} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import Admin from './Admin';
import Adminmenu from './menu/Sidemenu';
import SiteSetup from './Setup';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  
  render(){
 
    return(
      <div> 
        <Row>
      <Col md={2} className='admin_menu'>
      <Route path="/admin" render={(props) => <Adminmenu {...props}/>} />
      </Col>

      <Col md={10} mdOffset={2}>
        <Col md={10} mdOffset={1}>
          <Route exact path="/admin" render={(props) => <Admin {...props}/>}/>
          <Route exact path="/admin/setup" render={(props) => <SiteSetup {...props}/>}/>
        </Col>
      </Col>
      </Row>

      </div>
    )
  }
}