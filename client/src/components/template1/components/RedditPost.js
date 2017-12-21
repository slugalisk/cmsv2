import React from 'react';

import moment from 'moment';
export default class RedditSub extends React.Component{
  render(){
    return(
      <div className='reddit_post'>
        <a href={this.props.link}>
          Link
        </a> 
          {this.props.children}
        <br/>
        <span 
          className='reddit_timestamp'
        >
        {moment(this.props.timestamp, 'YYYY-MM-DD-HH:mm:ss.SSS Z').fromNow()}
        </span>
      </div>
    );
  }
}