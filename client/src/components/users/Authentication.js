import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default class Authentication extends React.Component{
  render(){
    return(
      <div className='user_content'>
        <div className='user_content__title'>
          Providers
        </div>
        <div className='user_content__section'>
          Authentication providers are what we use to know who you are! you can login with any of the services below.
          
          <Row className='user_form__section'>
            <Col md={1} sm={6} xs={6}>
              Twitch 
            </Col>
            <Col md={1} sm={6} xs={6}>
            <Button 
              bsStyle= 'info' 
              type='submit' 
              className='user_button_thin'
            >
              Connect
            </Button>
            </Col>
          </Row>

          <Row className='user_form__section'>
            <Col md={1} sm={6} xs={6}>
              Google 
            </Col>
            <Col md={1} sm={6} xs={6}>
            <Button 
              bsStyle= 'info' 
              type='submit' 
              className='user_button_thin'
            >
              Connect
            </Button>
            </Col>
          </Row>

          <Row className='user_form__section'>
            <Col md={1} sm={6} xs={6}>
              Twitter 
            </Col>
            <Col md={1} sm={6} xs={6}>
            <Button 
              bsStyle= 'info' 
              type='submit' 
              className='user_button_thin'
            >
              Connect
            </Button>
            </Col>
          </Row>

           <Row className='user_form__section'>
            <Col md={1} sm={6} xs={6}>
              Reddit 
            </Col>
            <Col md={1} sm={6} xs={6}>
            <Button 
              bsStyle= 'info' 
              type='submit' 
              className='user_button_thin'
            >
              Connect
            </Button>
            </Col>
          </Row>

          <Row className='user_form__section'>
            <Col md={1} sm={6} xs={6}>
              Discord 
            </Col>
            <Col md={1} sm={6} xs={6}>
            <Button 
              bsStyle= 'info' 
              type='submit' 
              className='user_button_thin'
            >
              Connect
            </Button>
            </Col>
          </Row>
        </div>

        <h2 className='user_content__title'>Login Keys</h2>
        <div className='user_content__section'>
          Login keys allow you to authenticate without the need for a username or password.
          <br/>
          <br/>Key - Created
          <br/>[stuff]
          <br/>Create New Key
        </div>
      </div>
    );
  }
}