import React from 'react';
import moment from 'moment';

export default class Tweetobject extends React.Component{

  render(){

    return(
      <div 
        className='twitter_post'
      >
        <a href={this.props.link}>
          Link &nbsp;
        </a> 
          {this.props.children}
        <br/>
        <span 
          className='twitter_timestamp'
        >
        {moment(this.props.timestamp, 'YYYY-MM-DD-HH:mm:ss.SSS Z').fromNow()}
        </span>
      </div>
    )
  }
}
/*2017-11-09T22:27:43.651*/