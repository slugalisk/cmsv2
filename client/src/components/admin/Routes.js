import React from 'react';
import {Route} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import Admin from './Admin';
import Adminmenu from './menu/Sidemenu';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  
  render(){
 
    return(
      <div> 
      <Col md={2}>
      <Route path="/admin" render={(props) => <Adminmenu {...props}/>} />
      </Col>

      <Route exact path="/admin" render={(props) => <Admin {...props}/>}/>
       admin routes
      </div>
    )
  }
}