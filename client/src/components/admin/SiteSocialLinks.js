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
        <TwitterForm onSubmit={showResults}/>
        <RedditForm onSubmit={showResults}/>
        </Col>
        <Col md={5} mdOffset={2}>
        <LastfmForm onSubmit={showResults}/>
        <TwitchForm onSubmit={showResults}/>
        <YoutubeForm onSubmit={showResults}/>
        </Col>
      </Col>
    </div>
    );
  }
}
