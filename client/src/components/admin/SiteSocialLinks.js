import React from 'react';

import {Row, Col} from 'react-bootstrap';
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
        <TwitterForm/>
        <RedditForm/>
        </Col>
        <Col md={5} mdOffset={2}>
        <LastfmForm/>
        <TwitchForm/>
        <YoutubeForm/>
        </Col>
      </Col>
    </div>
    );
  }
}
