import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../../../actions/templatenav';

import NavbarMobile from './NavbarMobile';
import NavbtnMobile from './NavbtnMobile';

class Navbar extends React.Component{
  toggleMenu(){
    this.props.action.toggleTemplateNav(!this.props.isHidden);
}
  render(){

  
    return(
      <div className='home_navbar'>
        <NavbarMobile
          isHidden={this.props.isHidden}
          toggler={()=>this.toggleMenu()}
        />
        <NavbtnMobile
          isHidden={this.props.isHidden}
          toggler={()=>this.toggleMenu()}
        />
        <Row>
          <Col
            md={1}
            mdOffset={1}
          >
            <Link 
              to='/'
              className='home_navbar__link'
            >
              Home
            </Link>
          </Col>

          <Col
            md={1}
          >

          <Link 
              to='/'
              className='home_navbar__link'
            >
              Blog
            </Link>
          </Col>
          
          <Col
            md={1}
          >
            <Link 
              to='/'
              className='home_navbar__link'
            >
              Twitter
            </Link>
          </Col>

          <Col
            md={1}
          >
            <Link 
              to='/'
              className='home_navbar__link'
            >
              Youtube
            </Link>
          </Col>

          <Col
            md={1}
          >
            <Link 
              to='/'
              className='home_navbar__link'
            >
              Reddit
            </Link>
          </Col>

          <Col
            md={1}
          >
          <Link 
              to='/'
              className='home_navbar__link'
            >
              Facebook
            </Link>
          </Col>

          <Col
            md={1}
          >
            <Link 
              to='/'
              className='home_navbar__link'
            >
              Donate
            </Link>
          </Col>

          <Col
            md={1}
          >
          <Link 
              to='/'
              className='home_navbar__link'
            >
              Subscribe
            </Link>
          </Col>
      </Row>

      </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    isHidden:state.templatenav.isHidden,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(MenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);