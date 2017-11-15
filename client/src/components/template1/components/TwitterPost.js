import React from 'react';
import moment from 'moment';
import twitter from 'twitter-text';

export default class Tweetobject extends React.Component{



  render(){

    return(
      <div 
        className='twitter_post'
      >
        <a 
          href={this.props.link}
          className='template_link'
        >
          Link &nbsp;
        </a> 
        <span dangerouslySetInnerHTML={{__html: twitter.autoLink(twitter.htmlEscape(this.props.children))}} />
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