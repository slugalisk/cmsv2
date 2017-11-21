import React from 'react';

import {Row, Col} from 'react-bootstrap';
import { Provider } from 'react-redux';
import showResults from './components/showResults';

import TwitterForm from './forms/TwitterForm';
import LastfmForm from './forms/LastfmForm';
import RedditForm from './forms/RedditForm';
import TwitchForm from './forms/TwitchForm';
import YoutubeForm from './forms/YoutubeForm';

export default class SocialLinks extends React.Component{
  render(){
    return(
 
    <div className='admin_form_wrapper'>
      <Col 
        md={4} 
        sm={6} 
        xs={12} 
        className='admin_column__1'
      >
      </Col>
      <Col 
        md={4} 
        mdOffset={4} 
        sm={6} 
        smOffset={6} 
        xs={12} 
        xsOffset={0}
        className='admin_column__2'>
      </Col>

      <Row>
        <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <div className='title_row'>
              Social Media Links
            </div>
          </Col>
        </Col>
      </Row>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Twitter
          </div>
          <TwitterForm onSubmit={showResults}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Reddit
          </div>
          <RedditForm onSubmit={showResults}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Last.FM
          </div>
          <LastfmForm onSubmit={showResults}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Twitch
          </div>
          <TwitchForm onSubmit={showResults}/>
        </Col>
      </Col>

      <Col md={4} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}> 
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='title_row'>
            Youtube
          </div>
          <YoutubeForm onSubmit={showResults}/>
        </Col>
      </Col>
    </div>
    );
  }
}
