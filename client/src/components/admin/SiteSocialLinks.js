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
 
    <div>
      <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Col md={5}>
        <div className='admin_panel_title'>
          Twitter
        </div>
        <TwitterForm onSubmit={showResults}/>
        <div className='admin_panel_title'>
          Reddit
        </div>
        <RedditForm onSubmit={showResults}/>
        </Col>
        <Col md={5} mdOffset={2}>
        <div className='admin_panel_title'>
          Last.FM
        </div>
        <LastfmForm onSubmit={showResults}/>
        <div className='admin_panel_title'>
          Twitch
        </div>
        <TwitchForm onSubmit={showResults}/>
        <div className='admin_panel_title'>
          Youtube
        </div>
        <YoutubeForm onSubmit={showResults}/>
        </Col>
      </Col>
    </div>
    );
  }
}
