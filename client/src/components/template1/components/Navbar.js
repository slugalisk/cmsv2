import React from 'react';
import {Col} from 'react-bootstrap';

import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{

  render(){

    return(
      <div className='home_navbar'>

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


      </div>
    );
  }
}